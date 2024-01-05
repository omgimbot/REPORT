<template>
  <q-page class="q-pa-md bg-accent">
    <q-card class="no-shadow q-pa-md q-mb-md">
      <div class="col">
        <q-item-label
          style="font-size: 20px"
          class="text-weight-bold text-dark"
        >
          Daftar Layanan
        </q-item-label>
        <q-item-label style="font-size: 12px" class="text-caption text-primary"
          >Superadmin dapat melihat semua layanan yang terdaftar
          disini</q-item-label
        >
      </div>
    </q-card>

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
      <q-table
        flat
        bordered
        :rows="rows"
        :columns="columns"
        :pagination="pagination"
        :filter="filter"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="CHECKBOX" :props="props" class="text-capitalize">
              <q-checkbox v-model="props.selected" />
            </q-td>
            <q-td key="INSTANSI" :props="props" class="text-capitalize">
              {{ props.row.INSTANSI }}
            </q-td>
            <q-td key="ADMINISTRATOR" :props="props" class="text-capitalize">
              {{ props.row.ADMINISTRATOR }}
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
          </q-tr>
        </template>
      </q-table>
    </q-card>
    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </q-page>
</template>

<script>
// const status = ["Aktif", "Tidak Aktif"];

const model = () => {
  return {
    ADMINISTRATOR: null,
    INSTANSI: null,
  };
};

export default {
  data() {
    return {
      filter: null,
      deletenotif: false,
      form: model(),
      selected: [],
      editnotif: false,
      GUID: null,
      columns: [
        {
          name: "checkbox",
          label: "",
          align: "left",
          field: "CHECKBOX",
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
          name: "TGL_DAFTAR",
          align: "left",
          label: "Tgl. daftar",
          field: "TGL_DAFTAR",
        },
      ],
      pagination: {},
      rows: [],
      layanan: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: async function () {
      // ...
      await this.$axios
        .get(`instansi/getAll`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            // Menambahkan properti 'CHECKBOX' pada setiap baris
            this.rows = response.data.data.map((row) => ({
              ...row,
              CHECKBOX: false, // Checkbox tidak dipilih secara default
            }));
            this.layanan = response.data.data;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },

    delete(DATA) {
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
      this.form.LAYANAN = EDITDATA.LAYANAN;
      this.GUID = EDITDATA.GUID;
    },

    onEdit() {
      this.onUpdate();
    },
    onUpdate() {
      // console.log(this.form)
      this.$axios
        .put(`/layanan/update/${this.GUID}`, this.form)
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
