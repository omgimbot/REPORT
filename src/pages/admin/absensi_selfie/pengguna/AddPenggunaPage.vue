<template>
  <q-page class="q-pa-md">
    <div class="col q-px-md">
      <q-item-label style="font-size: 20px" class="text-weight-bold text-dark">
        Tambah Pengguna
      </q-item-label>
      <q-item-label style="font-size: 12px" class="text-blue-10 text-caption"
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
            v-model="form.INSTANSI"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nama instansi"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="group_work" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-positive text-white"
            v-model="form.ADMINISTRATOR"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nama administrator"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="account_circle" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-positive text-white"
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
            standout="bg-positive text-white"
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
            standout="bg-positive text-white"
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
            ><q-badge class="q-px-md q-py-sm" color="positive"
              >Data Pendukung</q-badge
            ></q-item-label
          >
        </div>
        <div class="items-start">
          <q-input
            standout="bg-positive text-white"
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
            standout="bg-positive text-white"
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
          <q-btn color="blue-10" type="submit" dense class="q-px-lg fit"
            >Add Data</q-btn
          >
        </div>
      </q-form>
    </q-card>

    <q-card class="my-card q-pa-md" v-else flat>
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
            v-model="form.KODE_PENGGUNA"
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
            v-model="form.PENGGUNA"
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
            standout="bg-positive text-white"
            v-model="form.TELEPON"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nomor telepon"
            dense
            lazy-rules
            mask="#############"
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="phone" class="q-pr-md" /> </template
          ></q-input>

          <q-input
            standout="bg-positive text-white"
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
            standout="bg-positive text-white"
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
            ><q-badge class="q-px-md q-py-sm" color="positive"
              >Data Pendukung</q-badge
            ></q-item-label
          >
        </div>
        <div class="row items-start">
          <q-select
            standout="bg-positive text-white"
            v-model="form.JENIS_KELAMIN"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Jenis kelamin"
            :options="options.jenis_kelamin"
            dense
            lazy-rules
            :rules="defaultRules"
            use-input
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
            <template v-slot:prepend>
              <q-icon name="male" class="q-pr-md" />
            </template>
          </q-select>
          <q-select
            standout="bg-positive text-white"
            v-model="form.JABATAN"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Jabatan"
            option-label="JABATAN"
            key="JABATAN"
            :options="options.jabatan"
            dense
            lazy-rules
            :rules="defaultRules"
            multiple
            use-chips
          >
            <template v-slot:prepend>
              <q-icon name="groups" class="q-pr-md" />
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label class="text-capitalize"
                    >{{ scope.opt.JABATAN }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input
            v-if="this.dataUser.user.JENIS_INSTANSI === 'Pendidikan'"
            standout="bg-positive text-white"
            v-model="form.KELAS"
            class="text-white col q-pa-sm text-capitalize"
            label="Kelas"
            mask="##"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="pin" class="q-pr-md" /> </template
          ></q-input>
        </div>
        <q-separator class="q-my-md" color="grey-3" />
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
          >
            <q-btn color="blue-10" type="submit" dense size="sm" class="q-px-lg"
              >Add Data</q-btn
            >
          </q-item-label>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { ListService } from "../../../../helper/services/ListService";
let { jabatan } = [];

const model = () => {
  return {
    KODE_INSTANSI: null,
    KODE_PENGGUNA: null,
    KODE_LAYANAN: "yx9re",
    PENGGUNA: null,
    TELEPON: null,
    PASSWORD: null,
    ALAMAT: null,
    STATUS: 1,
    ROLE: 2,
    DITAMBAHKAN: null,
    JABATAN: [],
    JENIS_KELAMIN: null,
    KELAS: null
  };
};

export default {
  name: "IndexPage",
  data() {
    return {
      form: model(),
      options: {
        jenis_kelamin: ["Laki - Laki", "Perempuan"],
        jabatan
      },
      isPwd: true,
      dataUser: this.$q.localStorage.getItem("data"),
      defaultRules: [(val) => (val && val.length > 0) || "Tidak Boleh Kosong"]
    };
  },
  created() {
    this.form.KODE_PENGGUNA = this.generateRandomId(5);
    this.getList();
  },
  methods: {
    getList() {
      ListService.getListJabatan()
        .then((res) => {
          this.options.jabatan = res.data.data;
        })
        .catch(() => this.$commonErrorNotif());
    },
    generateRandomId(length) {
      const randomStr = Math.random().toString(36).substr(2, length);
      return randomStr;
    },
    resetField() {
      this.form = model();
      this.defaultRules = null;
    },
    onSubmit() {
      this.onCreate();
    },
    async onCreate() {
      this.$q.loading.show();
      this.form.DITAMBAHKAN = this.dataUser.user.ADMINISTRATOR;
      this.form.KODE_INSTANSI = this.dataUser.user.KODE_INSTANSI;
      await this.$axios
        .post("pengguna/create", this.form)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.$successNotif(response.data.message, "positive");
            this.$router.push({ name: 'pengguna' })
          }
        })
        .catch((err) => {
          this.$commonErrorNotif();
        });
    }
  }
};
</script>
