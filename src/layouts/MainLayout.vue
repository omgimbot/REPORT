<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="positive"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above class="bg-grey-2">
      <q-list>
        <q-item-label header>
          <q-card
            class="q-pa-sm text-white"
            style="
              background-image: url('images/banner/header.jpg');
              background-repeat: no-repeat;
              background-size: cover;
            "
          >
            <q-item>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img crossorigin="anonymous" :src="
                    this.dataUser.user.ICON == undefined || this.dataUser.user.ICON === '-'
                      ? 'https://cdn.quasar.dev/img/avatar.png'
                      : `${port}${this.dataUser.user.ICON}`
                  "/>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-white text-weight-bold text-capitalize">{{
                    this.dataUser.user.ADMINISTRATOR
                  }}</q-item-label>
                <q-item-label caption class="text-white text-capitalize"
                  ><q-badge color="positive">{{
                    this.dataUser.user.INSTANSI
                  }}</q-badge></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-card>
        </q-item-label>

        <q-list padding>
          <q-item-label header class="text-weight-bold">Main Menu</q-item-label>

          <q-item clickable v-ripple :to="{ name: 'superadmin' }">
            <q-item-section avatar>
              <q-avatar
                rounded
                color="white"
                text-color="positive"
                class="shadow-1"
                icon="dashboard"
                size="md"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-dark">Dashboard</q-item-section>
          </q-item>

          <div v-for="(d, i) in this.listLayanan" :key="i">
            <q-expansion-item
              expand-separator
              v-if="d.KODE_LAYANAN == 'qhyom'"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar
                    rounded
                    color="white"
                    text-color="positive"
                    class="shadow-1"
                    icon="badge"
                    size="md"
                  />
                </q-item-section>

                <q-item-section class="text-dark">TEST</q-item-section>
              </template>

              <q-item clickable v-ripple :to="{ name: 'layanan' }">
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Semua Layanan
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple :to="{ name: 'add_layanan' }">
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Daftarkan Layanan
                </q-item-section>
              </q-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              v-if="d.KODE_LAYANAN == 'qhyom'"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar
                    rounded
                    color="white"
                    text-color="positive"
                    class="shadow-1"
                    icon="face_retouching_natural"
                    size="md"
                  />
                </q-item-section>

                <q-item-section class="text-dark"
                  >Absensi</q-item-section
                >
              </template>

              <q-item clickable v-ripple :to="{ name: 'perangkat' }" class="bg-white">
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Laporan
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple :to="{ name: 'pengguna' }" class="bg-white">
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Semua Pengguna
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple :to="{ name: 'add_pengguna' }" class="bg-white">
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Daftarkan Pengguna
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple :to="{ name: 'type' }" class="bg-white">
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Jenis Laporan
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple :to="{ name: 'jabatan' }" class="bg-white">
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-positive text-weight-medium">
                  Jabatan
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </div>

          <q-item-label header class="text-weight-bold">Extras</q-item-label>

          <q-item clickable v-ripple @click="logout()">
            <q-item-section avatar>
              <q-avatar
                rounded
                color="white"
                text-color="positive"
                class="shadow-1"
                icon="power_settings_new"
                size="md"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-dark">Log Out</q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar
                rounded
                color="white"
                text-color="positive"
                class="shadow-1"
                icon="bluetooth"
                size="md"
              />
            </q-item-section>

            <q-item-section class="text-dark"
              >Rounded avatar-type icon</q-item-section
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar
                rounded
                color="white"
                text-color="positive"
                class="shadow-1"
                icon="bluetooth"
                size="md"
              />
            </q-item-section>

            <q-item-section class="text-dark"
              >Rounded avatar-type icon</q-item-section
            >
          </q-item> -->
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      port: "http://localhost:5072/",
      drawer: false,
      dataUser: this.$q.localStorage.getItem("data"),
      arrayLayanan: []
    };
  },
  created() {
    this.getLayanan();
  },
  methods: {
    getLayanan() {
      this.listLayanan = this.dataUser.user.LAYANAN;
    },
    logout() {
      this.$q
        .dialog({
          title: "Informasi",
          message: "Apakah Anda Yakin ingin keluar dari aplikasi ini ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.$q.localStorage.clear();
          this.$router.push({ name: "auth" });
        });
    }
  }
};
</script>
