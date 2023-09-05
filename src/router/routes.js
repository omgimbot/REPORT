
const routes = [
  {
    path: '/',
    component: () => import('layouts/SuperLayout.vue'),
    meta: { superadmin: true },
    children: [
      { path: 'dashboard',
        name: 'superadmin',
        component: () => import('src/pages/su/IndexPage.vue') },
      { path: 'pengguna',
        name: 'pengguna',
        component: () => import('src/pages/su/PenggunaPage.vue') },
      { path: 'add',
        name: 'add_pengguna',
        component: () => import('src/pages/su/AddPenggunaPage.vue') },
      { path: 'perangkat',
        name: 'perangkat',
        component: () => import('src/pages/su/PerangkatPage.vue') },
      { path: 'add',
        name: 'add_perangkat',
        component: () => import('src/pages/su/AddPerangkatPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { guest: true },
    children: [
      { path: 'guest', name: 'guest', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AccessLayout.vue'),
    children: [
      { path: "", name: "auth", component: () => import('pages/access/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AccessSuLayout.vue'),
    children: [
      { path: "authSu", name: "authSu", component: () => import('pages/access/IndexSuPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
