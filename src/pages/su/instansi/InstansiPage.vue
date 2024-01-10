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
    <div v-if="$q.platform.is.mobile">
      <q-card class="no-shadow q-pa-md q-mb-md">
        <div class="col q-px-md">
          <q-item-label
            style="font-size: 20px"
            class="text-weight-bold text-dark"
          >
            Daftar Instansi
          </q-item-label>
          <q-item-label
            style="font-size: 12px"
            class="text-primary text-caption"
            >Pastikan lakukan pengecekan data terlebih dulu sebelum melakukan
            penginputan data !</q-item-label
          >
        </div></q-card
      >

      <q-card class="my-card q-mt-sm" flat>
        <div class="row q-gutter-sm">
          <div class="col">
            <q-card class="my-card" flat>
              <div class="col">
                <q-item-label
                  style="font-size: 14px"
                  class="text-weight-medium text-indigo-10 q-mb-md"
                  >Apa yang ingin anda cari ?</q-item-label
                >
                <div class="row q-gutter-sm">
                  <q-input
                    standout="bg-positive"
                    v-model="PASSWORD"
                    placeholder="Cari berdasarkan..."
                    class="col q-mt-sm"
                    flat
                    dense
                  >
                    <template v-slot:prepend>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                  <q-btn color="blue-10" class="q-mt-sm">Cari data</q-btn>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-card>
    </div>

    <div v-else>
      <q-card class="no-shadow q-pa-md q-mb-md">
        <div class="col">
          <q-item-label
            style="font-size: 20px"
            class="text-weight-bold text-dark"
          >
            Daftar Instansi
          </q-item-label>
          <q-item-label
            style="font-size: 12px"
            class="text-primary text-caption"
            >Superadmin dapat melihat para Instansi yang sudah terdaftar
            disini</q-item-label
          >
        </div></q-card
      >

      <q-card class="my-card q-pa-md" flat>
        <div class="row q-gutter-sm">
          <div class="col">
            <q-card class="my-card" flat>
              <div class="col">
                <q-item-label
                  style="font-size: 14px"
                  class="text-weight-medium text-primary q-mb-md"
                  >Apa yang ingin anda cari ?</q-item-label
                >
                <div class="row q-gutter-sm">
                  <q-input
                    standout="bg-primary"
                    v-model="filter"
                    placeholder="Cari berdasarkan..."
                    class="col q-mt-sm"
                    flat
                    dense
                  >
                    <template v-slot:append>
                      <q-badge class="q-pa-sm" color="brown-8">
                        <q-icon name="search" />
                      </q-badge>
                    </template>
                  </q-input>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-card>
    </div>

    <div v-if="$q.platform.is.mobile">
      <q-card
        v-ripple
        class="my-card q-mt-sm"
        flat
        bordered
        v-for="(d, i) in this.instansi"
        :key="i"
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="q-gutter-sm"
              >{{ d.INSTANSI }}
              <q-badge class="text-uppercase">{{ d.KODE_INSTANSI }}</q-badge>
              <q-badge
                :color="d.STATUS == 0 ? 'blue-10' : 'positive'"
                :label="d.STATUS == 0 ? 'TIDAK AKTIF' : 'AKTIF'"
              ></q-badge>
            </q-item-label>
            <q-item-label caption> {{ d.TELEPON }} </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal class="q-pa-md">
          <q-item-label caption> {{ d.DOMISILI }} </q-item-label>
        </q-card-section>

        <q-card-section horizontal class="q-pa-sm bg-grey-3">
          <q-item-label caption class="flex">
            <q-icon name="event" class="q-mr-sm"></q-icon>
            {{ $parseDate(d.CREATED_AT).fullDate }}
          </q-item-label>
        </q-card-section>
      </q-card>
    </div>

    <q-card class="my-card q-pa-md" flat v-else>
      <q-table
        :rows="rows"
        :columns="columns"
        :pagination="pagination"
        :filter="filter"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="PHOTO" :props="props" class="text-uppercase">
              <q-avatar rounded size="48px">
                <img
                  crossorigin="anonymous"
                  :src="
                    props.row.ICON == undefined || props.row.ICON === '-'
                      ? 'https://cdn.quasar.dev/img/avatar.png'
                      : `${port}${props.row.ICON}`
                  "
                />
              </q-avatar>
              <div>
                <q-badge color="positive">{{
                  props.row.KODE_INSTANSI
                }}</q-badge>
              </div>
            </q-td>
            <q-td key="INSTANSI" :props="props" class="text-capitalize">
              {{ props.row.INSTANSI }}
            </q-td>
            <q-td key="ADMINISTRATOR" :props="props" class="text-capitalize">
              {{ props.row.ADMINISTRATOR }}
            </q-td>
            <q-td key="TELEPON" :props="props" class="text-capitalize">
              {{ props.row.TELEPON }}
            </q-td>
            <q-td key="DOMISILI" :props="props" class="text-capitalize">
              {{ props.row.DOMISILI }}
            </q-td>
            <q-td key="STATUS" :props="props" class="text-capitalize">
              <q-badge
                :color="props.row.STATUS == 0 ? 'blue-10' : 'positive'"
                :label="props.row.STATUS == 0 ? 'TIDAK AKTIF' : 'AKTIF'"
              ></q-badge>
            </q-td>
            <q-td key="TGL_DAFTAR" :props="props" class="text-capitalize">
              {{ $parseDate(props.row.CREATED_AT).fullDate }}
              <div>
                <q-badge
                  class="text-lowercase"
                  color="brown-12"
                  style="font-size: 10px"
                  >di post oleh : {{ props.row.DITAMBAHKAN }}</q-badge
                >
              </div>
            </q-td>
            <q-td key="ACTION" :props="props" class="text-capitalize">
              <q-btn
                round
                flat
                color="primary"
                @click="this.editData(props.row)"
                size="sm"
                icon="edit"
                ><q-tooltip>edit data Instansi</q-tooltip></q-btn
              >
              <q-btn
                round
                flat
                @click="this.delete(props.row)"
                color="primary"
                size="sm"
                icon="delete"
                ><q-tooltip>hapus data Instansi</q-tooltip></q-btn
              >
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>

    <q-dialog
      v-model="deletenotif"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">HAPUS DATA</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Yakin ingin menghapus data ini
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn
            @click="this.deletedialogdata(this.GUID)"
            flat
            label="OK"
            v-close-popup
          />
          <!-- <q-btn flat label="CANCEL" v-close-popup /> -->
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="editnotif"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card
        class="bg-white text-green-7"
        style="width: 900px; max-width: 80vw"
      >
        <q-card-section>
          <div class="text-h6 text-center">EDIT DATA</div>
        </q-card-section>
        <q-form @submit="onEdit">
          <q-card-section class="q-pt-none">
            <div class="q-mt-md items-start row q-col-gutter-md">
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

              <!-- <q-input
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
          ></q-input> -->

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
              <!-- <q-file
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
          </q-select> -->
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn type="submit" flat label="OK" v-close-popup />
            <q-btn flat label="cancel" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
const status = ["Aktif", "Tidak Aktif"];
import { ListService } from "./../../../helper/services/ListService";
let { layanan } = [];
const model = () => {
  return {
    ADMINISTRATOR: null,
    INSTANSI: null,
    PASSWORD: null,
    TELEPON: null,
    ALAMAT: null,
    DOMISILI: null,
    ICON: null,
    DITAMBAHKAN: null,
    LAYANAN: [],
  };
};

export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      filter: null,
      deletenotif: false,
      editnotif: false,
      GUID: null,
      isPwd: true,
      form: model(),
      port: "http://localhost:5072/",
      options: {
        status,
        layanan,
      },
      columns: [
        {
          name: "PHOTO",
          align: "left",
          label: "Avatar",
          field: "PHOTO",
        },
        {
          name: "INSTANSI",
          align: "left",
          label: "Instansi",
          field: "INSTANSI",
        },
        {
          name: "ADMINISTRATOR",
          align: "left",
          label: "Administrator",
          field: "ADMINISTRATOR",
        },
        {
          name: "TELEPON",
          align: "left",
          label: "Telepon",
          field: "TELEPON",
        },
        {
          name: "DOMISILI",
          align: "left",
          label: "Domisili usaha",
          field: "DOMISILI",
        },
        {
          name: "STATUS",
          align: "left",
          label: "Status",
          field: "STATUS",
        },
        {
          name: "TGL_DAFTAR",
          align: "left",
          label: "Tgl. daftar",
          field: "TGL_DAFTAR",
        },
        {
          name: "ACTION",
          align: "center",
          label: "Action",
          field: "ACTION",
        },
      ],
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 5,
      },
      rows: [],
      visibles: false,
      instansi: [],
    };
  },
  created() {
    this.getData();
  },

  methods: {
    getData: async function () {
      this.$q.loading.show();
      await this.$axios
        .get(`instansi/getAll`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.rows = response.data.data;
            this.instansi = response.data.data;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },

    getList() {
      ListService.getListLayanan()
        .then((res) => {
          this.options.layanan = res.data.data;
        })
        .catch(() => this.$commonErrorNotif());
    },

    delete() {
      this.deletenotif = true;
      this.GUID = DATA.GUID;
      // console.log(this.GUID)
      //
    },
    deletedialogdata() {
      this.$axios
        .delete(`/instansi/${this.GUID}`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.getData();
          }
        })
        .catch(() => this.$commonErrorNotif());
    },

    editData(EDITDATA) {
      this.editnotif = true;
      this.form.INSTANSI = EDITDATA.INSTANSI;
      this.form.ADMINISTRATOR = EDITDATA.ADMINISTRATOR;
      this.form.ALAMAT = EDITDATA.ALAMAT;
      this.form.DOMISILI = EDITDATA.DOMISILI;
      this.GUID = EDITDATA.GUID;
      // this.form.ICON = EDITDATA.ICON;
      // this.form.LAYANAN = EDITDATA.LAYANAN;
      // this.form.TELEPON = EDITDATA.TELEPON;
      // this.form.TELEPON = EDITDATA.TELEPON;
      //   this.form.DITAMBAHKAN = this.dataUser.user.NAMA;
      // this.$q.loading.show();
      //   if (!this.form.ICON) {
      //   return;
    },

    // const formData = new FormData();

    // formData.append("ICON", this.form.ICON);
    // formData.append("ADMINISTRATOR", this.form.ADMINISTRATOR);
    // formData.append("INSTANSI", this.form.INSTANSI);
    // formData.append("PASSWORD", this.form.PASSWORD);
    // formData.append("TELEPON", this.form.TELEPON);
    // formData.append("ALAMAT", this.form.ALAMAT);
    // formData.append("DOMISILI", this.form.DOMISILI);
    // // formData.append("KODE_INSTANSI", this.form.KODE_INSTANSI);
    // // formData.append("STATUS", this.form.STATUS);
    // // formData.append("ROLE", this.form.ROLE);
    // formData.append("DITAMBAHKAN", this.form.DITAMBAHKAN);
    // formData.append("LAYANAN", JSON.stringify(this.form.LAYANAN));

    onEdit() {
      this.onUpdate();
    },
    onUpdate() {
      // console.log(this.form)
      this.$axios
        .put(`/instansi/update/${this.GUID}`, this.form)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            console.log(response.data);
            this.editnotif = false;
            this.getData();
          }
        })
        .catch(() => this.$commonErrorNotif());
    },
  },
};
</script>
