<template>
  <q-layout class="q-pa-md flex flex-center">
    <div class="flex flex-center q-gutter-md">
      <q-card class="q-pa-md text-center bg-accent" flat>
        <div class="text-h6">Ikan Lele</div>
        <div class="text-h5">Rp.{{ this.harga }}</div>
        <q-img class="gambar"></q-img>
        <q-btn
          flat
          color="primary"
          @click="this.beliBarang"
          size="xl"
          label="Beli sekarang"
          ><q-tooltip>Beli sekarang</q-tooltip>
        </q-btn>
      </q-card>
      <!-- <q-input filled v-model="kartunya">{{ this.kartunya }}</q-input>
      26°C {{ this.kartunya }}
      <p>{{ this.saldo }}</p>
      <p>{{ this.untukupdate }}</p> -->
    </div>
    <q-dialog
      v-model="beliform"
      persistent
      transition-hide="fade"
      transition-show="fade"
    >
      <q-card style="width: 700px; max-width: 80vw" flat>
        <q-card-section>
          <div class="text-h6 text-left text-primary">FORM PEMBAYARAN</div>
          <q-item-label class="text-left text-grey-5 text-caption"
            >Detail Pembayaran</q-item-label
          >
          <hr />
        </q-card-section>
        <q-form @submit="onBayar">
          <q-card-section>
            <div>
              <q-input
                standout="bg-primary text-white"
                v-model="this.KARTUNYA"
                class="text-white col-4 q-pa-sm text-capitalize"
                label="CARD_ID"
                dense
                lazy-rules
                :rules="defaultRules"
              >
                <template v-slot:prepend>
                  <q-icon name="payment" class="q-pr-md" /> </template
              ></q-input>

              <q-input
                standout="bg-primary text-white"
                v-model="form.SALDO"
                class="text-white col-4 q-pa-sm text-capitalize"
                label="SALDO"
                dense
                lazy-rules
                :rules="defaultRules"
              >
                <template v-slot:prepend>
                  <q-icon name="money" class="q-pr-md" /> </template
              ></q-input>
              <q-input
                standout="bg-primary text-white"
                v-model="this.harga"
                class="text-white col-4 q-pa-sm text-capitalize"
                label="HARGA BARANG"
                dense
                readonly
                lazy-rules
                :rules="defaultRules"
              >
                <template v-slot:prepend>
                  <q-icon name="money" class="q-pr-md" /> </template
              ></q-input>
            </div>
          </q-card-section>
          <q-item-label class="q-ml-md text-caption">
            Total Kembalian : {{ this.untukupdate }}
          </q-item-label>

          <q-card-actions align="right" class="text-primary">
            <q-btn type="submit" flat label="BAYAR" v-close-popup />
            <q-btn flat label="KEMBALI" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import mqttjs from "mqtt";
const model = () => {
  return {
    SALDO: null,
    CARD_ID: null
  };
};

export default {
  data() {
    return {
      // kartunya: "",
      CARD_ID: "",
      SALDO: "",
      KARTUNYA: "",
      saldo: null,
      harga: 100000,
      form: model(),
      untukupdate: null,
      isConnected: false, // Variabel penanda koneksi
      isSubscribed: false, // Variabel penanda langganan
      beliform: false
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
        this.KARTUNYA = data.UID.replace(/\s/g, "");
        // console.log(this.KARTUNYA);

        // Panggil metode untuk melakukan operasi axios getById
        this.getDataById();
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    });
  },
  created() {
    this.getDataById();
  },
  methods: {
    getDataById: async function () {
      this.$axios
        .get(`/emoney/getById/${this.KARTUNYA}`)
        .finally(() => {
          // Setelah mendapatkan data, hitung this.untukupdate
        })
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.form.SALDO = response.data.data.SALDO;
            // this.form.SALDO = this.untukupdate;
            this.untukupdate = this.form.SALDO - this.harga;
            // this.form.CARD_ID = this.KARTUNYA;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },
    beliBarang() {
      this.beliform = true;
      // this.form.CARD_ID = this.KARTUNYA;
      this.form.SALDO = this.untukupdate;
    },
    onBayar() {
      this.onUpdate();
    },
    onUpdate() {
      console.log(this.form);
      this.$axios
        .put(`/emoney/update/${this.KARTUNYA}`, this.form)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            console.log(response.data);
            this.beliform = false;
            // this.getData();
          }
          // this.form.CARD_ID = KODEKARTU;
          // this.CARD_ID = KODEKARTU;
          // this.form.SALDO = this.untukupdate;
        });
    }
  }
};
</script>

<style>
.gambar {
  background-image: url("/images/produk1.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-position: center;
}
</style>
