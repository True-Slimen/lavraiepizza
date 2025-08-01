<script setup lang="ts">

</script>

<template>
  <footer class="footer p-6 bg-base-200 text-base-content flex flex-col md:flex-row items-center justify-between">
    <div>
      <p class="text-sm">
        © {{ new Date().getFullYear() }} La Vraie Pizza. Tous droits réservés.
      </p>
    </div>
    <div class="flex gap-4 mt-4 md:mt-0">
      <a
        class="link link-hover text-sm"
        href="https://prochainement.slimen-metatidj.com/"
      >Le dev</a>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
