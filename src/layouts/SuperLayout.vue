<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar>
      <q-space />
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

    <q-drawer v-model="drawer" show-if-above class="bg-primary" :width="250">
      <q-list>
        <q-item header class="logo flex flex-center">
          <!-- <q-card
            class="q-pa-sm text-white"
            style="
              background-image: url('images/banner/headerbg.jpg');
              background-repeat: no-repeat;
              background-size: cover;
            "
          >
            <q-item>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="images/demeter.jpg" />
                  <q-badge floating color="light-green"></q-badge>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-white text-weight-bold"
                  >DEMETER</q-item-label
                >
                <q-item-label caption class="text-white"
                  ><q-badge color="green-9"
                    >superadmin@gmail.com</q-badge
                  ></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-card> -->
        </q-item>

        <q-list padding>
          <q-item-label header class="text-weight-bold text-accent"
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

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="transparent"
                  text-color="white"
                  icon="group_work"
                  size="xl"
                />
              </q-item-section>

              <q-item-section class="text-white">Instansi</q-item-section>
            </template>

            <q-item
              clickable
              :to="{ name: 'instansi' }"
              v-ripple
              class="bg-primary"
            >
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-white">
                Semua Instansi
              </q-item-section>
            </q-item>
            <q-item
              clickable
              :to="{ name: 'add_instansi' }"
              v-ripple
              class="bg-primary"
            >
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-white">
                Daftarkan Instansi
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="transparent"
                  text-color="white"
                  icon="dns"
                  size="xl"
                />
              </q-item-section>

              <q-item-section class="text-white">Layanan</q-item-section>
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
            <q-item
              clickable
              v-ripple
              :to="{ name: 'add_layanan' }"
              class="bg-primary"
            >
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-white">
                Daftarkan Layanan
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="transparent"
                  text-color="white"
                  icon="devices"
                  size="xl"
                />
              </q-item-section>

              <q-item-section class="text-white">Perangkat</q-item-section>
            </template>

            <q-item
              clickable
              v-ripple
              :to="{ name: 'perangkat' }"
              class="bg-primary"
            >
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-white">
                Semua Perangkat
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :to="{ name: 'add_perangkat' }"
              class="bg-primary"
            >
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-white">
                Daftarkan Perangkat
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple :to="{ name: 'guru' }">
            <q-item-section avatar>
              <q-avatar
                rounded
                color="transparent"
                text-color="white"
                icon="people"
                size="xl"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-white">Semua Guru</q-item-section>
          </q-item>

          <q-item clickable v-ripple :to="{ name: 'siswa' }">
            <q-item-section avatar>
              <q-avatar
                rounded
                color="transparent"
                text-color="white"
                icon="people"
                size="xl"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-white">Semua Siswa</q-item-section>
          </q-item>

          <!-- <q-item-label header class="text-weight-bold text-accent"
            >Extras</q-item-label
          > -->

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

            <q-item-section class="text-white"
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

            <q-item-section class="text-white"
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
      drawer: false,
    };
  },
  methods: {
    logout() {
      this.$q
        .dialog({
          title: "Informasi",
          message:
            "Apakah Anda Yakin ingin keluar dari halaman superadmin ini ?",
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
.logo {
  background-image: url("/images/logodemeter.png");
  background-repeat: no-repeat;
  background-size: 60%;
  margin-top: 5%;
  background-position: center;
}
</style>
