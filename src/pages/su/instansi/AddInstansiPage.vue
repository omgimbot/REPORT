<template>
  <q-page class="q-pa-md">
    <div class="col q-px-md">
      <q-item-label style="font-size: 20px" class="text-weight-bold text-dark">
        Tambah Instansi
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
          <q-select
            standout="bg-positive text-white"
            v-model="form.LAYANAN"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Layanan"
            option-label="LAYANAN"
            key="LAYANAN"
            :options="options.layanan"
            dense
            lazy-rules
            :rules="defaultRules"
            multiple
            use-chips
          >
            <template v-slot:prepend>
              <q-icon name="grid_view" class="q-pr-md" />
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label class="text-capitalize"
                    >{{ scope.opt.LAYANAN }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
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
            mask="############"
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
        <div class="row items-start">
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
          <q-select
            standout="bg-positive text-white"
            v-model="form.LAYANAN"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Layanan"
            option-label="LAYANAN"
            key="LAYANAN"
            :options="options.layanan"
            dense
            lazy-rules
            :rules="defaultRules"
            multiple
            use-chips
          >
            <template v-slot:prepend>
              <q-icon name="grid_view" class="q-pr-md" />
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label class="text-capitalize"
                    >{{ scope.opt.LAYANAN }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            standout="bg-positive text-white"
            v-model="form.JENIS_INSTANSI"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Jenis instansi"
            :options="options.jenis_instansi"
            dense
            lazy-rules
            :rules="defaultRules"
            use-input
            @filter="filterJenisInstansi"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
            <template v-slot:prepend>
              <q-icon name="supervised_user_circle" class="q-pr-md" />
            </template>
          </q-select>
          <q-file
            standout="bg-positive text-white"
            bottom-slots
            dense
            v-model="form.ICON"
            label="Logo instansi"
            accept=".jpg, .png, image/*"
            counter
            max-files="1"
            class="text-white col-4 q-pa-sm text-capitalize"
          >
            <template v-slot:prepend>
              <q-icon name="attachment" class="q-pr-md" />
            </template>
            <template v-slot:append>
              <q-icon
                v-if="model !== null"
                name="close"
                @click.stop.prevent="model = null"
                class="cursor-pointer"
              />
              <q-icon name="search" @click.stop.prevent />
            </template>

            <template v-slot:hint> Field hint </template>
          </q-file>
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
import { ListService } from "./../../../helper/services/ListService";
let { layanan } = [];
const jenis_instansi = ["Pendidikan", "Pemerintahan", "Perusahaan", "Lainnya"];
import { useQuasar, QSpinnerFacebook } from "quasar";

const model = () => {
  return {
    ADMINISTRATOR: null,
    INSTANSI: null,
    PASSWORD: null,
    TELEPON: null,
    ALAMAT: null,
    DOMISILI: null,
    KODE_INSTANSI: null,
    STATUS: 1,
    ROLE: 1,
    DITAMBAHKAN: null,
    LAYANAN: [],
    JENIS_INSTANSI: null,
    ICON: null,
  };
};

export default {
  name: "IndexPage",
  setup() {
    const $q = useQuasar();
  },
  data() {
    return {
      form: model(),
      options: {
        layanan,
        jenis_instansi,
      },
      isPwd: true,
      dataUser: this.$q.localStorage.getItem("data"),
      defaultRules: [(val) => (val && val.length > 0) || "Tidak Boleh Kosong"],
    };
  },
  created() {
    this.form.KODE_INSTANSI = this.generateRandomId(5);
    this.getList();
  },
  methods: {
    filterJenisInstansi(val, update) {
      if (val === "") {
        update(() => {
          this.options.jenis_instansi = jenis_instansi;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.options.jenis_instansi = jenis_instansi.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    getList() {
      ListService.getListLayanan()
        .then((res) => {
          this.options.layanan = res.data.data;
        })
        .catch(() => this.$commonErrorNotif());
    },
    generateRandomId(length) {
      const randomStr = Math.random().toString(36).substr(2, length);
      return randomStr;
    },
    onSubmit() {
      this.onCreate();
    },
    async onCreate() {
      this.form.DITAMBAHKAN = this.dataUser.user.NAMA;
      this.$q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: "green",
        spinnerSize: 100,
        backgroundColor: "black",
      });

      if (!this.form.ICON) {
        return;
      }

      const formData = new FormData();

      formData.append("ICON", this.form.ICON);
      formData.append("ADMINISTRATOR", this.form.ADMINISTRATOR);
      formData.append("INSTANSI", this.form.INSTANSI);
      formData.append("PASSWORD", this.form.PASSWORD);
      formData.append("TELEPON", this.form.TELEPON);
      formData.append("ALAMAT", this.form.ALAMAT);
      formData.append("DOMISILI", this.form.DOMISILI);
      formData.append("KODE_INSTANSI", this.form.KODE_INSTANSI);
      formData.append("STATUS", this.form.STATUS);
      formData.append("ROLE", this.form.ROLE);
      formData.append("DITAMBAHKAN", this.form.DITAMBAHKAN);
      formData.append("LAYANAN", JSON.stringify(this.form.LAYANAN));
      formData.append("JENIS_INSTANSI", this.form.JENIS_INSTANSI);

      await this.$axios
        .post("instansi/create", formData)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.$successNotif(response.data.message, "positive");
            this.$router.push("/instansi");
          }
        })
        .catch((err) => {
          this.$commonErrorNotif();
        });
    },
  },
};
</script>
