<template>
  <q-page class="flex flex-center">
    <q-btn class="darkmodecuy" label="klik" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  methods: {
    darkmodecuy() {
      this.$q.dark.toggle();

      const isDarkMode = this.$q.dark.isActive;
      localStorage.setItem("darkMode", isDarkMode);
    },
  },
  created() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
      this.$q.dark.set(true);
    }
  },
});
</script>
