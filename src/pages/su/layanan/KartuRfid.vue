<template>
  <q-page class="q-pa-md bg-accent">
    <q-card class="no-shadow q-pa-md q-mb-md">
      <div class="col q-px-md">
        <q-item-label
          style="font-size: 20px"
          class="text-weight-bold text-dark"
        >
          Tambah Akses Kartu RFID
        </q-item-label>
        <q-item-label style="font-size: 12px" class="text-primary text-caption"
          >Pastikan lakukan pengecekan data terlebih dulu sebelum melakukan
          penginputan data!</q-item-label
        >
      </div></q-card
    >

    <q-card class="my-card q-pa-md" flat>
      <q-form
        @reset="resetField()"
        @submit="onSubmit()"
        class="q-gutter-md q-mt-sm"
      >
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
            ><q-badge class="q-px-md q-py-sm" color="primary"
              >Data Kartu RFID</q-badge
            ></q-item-label
          >
        </div>

        <div class="row items-start">
          <!-- <q-input
            standout="bg-primary text-white"
            v-model="form.DOMISILI"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Domisili usaha"
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="map" class="q-pr-md" /> </template
          ></q-input> -->
          <q-select
            standout="bg-primary text-white"
            v-model="form.USER_ID"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nama User Instansi"
            option-label="INSTANSI"
            key="INSTANSI"
            transition-show="scale"
            transition-hide="flip-down"
            :options="options.instansi"
            dense
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="grid_view" class="q-pr-md" />
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label class="text-capitalize"
                    >{{ scope.opt.INSTANSI }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            standout="bg-primary text-white"
            v-model="form.CARD_ID"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Kartu RFID"
            option-label="UID"
            key="UID"
            transition-show="scale"
            transition-hide="flip-down"
            :options="options.code"
            dense
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="grid_view" class="q-pr-md" />
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label class="text-capitalize"
                    >{{ scope.opt.UID }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <q-separator class="q-my-md" color="grey-3" />
        <div class="row items-start">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-blue-grey-10"
          >
            <q-btn color="brown-8" type="submit" dense size="sm" class="q-px-lg"
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
let { instansi } = [];
let { uid } = [];
// const jenis_instansi = ["Pendidikan", "Pemerintahan", "Perusahaan", "Lainnya"];
import { useQuasar, QSpinnerFacebook } from "quasar";

const model = () => {
  return {
    INSTANSI: [],
    UID: [],
    USER_ID: null,
    CARD_ID: null,
    // STATUS: 1,
    // DITAMBAHKAN: null,
    // LAYANAN: [],
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
        // layanan,
        uid,
        instansi,
        // jenis_instansi,
      },
      isPwd: true,
      dataUser: this.$q.localStorage.getItem("data"),
      defaultRules: [(val) => (val && val.length > 0) || "Tidak Boleh Kosong"],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // filterJenisInstansi(val, update) {
    //   if (val === "") {
    //     update(() => {
    //       this.options.jenis_instansi = jenis_instansi;
    //     });
    //     return;
    //   }
    //   update(() => {
    //     const needle = val.toLowerCase();
    //     this.options.jenis_instansi = jenis_instansi.filter(
    //       (v) => v.toLowerCase().indexOf(needle) > -1
    //     );
    //   });
    // },
    getList() {
      ListService.getListInstansi()
        .then((res) => {
          this.options.instansi = res.data.data;
        })
        .catch(() => this.$commonErrorNotif());

      ListService.getListRfid()
        .then((res) => {
          this.options.code = res.data.data;
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
    //MENGIRIM DATA KE DATABASE
    async onCreate() {
      this.$q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: "green",
        spinnerSize: 100,
        backgroundColor: "black",
      });

      console.log(this.form);

      // formData.append("JENIS_INSTANSI", this.form.JENIS_INSTANSI);

      await this.$axios
        .post("usercard/create", this.form)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.$successNotif(response.data.message, "positive");
            this.$router.push("/rfid");
          }
        })
        .catch((err) => {
          this.$commonErrorNotif();
        });
    },
    //TUTUP MENGIRIM DATA
  },
};
</script>
