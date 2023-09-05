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
            v-model="form.TELEPON"
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
            v-model="form.PASSWORD"
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

          <q-input
            standout="bg-green-7 text-white"
            v-model="form.ALAMAT"
            class="text-white col q-pa-sm text-capitalize"
            label="Alamat lengkap"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="map" class="q-pr-md" /> </template
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
        <div class="items-start">
          <q-input
            standout="bg-green-7 text-white"
            v-model="form.KODE_INSTANSI"
            class="text-white col-4 q-pa-sm"
            label="ID"
            dense
            readonly
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="qr_code" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-green-7 text-white"
            v-model="form.DOMISILI"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Domisili usaha"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="map" class="q-pr-md" /> </template
          ></q-input>
        </div>
        <q-separator class="q-my-md" color="grey-3" />
        <div class="items-start">
            <q-btn color="blue-10" type="submit" dense class="q-px-lg"
              >Add Data</q-btn
            >
        </div>
      </q-form>
    </q-card>

    <q-card class="my-card q-pa-md q-mt-lg" v-else>
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
        <div class="row items-start">
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
            v-model="form.TELEPON"
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
            v-model="form.PASSWORD"
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

          <q-input
            standout="bg-green-7 text-white"
            v-model="form.ALAMAT"
            class="text-white col q-pa-sm text-capitalize"
            label="Alamat lengkap"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="map" class="q-pr-md" /> </template
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
        <div class="row items-start">
          <q-input
            standout="bg-green-7 text-white"
            v-model="form.KODE_INSTANSI"
            class="text-white col-4 q-pa-sm"
            label="ID"
            dense
            readonly
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="qr_code" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-green-7 text-white"
            v-model="form.DOMISILI"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Domisili usaha"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="map" class="q-pr-md" /> </template
          ></q-input>
        </div>
        <q-separator class="q-my-md" color="grey-3" />
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
          >
            <q-btn color="blue-10" type="submit" dense class="q-px-lg"
              >Add Data</q-btn
            >
          </q-item-label>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
const model = () => {
  return {
    NAMA: null,
    PASSWORD: null,
    TELEPON: null,
    ALAMAT: null,
    DOMISILI: null,
    KODE_INSTANSI: null,
    STATUS: 1,
    ROLE: 1,
    DITAMBAHKAN: null
  };
};

export default {
  name: "IndexPage",
  data() {
    return {
      form: model(),
      isPwd: true,
      dataUser: this.$q.localStorage.getItem("data")
    };
  },
  created() {
    this.form.KODE_INSTANSI = this.generateRandomId(5);
  },
  methods: {
    generateRandomId(length) {
      const randomStr = Math.random().toString(36).substr(2, length);
      return randomStr;
    },
    onSubmit() {
      this.onCreate();
    },
    async onCreate() {
      this.$q.loading.show();
      this.form.DITAMBAHKAN = this.dataUser.user.NAMA;
      await this.$axios
        .post("pengguna/create", this.form)
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
