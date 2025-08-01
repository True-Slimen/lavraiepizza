<script setup lang="ts">

import ThemeControllerLayout from "@/components/layouts/ThemeControllerLayout.vue";
import Logolayout from "@/components/layouts/Logolayout.vue";
</script>

<template>
  <div class="navbar bg-base-200 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          > <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /> </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <RouterLink to="/">
            Accueil
          </RouterLink>
        </ul>
      </div>
    </div>
    <a
      href="/"
      class="navbar-center"
    >
      <span class="btn btn-ghost text-4xl font-thin">La <strong class="font-bold">vraie</strong> pizza</span>
      <Logolayout class="mx-auto medal" />
    </a>
    <div class="navbar-end pe-3">
      <ThemeControllerLayout />
    </div>
  </div>
</template>

<style lang="scss">
.medal{
  margin-top: 10px;
  width: 70px;
  height: 70px;
}
</style>