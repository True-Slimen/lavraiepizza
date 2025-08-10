<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  path: string
  width: number
}>();
</script>

<template>
  <div
    class="wrapper"
    :style="`max-width: ${props.width}px; height: auto;`"
  >
    <div class="inner-wrapper">
      <img
        :src="props.path"
        alt=""
      >
      <div class="img-border" />
    </div>
    <em class="legend">Julien le 3 août 2025 sur la croisette de Sète.</em>
  </div>
</template>

<style lang="scss">
.legend {
  font-size: 12px;
  position: absolute;
  bottom: -24px;
}

.wrapper {
  position: relative;
}

.wrapper .inner-wrapper {
  overflow: hidden;
  border-radius: 20px;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.img-border {
  height: calc(100% - 2%);
  width: calc(100% - 3%);
  border: 2px solid currentColor;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 15px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.23);
   transition: all 0.1s;
}

.wrapper .inner-wrapper:hover .img-border {
  height: calc(100% - 0%);
  width: calc(100% - 0%);
  border-radius: 20px;
  border: 1px solid currentColor;
  transition: all 0.1s;
}

@media screen and (width < 1024px) {
  .wrapper .inner-wrapper {
    margin: 0 auto!important;
  }
}</style>