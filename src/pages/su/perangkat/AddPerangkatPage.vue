<template>
  <q-page class="q-pa-md">
    <div class="col q-px-md">
      <q-item-label style="font-size: 20px" class="text-weight-bold text-dark">
        Tambah Perangkat
      </q-item-label>
      <q-item-label style="font-size: 12px" class="text-caption text-blue-10"
        >Pastikan lakukan pengecekan data terlebih dulu sebelum melakukan
        penginputan data !</q-item-label
      >
    </div>

    <q-card class="my-card q-pa-md" flat v-if="$q.platform.is.mobile">
      <q-form
        @reset="resetField()"
        @submit="onSubmit()"
        class="q-gutter-md q-mt-sm"
      >
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
            ><q-badge class="q-px-md q-py-sm" color="positive"
              >Data Pokok</q-badge
            ></q-item-label
          >
        </div>
        <div class="items-start">
          <q-input
            standout="bg-positive text-white"
            v-model="form.KODE_LAYANAN"
            class="text-white col q-pa-sm"
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
            standout="bg-positive text-white"
            v-model="form.LAYANAN"
            class="text-white col q-pa-sm text-capitalize"
            label="Nama layanan"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="devices" class="q-pr-md" /> </template
          ></q-input>
        </div>

        <q-separator class="q-my-md" color="grey-3" />
        <div class="items-start">
          <q-btn color="blue-10" size="sm" type="submit" dense class="q-px-lg"
            >Add Data</q-btn
          >
        </div>
      </q-form>
    </q-card>

    <q-card class="my-card q-pa-md" flat v-else>
      <q-form
        @reset="resetField()"
        @submit="onSubmit()"
        class="q-gutter-md q-mt-sm"
      >
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
            ><q-badge class="q-px-md q-py-sm" color="positive"
              >Data Pokok</q-badge
            ></q-item-label
          >
        </div>
        <div class="row items-start">
          <q-input
            standout="bg-positive text-white"
            v-model="form.KODE_PERANGKAT"
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
            standout="bg-positive text-white"
            v-model="form.MAC"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="MAC Address"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="123" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-positive text-white"
            v-model="form.PERANGKAT"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nama perangkat"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="devices" class="q-pr-md" /> </template
          ></q-input>
        </div>

        <q-separator class="q-my-md" color="grey-3" />
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
          >
            <q-btn color="blue-10" size="sm" type="submit" dense class="q-px-lg"
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
    LAYANAN: null,
    KODE_LAYANAN: null,
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
    this.form.KODE_LAYANAN = this.generateRandomId(5);
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
        .post("layanan/create", this.form)
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
