<template>
  <q-page class="q-pa-md">
    <div class="col q-px-md">
      <q-item-label style="font-size: 20px" class="text-weight-bold text-dark">
        Jenis Laporan
      </q-item-label>
    </div>

    <q-card class="my-card q-pa-md" flat>
      <div class="row q-gutter-sm">
        <div class="col">
          <q-card class="my-card" flat>
            <div class="col">
              <q-item-label
                style="font-size: 14px"
                class="text-weight-medium text-indigo-10"
                >Apa yang ingin anda cari ?</q-item-label
              >
              <div class="row q-col-gutter-sm">
                <q-input
                  standout="bg-positive"
                  v-model="PASSWORD"
                  placeholder="Cari berdasarkan..."
                  class="q-mt-sm col"
                  flat
                  dense
                >
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <div align="right">
                  <q-btn color="blue-10" class="q-mt-sm">Search</q-btn>
                </div>
              </div>
            </div>
            <div>
              <q-btn color="blue-10" class="q-mt-md" size="sm" :to="{ name: 'add_type' }">Tambah Jenis Laporan</q-btn>
            </div>
          </q-card>
        </div>
      </div>
    </q-card>

    <div v-if="$q.platform.is.mobile">
      <q-card v-ripple class="my-card q-mt-sm" flat bordered v-for="(d, i) in this.instansi" :key="i">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ d.INSTANSI }} <q-badge class="text-uppercase">{{ d.KODE_INSTANSI }}</q-badge> <q-badge :color="d.STATUS == 0 ? 'blue-10' : 'positive'" :label="d.STATUS == 0 ? 'TIDAK AKTIF' : 'AKTIF'"></q-badge>
            </q-item-label>
            <q-item-label caption> {{ d.TELEPON }} </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal class="q-pa-md">
          <q-item-label caption> {{ d.DOMISILI }} </q-item-label>
        </q-card-section>

        <q-card-section horizontal class="q-pa-sm bg-grey-3">
          <q-item-label caption class="flex"> <q-icon name="event" class="q-mr-sm"></q-icon> {{ $parseDate(d.CREATED_AT).fullDate }} </q-item-label>
        </q-card-section>

      </q-card>
    </div>

    <q-card class="my-card q-pa-md" flat v-else>
      <q-table :rows="rows" :columns="columns" :pagination="pagination">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="ID" :props="props" class="text-uppercase">
              <q-badge color="positive">{{ props.row.KODE_JENIS_LAPORAN }}</q-badge>
            </q-td>
            <q-td key="JENIS_LAPORAN" :props="props" class="text-capitalize">
              {{ props.row.JENIS_LAPORAN }}
            </q-td>
            <q-td key="FROM" :props="props" class="text-capitalize">
              {{ props.row.FROM }}
            </q-td>
            <q-td key="TO" :props="props" class="text-capitalize">
              {{ props.row.TO }}
            </q-td>
            <q-td key="TGL_DAFTAR" :props="props" class="text-capitalize">
              {{ $parseDate(props.row.CREATED_AT).fullDate }}
              <div><q-badge class="text-lowercase" color="brown-12" style="font-size: 10px">di post oleh : {{ props.row.DITAMBAHKAN }}</q-badge></div>
            </q-td>
            <q-td key="ACTION" :props="props" class="text-capitalize">
              <q-btn
                round
                flat
                color="blue-10"
                @click="this.editData(props.row)"
                size="sm"
                icon="edit"
                ><q-tooltip>edit data warung</q-tooltip></q-btn
              >
              <q-btn
                round
                flat
                @click="this.delete(props.row)"
                color="blue-10"
                size="sm"
                icon="delete"
                ><q-tooltip>hapus data warung</q-tooltip></q-btn
              >
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
const status = ["Aktif", "Tidak Aktif"];

export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      options: {
        status
      },
      columns: [
        {
          name: "ID",
          align: "left",
          label: "ID",
          field: "ID"
        },
        {
          name: "JENIS_LAPORAN",
          align: "left",
          label: "Jenis laporan",
          field: "JENIS_LAPORAN"
        },
        {
          name: "FROM",
          align: "left",
          label: "Dari",
          field: "FROM"
        },
        {
          name: "TO",
          align: "left",
          label: "Sampai",
          field: "TO"
        },
        {
          name: "TGL_DAFTAR",
          align: "left",
          label: "Tgl. daftar",
          field: "TGL_DAFTAR"
        },
        {
          name: "ACTION",
          align: "center",
          label: "#",
          field: "ACTION"
        }
      ],
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 5
      },
      rows: [],
      visibles: false,
      instansi: [],
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
        .get(`jenis_laporan/getByInstansi/${this.dataUser.user.KODE_INSTANSI}`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.rows = response.data.data;
            this.instansi = response.data.data;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },
  }
};
</script>
