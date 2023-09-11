<template>
  <q-page class="q-pa-md">
    <div class="col">
      <q-item-label style="font-size: 20px" class="text-weight-bold text-dark">
        Tambah Perangkat
      </q-item-label>
    </div>

    <q-card class="my-card q-pa-md q-mt-lg" v-if="$q.platform.is.mobile">
      <q-item-label
        style="font-size: 14px"
        class="text-weight-medium text-indigo-10"
        >Pastikan lakukan pengecekan data terlebih dulu !</q-item-label
      >
      <q-form
        @reset="resetField()"
        @submit="onSubmit()"
        class="q-gutter-md q-mt-sm"
      >
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
            ><q-badge class="q-px-md q-py-sm" color="green-7"
              >Data Pokok</q-badge
            ></q-item-label
          >
        </div>
        <div class="items-start">
          <q-input
            standout="bg-green-7 text-white"
            v-model="form.NAMA"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nama lengkap"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="account_circle" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-green-7 text-white"
            v-model="form.MAC_ADDRESS"
            class="text-white col-4 q-pa-sm"
            label="Nomor telepon"
            mask="####-####-####"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="phone" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-green-7 text-white"
            v-model="form.JENIS"
            class="text-white col-4 q-pa-sm"
            label="Password"
            dense
            lazy-rules
            :rules="defaultRules"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
            <template v-slot:prepend>
              <q-icon name="fingerprint" class="q-pr-md" /> </template
          ></q-input>
        </div>

        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
            ><q-badge class="q-px-md q-py-sm" color="green-7"
              >Data Pendukung</q-badge
            ></q-item-label
          >
        </div>
        <q-separator class="q-my-md" color="grey-3" />
        <div class="items-start">
            <q-btn color="blue-10" type="submit" dense class="q-px-lg"
              >Add Data</q-btn
            >
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
const model = () => {
  return {
    NAMA: null,
    MAC_ADDRESS: null,
    JENIS: null,
  };
};

export default {
  name: "IndexPage",
  data() {
    return {
      form: model(),
      isPwd: true,
      // dataUser: this.$q.localStorage.getItem("data")
    };
  },
  methods: {
    onSubmit() {
      this.onCreate();
    },
    async onCreate() {
      this.$q.loading.show();
      await this.$axios
        .post("perangkat/create", this.form)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.$successNotif(response.data.message, "positive");
            this.$router.go(0);
          }
        })
        .catch((err) => {
          this.$commonErrorNotif();
        });
    }
  }
};
</script>
