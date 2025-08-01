<script setup lang="ts">
// Pas de logique JS pour cette page statique pour l'instant
import pizzaImage from '@/assets/pizza.png'
</script>

<template>
  <div class="min-h-screen bg-zinc-900 text-white font-sans">
    <!-- Header -->
    <header
        class="fixed top-0 w-full bg-zinc-800 bg-opacity-90 backdrop-blur-sm shadow-md z-50 py-5 px-8 flex items-center justify-center"
    >
      <h1 class="text-3xl font-extrabold tracking-tight select-none">
        La vraie pizza !
      </h1>
    </header>

    <main class="pt-[88px] px-6 md:px-12 max-w-6xl mx-auto space-y-32">
      <!-- Section Vraie Pizza -->
      <section
          class="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16"
      >
        <img
            :src="pizzaImage"
            alt="La vraie pizza"
            class="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-8 border-red-600 shadow-2xl flex-shrink-0"
            loading="lazy"
        />
        <div class="max-w-xl md:max-w-lg text-center md:text-left">
          <h2 class="text-4xl font-semibold mb-6 leading-tight">
            Qu'est-ce qu'une vraie pizza ?
          </h2>
          <p class="text-lg leading-relaxed text-zinc-300">
            La vraie pizza, c'est une pâte faite avec amour, des ingrédients frais
            et un concours familial dans une serre. Ce n'est pas une simple recette,
            c'est une déclaration d'héritage culinaire, un manifeste au parmesan.
          </p>
        </div>
      </section>

      <!-- Recette -->
      <section
          class="text-center max-w-3xl mx-auto px-4 md:px-0"
          aria-labelledby="recette-title"
      >
        <h2
            id="recette-title"
            class="text-3xl font-semibold mb-5 tracking-wide text-red-500"
        >
          La recette du gagnant
        </h2>
        <p class="text-lg leading-relaxed text-zinc-300 max-w-xl mx-auto">
          Une pâte fine et croustillante, de la sauce tomate maison, une pluie de
          mozzarella, des feuilles de basilic volées au jardin et un tour de main
          transmis de génération en génération.
        </p>
      </section>
    </main>

    <!-- Footer -->
    <footer
        class="text-center text-sm py-6 mt-32 text-zinc-500 border-t border-zinc-700 select-none"
    >
      © 2025 La vraie pizza. Famille unie par la pâte.
    </footer>
  </div>
</template>

<style scoped>
/* Ajouts éventuels personnalisés */
</style>
