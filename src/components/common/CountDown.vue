<script setup lang="ts">
import { useNow } from "@vueuse/core";
import { ref, computed } from "vue";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const targetDate = ref(dayjs.tz("2025-08-03T13:00:00", "Europe/Paris"));
const now = useNow();

const remainingSeconds = computed(() => {
  const diff = targetDate.value.diff(now.value, "second");
  return Math.max(diff, 0);
});

const formatted = computed(() => {
  const total = remainingSeconds.value;

  const days = Math.floor(total / (3600 * 24));
  const hours = Math.floor((total % (3600 * 24)) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const parts = [];
  if (days > 0) parts.push(`${days}j`);
  if (days > 0 || hours > 0) parts.push(`${hours}h`);
  if (days > 0 || hours > 0 || minutes > 0) parts.push(`${minutes}mn`);
  parts.push(`${seconds.toString().padStart(2, "0")}s`);

  return parts.join(" ");
});

// Callback à la fin
const hasEnded = computed(() => remainingSeconds.value === 0);
</script>

<template>
  <div class="text-center mx-auto">
    <h2 class="text-2xl mb-2">
      Décompte avant la révélation :
    </h2>
    <p class="text-5xl font-mono">
      {{ formatted }}
    </p>
    <p class="text-5xl countdown-reflect font-mono">
      {{ formatted }}
    </p>
    <div
      v-if="hasEnded"
      class="mt-4 text-green-600 font-bold text-lg"
    >
      🎉 Recette révélée !
    </div>
  </div>
</template>

<style scoped>
.countdown-reflect {
  margin-top: 9px;
  transform: scale(1, -1);
  opacity: 0.7;
  pointer-events: none;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;               /* IE 6/7/8 */
}
</style>