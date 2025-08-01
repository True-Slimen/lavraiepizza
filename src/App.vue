<script setup lang="ts">
import NavLayout from "@/components/layouts/NavLayout.vue";
import { onMounted } from "vue";
import {applyTheme} from "@/composables/themeComposable.ts";
import Footer from "@/components/layouts/Footer.vue";

onMounted(() => {
  applyTheme();
});
</script>

<template>
  <NavLayout />
  <main class="container mx-auto px-4 md:px-0">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  main {
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>
