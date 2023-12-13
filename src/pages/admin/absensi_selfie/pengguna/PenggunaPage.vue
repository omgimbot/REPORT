<template>
  <q-page class="q-pa-md bg-accent">
    <q-card class="no-shadow q-pa-md q-mb-md">
      <div class="col">
        <q-item-label
          style="font-size: 20px"
          class="text-weight-bold text-dark"
        >
          Daftar Pengguna
        </q-item-label>
        <q-item-label style="font-size: 12px" class="text-caption text-primary"
          >Admin dapat melihat semua Pengguna yang terdaftar
          disini</q-item-label
        >
      </div>
    </q-card>

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
            <q-item-label
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
            <q-td key="ID" :props="props" class="text-uppercase">
              <q-badge color="positive">{{ props.row.KODE_PENGGUNA }}</q-badge>
            </q-td>
            <q-td key="PENGGUNA" :props="props" class="text-capitalize">
              {{ props.row.PENGGUNA }}
            </q-td>
            <q-td key="TELEPON" :props="props" class="text-capitalize">
              {{ props.row.TELEPON }}
            </q-td>
            <q-td key="KELAS" :props="props" class="text-capitalize">
              {{ props.row.KELAS }}
            </q-td>
            <q-td key="JABATAN" :props="props" class="text-capitalize">
              {{ props.row.JABATAN[0].JABATAN }}
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
                color="blue-10"
                @click="this.editData(props.row)"
                size="sm"
                icon="edit"
                ><q-tooltip>edit data pengguna</q-tooltip></q-btn
              >
              <q-btn
                round
                flat
                @click="this.delete(props.row)"
                color="blue-10"
                size="sm"
                icon="delete"
                ><q-tooltip>hapus data pengguna</q-tooltip></q-btn
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
          <q-btn flat label="CANCEL" v-close-popup />
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
      <q-card class="q-pa-md">
        <div class="text-weight-bold">EDIT DATA</div>
        <q-form @submit="onEdit">
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

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn type="submit" flat label="OK" v-close-popup />
            <q-btn flat label="cancel" v-close-popup />
          </q-card-actions> </q-form></q-card
    ></q-dialog>
  </q-page>
</template>

<script>
const status = ["Aktif", "Tidak Aktif"];
const model = () => {
  return {
    PENGGUNA: null,
    ALAMAT: null,
    KELAS: null,
  };
};

export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      deletenotif: false,
      form: model(),
      editnotif: false,
      filter: null,
      GUID: null,
      options: {
        status,
      },
      columns: [
        {
          name: "ID",
          align: "left",
          label: "ID",
          field: "ID",
        },
        {
          name: "PENGGUNA",
          align: "left",
          label: "Nama lengkap",
          field: "PENGGUNA",
        },
        {
          name: "TELEPON",
          align: "left",
          label: "Telepon",
          field: "TELEPON",
        },
        {
          name: "KELAS",
          align: "left",
          label: "Kelas",
          field: "KELAS",
        },
        {
          name: "JABATAN",
          align: "left",
          label: "Jabatan",
          field: "JABATAN",
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
      dataUser: this.$q.localStorage.getItem("data"),
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: async function () {
      this.$q.loading.show();
      await this.$axios
        .get(`pengguna/getByInstansi/${this.dataUser.user.KODE_INSTANSI}`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.rows = response.data.data;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },
    delete(DATA) {
      this.deletenotif = true;
      this.GUID = DATA.GUID;
    },
    deletedialogdata() {
      this.$axios
        .delete(`/pengguna/${this.GUID}`)
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
      this.GUID = EDITDATA.GUID;
    },

    onEdit() {
      this.onUpdate();
    },
    onUpdate() {
      // console.log(this.form)
      this.$axios
        .put(`/pengguna/update/${this.GUID}`, this.form)
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
