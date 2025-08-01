<script setup lang="ts">

</script>

<template>
  <section class="flex flex-column">
    <div class="card bg-base-200 basis-full md:basis-1/4 justify-center mx-auto form py-4">
      <fieldset class="fieldset w-fit mx-auto">
        <legend class="fieldset-legend">
          Pseudo
        </legend>
        <input
          type="text"
          class="input"
          placeholder="Johnny"
        >
      </fieldset>
      <fieldset class="fieldset w-fit mx-auto">
        <legend class="fieldset-legend">
          Mot de passe
        </legend>
        <input
          type="password"
          class="input"
          placeholder="*******"
        >
      </fieldset>
      <button class="btn btn-primary w-fit mx-auto mt-4">
        Connexion
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>