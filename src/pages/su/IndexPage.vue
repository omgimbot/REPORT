<template>
  <q-page class="q-pa-md bgbaru">
    <q-toolbar style="margin-top: -1%">
      <div class="row text-grey-5">
        <div class="title">Welcome back,</div>
        <div class="typing-text" id="typing-text">Superadmin</div>
      </div>
      <q-space />
      <div class="text-weight-bold text-grey-2">Superadmin</div>
      <q-item>
        <q-avatar rounded size="40px" style="border-radius: 50px">
          <img src="images/demeter.jpg" />
          <q-badge floating color="green"></q-badge>
        </q-avatar>
      </q-item>
    </q-toolbar>
    <!-- <q-card
      class="my-card q-pa-md q-mt-lg q-mb-lg"
      v-if="$q.platform.is.mobile"
    >
      <div class="row q-gutter-sm">
        <div class="col">
          <q-card class="my-card" flat>
            <div class="col">
              <q-item-label
                style="font-size: 14px"
                class="text-weight-medium text-indigo-10"
                >Selamat datang di DEMETER</q-item-label
              >
              <q-item-label class="text-caption text-grey"
                >Kelola semua data yang dibutuhkan untuk berjalannya
                layanan.</q-item-label
              >
              <div class="q-gutter-sm q-mt-md items-start">
                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-white"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-white"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-white"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-white"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-white"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-white"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-white"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-white"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-white"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-white"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card>

           <LineChart /> -->
    <!-- </div>
      </div>
    </q-card> -->

    <q-card class="my-card q-pa-md q-mb-lg shadow-2 carddd">
      <div class="row q-gutter-sm">
        <div class="col">
          <div class="col">
            <q-item-label
              style="font-size: 18px"
              class="text-weight-medium text-white"
              >Selamat datang di DEMETER Pendidikan:
            </q-item-label>
            <q-item-label
              style="font-size: 13px"
              class="text-caption text-grey-4"
              >Kelola semua data yang dibutuhkan untuk berjalannya
              layanan.</q-item-label
            >
            <div class="row q-gutter-sm q-mt-md items-start">
              <div class="col">
                <q-card class="my-card bg-primary" flat>
                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label caption class="text-caption text-white"
                        >Total pengguna</q-item-label
                      >
                      <q-item-label
                        caption
                        style="font-size: 25px"
                        class="text-weight-bold q-mb-xs text-uppercase text-white"
                      >
                        {{ jenisinstansi_Pendidikan }}</q-item-label
                      >
                    </q-item-section>
                    <lottie style="width: 200px" :options="defaultOptions" />
                  </q-item>
                </q-card>
              </div>

              <div class="col">
                <q-card class="my-card bg-primary" flat>
                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label caption class="text-white"
                        >Total Rfid Card</q-item-label
                      >
                      <q-item-label
                        caption
                        style="font-size: 25px"
                        class="text-weight-bold q-mb-xs text-uppercase text-white"
                        >{{ jenisinstansi_Perusahaan }}</q-item-label
                      >
                    </q-item-section>
                    <lottie style="width: 155px" :options="defaultOptions2" />
                  </q-item>
                </q-card>
              </div>

              <div class="col">
                <q-card class="my-card bg-primary" flat>
                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label caption class="text-caption text-white"
                        >Total pengguna</q-item-label
                      >
                      <q-item-label
                        caption
                        style="font-size: 25px"
                        class="text-weight-bold q-mb-xs text-uppercase text-white"
                        >{{ jenisinstansi }}</q-item-label
                      >
                    </q-item-section>
                    <lottie style="width: 200px" :options="defaultOptions" />
                  </q-item>
                </q-card>
              </div>

              <div class="col">
                <q-card class="my-card bg-primary" flat>
                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label caption class="text-caption text-white"
                        >Total pengguna</q-item-label
                      >
                      <q-item-label
                        caption
                        style="font-size: 25px"
                        class="text-weight-bold q-mb-xs text-uppercase text-white"
                        >1000</q-item-label
                      >
                    </q-item-section>
                    <lottie style="width: 200px" :options="defaultOptions" />
                  </q-item>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
    <div>
      <div class="row q-gutter-md q-mb-md">
        <q-card class="col shadow-9 q-pa-md carddd"><BarChart /></q-card>
        <q-card class="col shadow-9 q-pa-md carddd"><BarChart /></q-card>
        <q-card class="col shadow-9 q-pa-md carddd"><BarChart /></q-card>
      </div>
      <div class="row q-gutter-md">
        <q-card class="col shadow-9 carddd q-pa-md"><DonutChart /></q-card>
        <q-card class="col shadow-9 carddd q-pa-md"><DonutChart /></q-card>
        <q-card class="col shadow-9 carddd q-pa-md"><DonutChart /></q-card>
      </div>
    </div>

    <!-- <ChartLine /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-page>
</template>

<script>
import BarChart from "src/components/apexchart/BarChart.vue";
import DonutChart from "src/components/apexchart/DonutChart.vue";
import {
  Pendidikan,
  Perusahaan,
  Pemerintahan,
  Lainnya,
} from "./../../helper/services/Jenis_Instansi";
// import PieChart from "src/components/PieChart.vue";
// import LineChart from "src/components/apexchart/LineChart.vue";
import Lottie from "src/components/lottie.vue";
import * as animationData from "assets/ADMINN.json";
import * as animationData2 from "assets/RFID.json";

// import ChartLine from "src/components/apexchart/ChartLine.vue";
export default {
  name: "IndexPage",
  components: {
    BarChart,
    DonutChart,
    // PieChart
    // LineChart,
    lottie: Lottie,
    // ChartLine,
  },
  data() {
    return {
      jenisinstansi: 0,
      jenisinstansi_Pendidikan: 0,
      jenisinstansi_Perusahaan: 0,
      //batas doang
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      defaultOptions2: { animationData: animationData2.default },
      animationSpeed2: 2,
      dataCount: null,
      Pendidikan: Pendidikan,
      Perusahaan: Perusahaan,
      Pemerintahan: Pemerintahan,
      Lainnya: Lainnya,
    };
  },
  created() {
    // Pemanggilan API untuk mendapatkan jumlah data
    this.getCountInstansi();
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
    getCountInstansi() {
      this.$axios
        .get("instansi/getCountjenisinstansi")
        .then((res) => {
          console.log(res.data);
          if (!this.$parseResponse(res.data)) {
            const data = res.data.data;
            var Pendidikan = 0;
            var Perusahaan = 0;
            data.map(function (datas) {
              if (datas._id.toLowerCase() === "pendidikan") {
                Pendidikan = datas.myCount;
              } else {
                Perusahaan = datas.myCount;
              }
            });
            this.jenisinstansi_Pendidikan = Number(Pendidikan);
            this.jenisinstansi_Perusahaan = Number(Perusahaan);
            this.jenisinstansi = Pendidikan + Perusahaan;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
.bgbaru {
  background-image: url("/bgbaru.svg"); /* Ganti '/bgbaru.svg' dengan path gambar yang sesuai */
  background-size: cover; /* Untuk memastikan gambar mengisi seluruh latar belakang */
  background-position: center; /* Untuk memposisikan gambar di tengah latar belakang */
  background-repeat: no-repeat;
}
.carddd {
  background: transparent;

  backdrop-filter: blur(15px);
}
</style>
