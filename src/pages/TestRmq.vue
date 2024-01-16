<template>
  <div class="row items-start q-pa-md">
    <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
      <q-card class="my-card bg-green-10">
        <q-card-section>a </q-card-section>
      </q-card>
    </div>
    <div class="col">
      <p>{{ this.kartunya }}</p>
      <p>{{ this.saldo }}</p>
      <p>{{ this.untukupdate }}</p>
    </div>
    <div>
      <div class="row q-col-gutter-sm q-ml-md q-mr-lg">
        <div class="col-md-6 col-xs-12">
          <q-card>
            <!-- apex-line component goes here if it's provided elsewhere -->
          </q-card>
        </div>
        <div class="col-md-6 col-xs-12">
          <q-card>
            <!-- apex-area component goes here if it's provided elsewhere -->
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mqttjs from "mqtt";
const model = () => {
  return {
    SALDO: null
  };
};

export default {
  data() {
    return {
      kartunya: "",
      saldo: null,
      harga: 100000,
      form: model(),
      untukupdate: null,
      isConnected: false, // Variabel penanda koneksi
      isSubscribed: false // Variabel penanda langganan
    };
  },
  mounted() {
    const options = {
      username: "/absensi:absensi_rfid",
      password: "absensi_rfid!",
      clientId: "test",
      protocolId: "MQTT",
      reconnectPeriode: 0,
      keepAlive: 0
    };

    const client = mqttjs.connect("ws://103.167.112.188:15675/ws", options);

    client.on("connect", () => {
      // Mencetak pesan hanya sekali setelah koneksi pertama
      if (!this.isConnected) {
        console.log("Connected to MQTT server");
        this.isConnected = true;
      }

      // Langganan hanya dilakukan sekali
      if (!this.isSubscribed) {
        client.subscribe("routing_rfid", (err) => {
          if (!err) {
            console.log("Subscribed to routing_rfid");
            this.isSubscribed = true;
          }
        });
      }
    });

    client.on("message", async (topic, message) => {
      try {
        const data = JSON.parse(message.toString());
        const X = data.UID.replace(/\s/g, "");

        if (X) {
          // console.log(X);
          this.$axios
            .get(`/emoney/getById/${X}`)
            .finally()
            .then((response) => {
              if (!this.$parseResponse(response.data)) {
                this.saldo = response.data.data.SALDO;
                this.untukupdate = this.saldo - 100000;
              }
            })
            .catch(() => this.$commonErrorNotif());

          this.form.SALDO = this.untukupdate;
          
          if (this.form.SALDO !== null) {
            this.$axios
              .put(`/emoney/update/${X}`, this.form)
              .finally()
              .then((response) => {
                if (!this.$parseResponse(response.data)) {
                  console.log(response.data);
                }
              })
              .catch(() => this.$commonErrorNotif());
          }
        }

        // Memastikan kartunya hanya berisi nilai UID
        this.kartunya = X;
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    });
  }
};
</script>
