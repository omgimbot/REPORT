const routes = [
  {
    path: "/",
    component: () => import("layouts/SuperLayout.vue"),
    meta: { superadmin: true },
    children: [
      {
        path: "",
        name: "superadmin",
        component: () => import("src/pages/su/IndexPage.vue"),
      },
      {
        path: "instansi",
        name: "instansi",
        component: () => import("src/pages/su/instansi/InstansiPage.vue"),
      },
      {
        path: "add",
        name: "add_instansi",
        component: () => import("src/pages/su/instansi/AddInstansiPage.vue"),
      },
      {
        path: "layanan",
        name: "layanan",
        component: () => import("src/pages/su/layanan/LayananPage.vue"),
      },
      {
        path: "rfid",
        name: "rfid",
        component: () => import("src/pages/su/layanan/KartuRfid.vue"),
      },
      {
        path: "add_saldo",
        name: "saldo",
        component: () => import("src/pages/su/layanan/SaldoRfid.vue"),
      },
      {
        path: "add",
        name: "add_layanan",
        component: () => import("src/pages/su/layanan/AddLayananPage.vue"),
      },
      {
        path: "perangkat",
        name: "perangkat",
        component: () => import("src/pages/su/perangkat/PerangkatPage.vue"),
      },
      {
        path: "add",
        name: "add_perangkat",
        component: () => import("src/pages/su/perangkat/AddPerangkatPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { admin: true },
    children: [
      {
        path: "dashboard",
        name: "admin",
        component: () => import("pages/admin/IndexPage.vue"),
      },
      {
        path: "type",
        name: "type",
        component: () =>
          import(
            "src/pages/admin/absensi_selfie/jenis_laporan/JenisLaporanPage.vue"
          ),
      },
      {
        path: "add",
        name: "add_types",
        component: () =>
          import(
            "src/pages/admin/absensi_selfie/jenis_laporan/AddJenisLaporanPage.vue"
          ),
      },
      {
        path: "jabatan",
        name: "jabatan",
        component: () =>
          import("src/pages/admin/absensi_selfie/jabatan/JabatanPage.vue"),
      },
      {
        path: "add",
        name: "add_jabatan",
        component: () =>
          import("src/pages/admin/absensi_selfie/jabatan/AddJabatanPage.vue"),
      },
      {
        path: "pengguna",
        name: "pengguna",
        component: () =>
          import("src/pages/admin/absensi_selfie/pengguna/PenggunaPage.vue"),
      },
      {
        path: "add",
        name: "add_pengguna",
        component: () =>
          import("src/pages/admin/absensi_selfie/pengguna/AddPenggunaPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { guest: true },
    children: [
      {
        path: "guest",
        name: "guest",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/AccessLayout.vue"),
    children: [
      {
        path: "",
        name: "auth",
        component: () => import("pages/access/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/AccessSuLayout.vue"),
    children: [
      {
        path: "authSu",
        name: "authSu",
        component: () => import("pages/access/IndexSuPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/error",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/testdoang",
    component: () => import("pages/TestRmq.vue"),
  },
];

export default routes;
