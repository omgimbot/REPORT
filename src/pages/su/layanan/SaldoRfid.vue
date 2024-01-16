<template>
  <q-page class="q-pa-md bg-accent">
    <q-toolbar style="margin-top: -1%">
      <div class="row">
        <div class="title">Welcome back,</div>
        <div class="typing-text" id="typing-text">Superadmin</div>
      </div>
      <q-space />
      <div class="text-weight-bold">Superadmin</div>
      <q-item>
        <q-avatar rounded size="40px" style="border-radius: 50px">
          <img src="images/demeter.jpg" />
          <q-badge floating color="green"></q-badge>
        </q-avatar>
      </q-item>
    </q-toolbar>
    <q-card class="no-shadow q-pa-md q-mb-md">
      <div class="col q-px-sm">
        <q-item-label
          style="font-size: 20px"
          class="text-weight-bold text-dark"
        >
          Tambah Saldo Kartu Rfid Anda
        </q-item-label>
        <q-item-label style="font-size: 12px" class="text-primary text-caption"
          >Pastikan lakukan pengecekan data terlebih dulu sebelum melakukan
          penginputan data!</q-item-label
        >
      </div>
      <q-space
    /></q-card>

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
          <q-select
            standout="bg-primary text-white"
            v-model="form.CARD_ID"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Kartu RFID"
            option-label="UID"
            key="uid"
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

          <q-input
            standout="bg-primary text-white"
            v-model="form.SALDO"
            class="text-white col-4 q-pa-sm text-capitalize"
            label="Nominal Topup"
            reverse-fill-mask
            dense
            lazy-rules
            :rules="defaultRules"
          >
            <template v-slot:prepend>
              <q-icon name="money" class="q-pr-md" /> </template
          ></q-input>
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
let { uid } = [];
import { useQuasar, QSpinnerFacebook } from "quasar";

const model = () => {
  return {
    UID: [],
    CARD_ID: null,
    SALDO: null
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
        uid
      },
      isPwd: true,
      dataUser: this.$q.localStorage.getItem("data"),
      defaultRules: [(val) => (val && val.length > 0) || "Tidak Boleh Kosong"]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      ListService.getListRfid()
        .then((res) => {
          this.options.code = res.data.data;
        })
        .catch(() => this.$commonErrorNotif());
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
        backgroundColor: "black"
      });

      const formData = new FormData();

      formData.append("CARD_ID", this.form.CARD_ID.UID);
      formData.append("SALDO", this.form.SALDO);

      console.log(formData);

      await this.$axios
        .post("emoney/create", formData)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.$successNotif(response.data.message, "positive");
            // this.$router.push("/rfid");
          }
        })
        .catch((err) => {
          this.$commonErrorNotif();
        });
    }
    // TUTUP MENGIRIM DATA
  }
};

// };
</script>
