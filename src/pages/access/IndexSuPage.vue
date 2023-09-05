<template>
  <q-page class="q-pa-md row flex-center" style="height: 100%">
    <div class="row fit" v-if="$q.platform.is.mobile">
      <div class="col">
        <q-card class="row">
          <q-card class="col q-pa-sm">
            <q-card-section>
              <div class="text-h6 text-weight-bold">Sign In</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div class="text-caption">
                Gunakan data yang sudah di dapatkan sebelumnya untuk dapat masuk
                ke dalam sistem <strong>DEMETER.</strong>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-sm">
              <q-tabs
                v-model="tab"
                align="left"
                narrow-indicator
                inline-label
                dense
                indicator-color="transparent"
                class="q-mb-lg rounded-borders"
              >
                <q-tab class="text-white bg-blue-10 q-mr-xs" name="mails"
                  ><q-btn
                    class="btn-fixed-width"
                    color="white"
                    dense
                    size="sm"
                    flat
                    label="GUEST"
                    icon="account_circle"
                /></q-tab>
                <q-tab class="text-white bg-blue-10 q-ml-xs" name="alarms">
                  <q-btn
                    class="btn-fixed-width"
                    color="white"
                    dense
                    size="sm"
                    flat
                    label="Administrator"
                    icon="admin_panel_settings"
                /></q-tab>
              </q-tabs>

              <div class="q-gutter-sm">
                <q-card>
                  <q-tab-panels
                    v-model="tab"
                    animated
                    transition-prev="fade"
                    transition-next="fade"
                    class="text-caption"
                  >
                    <q-tab-panel name="mails">
                      <q-form @submit="onSubmitGuest()">
                        <div class="q-gutter-sm">
                          <q-item-label class="text-weight-bold text-grey-6"
                            >Telepon</q-item-label
                          >
                          <q-input
                            outlined
                            v-model="form.TELEPON"
                            placeholder="Nomor telepon"
                            mask="#############"
                            dense
                          />
                          <q-item-label class="text-weight-bold text-grey-6"
                            >Password</q-item-label
                          >
                          <q-input
                            outlined
                            v-model="form.PASSWORD"
                            placeholder="Password"
                            :type="isPwd ? 'password' : 'text'"
                            dense
                          >
                            <template v-slot:append>
                              <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                              /> </template
                          ></q-input>
                          <q-btn
                            class="text-white q-mt-lg bg-blue-10 q-px-xl q-py-sm"
                            size="sm"
                            type="submit"
                            >Sign In</q-btn
                          >
                        </div>
                      </q-form>
                    </q-tab-panel>

                    <q-tab-panel name="alarms">
                      <q-form @submit="onSubmitAdmin()">
                        <div class="q-gutter-sm">
                          <q-item-label class="text-weight-bold text-grey-6"
                            >Telepon</q-item-label
                          >
                          <q-input
                            outlined
                            v-model="form.TELEPON"
                            placeholder="Nomor telepon"
                            mask="#############"
                            dense
                          />
                          <q-item-label class="text-weight-bold text-grey-6"
                            >Password</q-item-label
                          >
                          <q-input
                            outlined
                            v-model="form.PASSWORD"
                            placeholder="Password"
                            :type="isPwd ? 'password' : 'text'"
                            dense
                          >
                            <template v-slot:append>
                              <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                              /> </template
                          ></q-input>
                          <q-btn
                            class="text-white q-mt-lg bg-blue-10 q-px-xl q-py-sm"
                            size="sm"
                            type="submit"
                            >Sign In</q-btn
                          >
                        </div>
                      </q-form>
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card>
              </div>
            </q-card-section>
            <q-card-section class="q-pt-sm">
              <div
                class="text-caption rounded-borders q-pa-sm"
                style="background: rgba(0, 0, 0, 0.2)"
              >
                <q-badge color="blue-8">
                  <q-icon name="campaign" color="white" />
                </q-badge>
                Silahkan hubungi developer layanan terhadap data yang digunakan
                untuk mengkases layanan jika terjadi kesalahan.
              </div>
            </q-card-section>
          </q-card>
        </q-card>
      </div>
    </div>

    <div class="row flex flex-center" v-else>
      <div class="col">
        <q-card class="q-pa-sm row">
          <q-card class="col q-pa-sm">
            <q-card-section>
              <div class="text-h6 text-weight-bold">Sign In</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div class="text-caption">
                Pastikan menjaga akun yang anda miliki demi masalah keamanan data.
              </div>
            </q-card-section>

            <q-card-section class="q-pt-sm">
              <q-form @submit="onSubmitAdmin()">
                <div class="q-gutter-sm">
                  <q-item-label class="text-weight-bold text-grey-6"
                    >Telepon</q-item-label
                  >
                  <q-input
                    outlined
                    v-model="form.TELEPON"
                    placeholder="Nomor telepon"
                    mask="#############"
                    dense
                  />
                  <q-item-label class="text-weight-bold text-grey-6"
                    >Password</q-item-label
                  >
                  <q-input
                    outlined
                    v-model="form.PASSWORD"
                    placeholder="Password"
                    :type="isPwd ? 'password' : 'text'"
                    dense
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      /> </template
                  ></q-input>

                  <q-btn
                    class="text-white q-mt-lg bg-green-7 q-px-xl q-py-sm"
                    size="sm"
                    type="submit"
                    >Sign In</q-btn
                  >
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      tab: "mails",
      visible: false,
      form: {
        TELEPON: null,
        PASSWORD: null
      },
      isPwd: true,
      dense: false
    };
  },
  methods: {
    onSubmitAdmin() {
      this.$q.loading.show();
      this.$axios
        .post("/pengguna/login", {
          TELEPON: this.form.TELEPON,
          PASSWORD: this.form.PASSWORD
        })
        .finally(() => this.$q.loading.hide())
        .then((res) => {
          if (!this.$parseResponse(res.data)) {
            const data = res.data.data;
            const role = data.user.ROLE;
            this.$q.localStorage.set("data", data);
            console.log(role);
            if (role === "0") {
              this.$router.push({ name: "superadmin" });
            } else {
              this.$q.localStorage.clear();
              this.$errorNotif("Mohon Maaf Halaman Belum Tersedia");
            }
          }
        })
        .catch((err) => this.$errorServer(err));
    }
  }
};
</script>
