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
          color="green-7"
          @click="drawer = !drawer"
        />

        <q-space />

        <div>
          <q-avatar @click="drawerRight = !drawerRight" clickable v-ripple>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above class="bg-grey-2">
      <q-list>
        <q-item-label header>
          <q-card
            class="q-pa-sm text-white"
            style="
              background-image: url('https://cdn.quasar.dev/img/parallax2.jpg');
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
                <q-item-label>Mary</q-item-label>
                <q-item-label caption class="text-white"
                  ><q-badge color="green-7"
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
                text-color="green-7"
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
                  text-color="green-7"
                  class="shadow-1"
                  icon="people"
                  size="md"
                />
              </q-item-section>

              <q-item-section class="text-dark">Pengguna</q-item-section>
            </template>

            <q-item clickable :to="{ name: 'pengguna' }" v-ripple>
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-green-7 text-weight-medium">
                Semua Pengguna
              </q-item-section>
            </q-item>
            <q-item clickable :to="{ name: 'add_pengguna' }" v-ripple>
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-green-7 text-weight-medium">
                Daftarkan Pengguna
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="white"
                  text-color="green-7"
                  class="shadow-1"
                  icon="devices"
                  size="md"
                />
              </q-item-section>

              <q-item-section class="text-dark">Perangkat</q-item-section>
            </template>

            <q-item clickable v-ripple :to="{ name: 'perangkat' }">
              <q-item-section avatar> </q-item-section>

              <q-item-section class="text-green-7 text-weight-medium">
                Semua Perangkat
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'add_perangkat' }">
              <q-item-section avatar></q-item-section>

              <q-item-section class="text-green-7 text-weight-medium">
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
                text-color="green-7"
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
                text-color="green-7"
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
                text-color="green-7"
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

    <q-drawer v-model="drawerRight" class="bg-grey-2" side="right">
      <q-list>
        <q-list padding>
          <q-item-label header class="text-weight-bold">Setting</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar
                rounded
                color="white"
                text-color="green-7"
                class="shadow-1"
                icon="account_circle"
                size="md"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-dark">Profile</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar
                rounded
                color="white"
                text-color="green-7"
                class="shadow-1"
                icon="help"
                size="md"
                v-ripple
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-dark">About app</q-item-section>
          </q-item>
        </q-list>
        <q-separator />
        <q-item-label caption class="text-caption text-grey-6 flex flex-center q-mt-md"
          >Copyright &copy; 2023, PSTI.</q-item-label
        >
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
      drawerRight: false
    };
  },
  methods: {
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
