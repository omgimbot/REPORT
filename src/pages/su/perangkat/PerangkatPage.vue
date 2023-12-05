<template>
  <q-page class="q-pa-md bg-accent">
    <q-card class="no-shadow q-pa-md q-mb-md">
      <div class="col">
        <q-item-label
          style="font-size: 20px"
          class="text-weight-bold text-dark"
        >
          Daftar Perangkat
        </q-item-label>
        <q-item-label style="font-size: 12px" class="text-primary text-caption"
          >Superadmin dapat melihat semua perangkat yang sudah terdaftar
          disini</q-item-label
        >
      </div></q-card
    >
    <q-card class="my-card q-pa-md" flat>
      <div class="row q-gutter-sm">
        <div class="col">
          <q-item-label
            style="font-size: 14px"
            class="text-weight-medium text-primary q-mb-md"
            >Apa yang ingin anda cari ?</q-item-label
          >
          <div class="row q-gutter-sm">
            <q-input
              standout="bg-primary"
              v-model="search"
              placeholder="Cari berdasarkan..."
              class="col q-mt-sm"
              flat
              dense
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
            <q-btn color="brown-8" class="q-mt-sm">Cari data</q-btn>
          </div>
        </div>
      </div>
    </q-card>

    <div v-if="$q.platform.is.mobile">
      <q-card
        v-ripple
        class="my-card q-mt-sm"
        flat
        bordered
        v-for="(d, i) in this.layanan"
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
              >{{ d.LAYANAN }}
              <q-badge class="text-uppercase">{{ d.KODE_LAYANAN }}</q-badge>
              <q-badge
                :color="d.STATUS == 0 ? 'blue-10' : 'positive'"
                :label="d.STATUS == 0 ? 'TIDAK AKTIF' : 'AKTIF'"
              ></q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal class="q-pa-sm bg-grey-3">
          <q-item-label caption class="flex">
            <q-icon name="event" class="q-mr-sm"></q-icon>
            {{ $parseDate(d.CREATED_AT).fullDate }}
          </q-item-label>
        </q-card-section>
      </q-card>
    </div>

    <q-card class="my-card q-pa-md" flat v-else>
      <q-table :rows="rows" :columns="columns" :pagination="pagination">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="KODE_PERANGKAT" :props="props" class="text-uppercase">
              <q-badge color="positive">{{ props.row.KODE_PERANGKAT }}</q-badge>
            </q-td>
            <q-td key="NAMA" :props="props" class="text-capitalize">
              {{ props.row.NAMA }}
            </q-td>
            <q-td key="JENIS" :props="props" class="text-capitalize">
              {{ props.row.JENIS }}
            </q-td>
            <q-td key="MAC_ADDRESS" :props="props" class="text-capitalize">
              {{ props.row.MAC_ADDRESS }}
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
                ><q-tooltip>edit data layanan</q-tooltip></q-btn
              >
              <q-btn
                round
                flat
                @click="this.delete(props.row)"
                color="blue-10"
                size="sm"
                icon="delete"
                ><q-tooltip>hapus data layanan</q-tooltip></q-btn
              >
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>

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
              v-model="form.NAMA"
              class="text-white col-4 q-pa-sm text-capitalize"
              label="Nama perangkat"
              dense
              lazy-rules
              :rules="defaultRules"
            >
              <template v-slot:prepend>
                <q-icon name="devices" class="q-pr-md" /> </template
            ></q-input>

            <q-input
              standout="bg-positive text-white"
              v-model="form.MAC_ADDRESS"
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
              v-model="form.JENIS"
              class="text-white col-4 q-pa-sm text-capitalize"
              label="Jenis Perangkat"
              dense
              lazy-rules
              :rules="defaultRules"
            >
              <template v-slot:prepend>
                <q-icon name="123" class="q-pr-md" /> </template
            ></q-input>
          </div>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
const status = ["Aktif", "Tidak Aktif"];
const model = () => {
  return {
    KODE_PERANGKAT: null,
    NAMA: null,
    MAC_ADDRESS: null,
    JENIS: null,
    DITAMBAHKAN: null,
  };
};

export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      deletenotif: false,
      editnotif: false,
      options: {
        status,
      },
      columns: [
        {
          name: "KODE_PERANGKAT",
          align: "left",
          label: "Kode Perangkat",
          field: "KODE_PERANGKAT",
        },
        {
          name: "NAMA",
          align: "left",
          label: "Nama Perangkat",
          field: "NAMA",
        },
        {
          name: "JENIS",
          align: "left",
          label: "Jenis Perangkat",
          field: "JENIS",
        },
        {
          name: "MAC_ADDRESS",
          align: "left",
          label: "Mac Address",
          field: "MAC_ADDRESS",
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
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: async function () {
      this.$q.loading.show();
      await this.$axios
        .get(`perangkat/getAll`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.rows = response.data.data;
            this.perangkat = response.data.data;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },

    editData(EDITDATA) {
      this.editnotif = true;
      this.NAMA = EDITDATA.NAMA;
      this.KODE_PERANGKAT = EDITDATA.KODE_PERANGKAT;
      this.JENIS = EDITDATA.JENIS;
      this.MAC_ADDRESS = EDITDATA.MAC_ADDRESS;
    },

    onEdit() {
      this.onUpdate();
    },
    onUpdate() {
      // console.log(this.form)
      this.$axios
        .put(`/perangkat/update/${this.GUID}`, this.form)
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
