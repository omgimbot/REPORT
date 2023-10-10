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
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                  <q-badge floating color="light-green"></q-badge>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-white text-weight-bold">META REKSA DIGITAL</q-item-label>
                <q-item-label caption class="text-white"
                  ><q-badge color="positive"
                    >admin@gmail.com</q-badge
                  ></q-item-label
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

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="white"
                  text-color="positive"
                  class="shadow-1"
                  icon="group_work"
                  size="md"
                />
              </q-item-section>

              <q-item-section class="text-dark">Instansi</q-item-section>
            </template>

            <q-item
              clickable
              :to="{ name: 'instansi' }"
              v-ripple
              class="bg-white"
            >
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-positive">
                Semua Instansi
              </q-item-section>
            </q-item>
            <q-item
              clickable
              :to="{ name: 'add_instansi' }"
              v-ripple
              class="bg-white"
            >
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-positive">
                Daftarkan Instansi
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="white"
                  text-color="positive"
                  class="shadow-1"
                  icon="dns"
                  size="md"
                />
              </q-item-section>

              <q-item-section class="text-dark">Layanan</q-item-section>
            </template>

            <q-item
              clickable
              v-ripple
              :to="{ name: 'layanan' }"
              class="bg-white"
            >
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-positive">
                Semua Layanan
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :to="{ name: 'add_layanan' }"
              class="bg-white"
            >
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-positive">
                Daftarkan Layanan
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="white"
                  text-color="positive"
                  class="shadow-1"
                  icon="devices"
                  size="md"
                />
              </q-item-section>

              <q-item-section class="text-dark">Perangkat</q-item-section>
            </template>

            <q-item
              clickable
              v-ripple
              :to="{ name: 'perangkat' }"
              class="bg-white"
            >
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-positive">
                Semua Perangkat
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :to="{ name: 'add_perangkat' }"
              class="bg-white"
            >
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-positive">
                Daftarkan Perangkat
              </q-item-section>
            </q-item>
          </q-expansion-item>

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
      drawer: false,
    };
  },
  methods: {
    logout() {
      this.$q
        .dialog({
          title: "Informasi",
          message: "Apakah Anda Yakin ingin keluar dari halaman superadmin ini ?",
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
