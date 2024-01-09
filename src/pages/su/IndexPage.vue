<template>
  <q-page class="q-pa-md bg-accent">
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

    <q-card class="my-card q-pa-md q-mb-lg no-shadow">
      <div class="row q-gutter-sm">
        <div class="col">
          <q-card class="my-card" flat>
            <div class="col">
              <q-item-label style="font-size: 18px" class="text-weight-medium"
                >Selamat datang di DEMETER</q-item-label
              >
              <q-item-label
                style="font-size: 13px"
                class="text-caption text-grey"
                >Kelola semua data yang dibutuhkan untuk berjalannya
                layanan.</q-item-label
              >
              <div class="row q-gutter-sm q-mt-md items-start">
                <div class="col">
                  <q-card class="my-card bg-brown-8" flat>
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
                          {{ dataCount }}</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-brown-8" flat>
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
                  <q-card class="my-card bg-brown-8" flat>
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
                  <q-card class="my-card bg-brown-8" flat>
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
        </div>
      </div>
    </q-card>
    <div>
      <div class="row q-gutter-md q-mb-md">
        <q-card class="col no-shadow q-pa-md"><BarChart /></q-card>
        <q-card class="col no-shadow q-pa-md"><BarChart /></q-card>
        <q-card class="col no-shadow q-pa-md"><BarChart /></q-card>
      </div>
      <div class="row q-gutter-md">
        <q-card class="col no-shadow q-pa-md"><DonutChart /></q-card>
        <q-card class="col no-shadow q-pa-md"><DonutChart /></q-card>
        <q-card class="col no-shadow q-pa-md"><DonutChart /></q-card>
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
// import PieChart from "src/components/PieChart.vue";
// import LineChart from "src/components/apexchart/LineChart.vue";
// import Lottie from "src/components/lottie.vue";
import * as animationData from "assets/animation.json";

// import ChartLine from "src/components/apexchart/ChartLine.vue";
export default {
  name: "IndexPage",
  components: {
    BarChart,
    DonutChart,
    // PieChart
    // LineChart,
    // lottie: Lottie,
    // ChartLine,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      dataCount: null,
    };
  },
  created() {
    // Pemanggilan API untuk mendapatkan jumlah data
    this.fetchDataCount();
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
    async fetchDataCount() {
      try {
        // Ganti URL sesuai dengan endpoint server Anda
        const response = await this.$axios.get("/getCount/");
        this.dataCount = response.data.count;
      } catch (error) {
        console.error("Error fetching data count:", error);
      }
    },
  },
};
</script>
