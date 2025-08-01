<script setup lang="ts">
import NavLayout from "@/components/layouts/NavLayout.vue";
</script>

<template>
  <NavLayout />
  <main class="container mx-auto pt-10">
    <RouterView />
  </main>
</template>

<style scoped>
/* Ajouts éventuels personnalisés */
</style>
