<template>
  <q-layout view="lHh Lpr lFf"
    style="
      background: linear-gradient(
          200deg,
          rgba(178, 222, 39, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url('images/banner/bg_access.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    ">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
    }
  }
}
</script>
