<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar>
      <div style="margin-left: 15%" class="row">
        <div class="title">Welcome back,</div>
        <div class="typing-text" id="typing-text">
          Admin
          {{ this.dataUser.user.ADMINISTRATOR }}
        </div>
      </div>
      <q-space />
      <div class="usn">
        <div class="text-weight-bold user">
          {{ this.dataUser.user.ADMINISTRATOR }}
        </div>
        <div class="instansi">
          {{ this.dataUser.user.INSTANSI }}
        </div>
      </div>
      <q-item>
        <q-avatar rounded size="40px" style="border-radius: 50px">
          <img
            crossorigin="anonymous"
            :src="
              this.dataUser.user.ICON == undefined ||
              this.dataUser.user.ICON === '-'
                ? 'https://cdn.quasar.dev/img/avatar.png'
                : `${port}${this.dataUser.user.ICON}`
            "
          />
          <q-badge floating color="green"></q-badge>
        </q-avatar>
      </q-item>
    </q-toolbar>

    <q-drawer v-model="drawer" show-if-above class="bg-primary" :width="250">
      <q-list>
        <q-item header class="logo flex flex-center">
          <!-- <q-item>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img
                    crossorigin="anonymous"
                    :src="
                      this.dataUser.user.ICON == undefined ||
                      this.dataUser.user.ICON === '-'
                        ? 'https://cdn.quasar.dev/img/avatar.png'
                        : `${port}${this.dataUser.user.ICON}`
                    "
                  />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label
                  class="text-white text-weight-bold text-capitalize"
                  >{{ this.dataUser.user.ADMINISTRATOR }}</q-item-label
                >
                <q-item-label caption class="text-white text-capitalize"
                  ><q-badge color="positive">{{
                    this.dataUser.user.INSTANSI
                  }}</q-badge></q-item-label
                >
              </q-item-section>
            </q-item> -->
        </q-item>

        <q-list padding>
          <q-item-label header class="text-weight-bold text-white"
            >Main Menu</q-item-label
          >

          <q-item clickable v-ripple :to="{ name: 'superadmin' }">
            <q-item-section avatar>
              <q-avatar
                rounded
                color="transparent"
                text-color="white"
                icon="dashboard"
                size="xl"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-white">Dashboard</q-item-section>
          </q-item>

          <div v-for="(d, i) in this.listLayanan" :key="i">
            <q-expansion-item expand-separator v-if="d.KODE_LAYANAN == '1d657'">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar
                    rounded
                    color="transparent"
                    text-color="white"
                    icon="badge"
                    size="xl"
                  />
                </q-item-section>

                <q-item-section class="text-white">Other</q-item-section>
              </template>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'layanan' }"
                class="bg-primary"
              >
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-white">
                  Semua Layanan
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple :to="{ name: 'add_layanan' }">
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-white">
                  Daftarkan Layanan
                </q-item-section>
              </q-item>
            </q-expansion-item>

            <q-expansion-item expand-separator v-if="d.KODE_LAYANAN == '1d657'">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar
                    rounded
                    color="transparent"
                    text-color="white"
                    icon="face_retouching_natural"
                    size="xl"
                  />
                </q-item-section>

                <q-item-section class="text-white">Absensi</q-item-section>
              </template>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'perangkat' }"
                class="bg-primary"
              >
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-white"> Laporan </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'pengguna' }"
                class="bg-primary"
              >
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-white">
                  Semua Pengguna
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'add_pengguna' }"
                class="bg-primary"
              >
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-white">
                  Daftarkan Pengguna
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'type' }"
                class="bg-primary"
              >
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-white">
                  Jenis Laporan
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'jabatan' }"
                class="bg-primary"
              >
                <q-item-section avatar></q-item-section>

                <q-item-section class="text-white"> Jabatan </q-item-section>
              </q-item>
            </q-expansion-item>
          </div>

          <q-item-label header class="text-weight-bold">Extras</q-item-label>

          <q-item clickable v-ripple @click="logout()">
            <q-item-section avatar>
              <q-avatar
                rounded
                color="transparent"
                text-color="white"
                icon="power_settings_new"
                size="xl"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-white">Log Out</q-item-section>
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
      arrayLayanan: [],
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
          persistent: true,
        })
        .onOk(() => {
          this.$q.localStorage.clear();
          this.$router.push({ name: "auth" });
        });
    },
  },
};
</script>

<style>
.typing-text {
  font-family: "Arial", sans-serif;
  font-weight: 600;
  font-size: 17px;
  border-right: 1px solid #333;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s steps(30) forwards, blink 0.5s infinite step-end;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 55%;
  }
}

@keyframes blink {
  46% {
    border-right-color: transparent;
  }
}
.logo {
  background-image: url("/images/logodemeter.png");
  background-repeat: no-repeat;
  background-size: 60%;
  margin-top: 5%;
  background-position: center;
}

.usn {
  margin-left: 25%;
}
.user {
  font-size: 20px;
}
.instansi {
  font-size: 10px;
  text-align: right;
}
</style>
