<script setup lang="ts">
defineProps<{
  title: string
  ingredients: string[]
}>();
</script>

<template>
  <div class="w-fit">
    <h2 class="card-title text-2xl mb-4">
      {{ title }}
    </h2>

    <ul class="list-disc pl-6 space-y-1">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="index"
        class="text-base-content"
      >
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
</style>