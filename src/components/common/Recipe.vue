<script setup lang="ts">
</script>

<template>
  <div class="mx-auto w-full py-6 space-y-8">
    <h2 class="text-3xl font-bold mb-4">
      Pizza ail &amp; anchois
    </h2>

    <!-- Préparation du petit levain -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          Préparation du petit levain <span class="text-sm font-normal">(30 min)</span>
        </h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>
            Dans un <em>cul de poule</em> :
            <ul class="list-disc ml-6">
              <li>50 g farine</li>
              <li>100 g eau (≤ 25 °C)</li>
              <li>3 g levure boulangère déshydratée</li>
            </ul>
          </li>
          <li>Couvrir hermétiquement (film + éventuellement eau extérieure pour adhérence).</li>
          <li>Laisser buller 30 min.</li>
        </ol>
      </div>
    </section>

    <!-- Pâte principale -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          Pâte principale
        </h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>
            Ajouter :
            <ul class="list-disc ml-6">
              <li>450 g farine</li>
              <li>4 càs huile d’olive</li>
              <li>10 g sel</li>
              <li>100–120 g eau</li>
            </ul>
          </li>
          <li>Pétrir (texture lisse, légèrement collante).</li>
          <li>Saupoudrer de farine, couvrir hermétiquement.</li>
          <li>
            Fermentation :
            <ul class="list-disc ml-6">
              <li>Idéal : 1 nuit à 15 °C</li>
              <li>Sinon : 1–2 h à 25 °C</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <!-- Préparation de la tomate -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          Préparation de la tomate
        </h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Tomates fraîches (été) ou entières en conserve (hiver).</li>
          <li>Cuire à l’étouffée avec un fond d’eau, couvert, jusqu’à ce que la peau se détache.</li>
          <li>Refroidir, peler, égoutter en passoire.</li>
          <li>
            Couper en dés, saler, ajouter :
            <ul class="list-disc ml-6">
              <li>1–2 càs huile d’olive</li>
              <li>4–5 gousses d’ail finement coupées</li>
              <li>Parmesan râpé</li>
              <li>Goûter et ajuster le sel</li>
            </ul>
          </li>
          <li>Réserver au frigo.</li>
        </ol>
      </div>
    </section>

    <!-- Garniture -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          Garniture
        </h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Boîte d’anchois à l’huile (garder l’huile pour les tomates).</li>
          <li>Couper anchois et reste d’ail en morceaux.</li>
        </ol>
      </div>
    </section>

    <!-- Assemblage -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          Assemblage
        </h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Verser généreusement de l’huile dans la plaque du four.</li>
          <li>Étaler la pâte à la main, huiler des deux côtés.</li>
          <li>Répartir ail + anchois, les enfoncer dans la pâte.</li>
          <li>Répartir la préparation tomate, râper un peu de parmesan, resaler légèrement.</li>
        </ol>
      </div>
    </section>

    <!-- Cuisson -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          Cuisson
        </h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Four préchauffé à 250 °C, cuire 10 min.</li>
          <li>Ajouter : parmesan puis emmental (modérément).</li>
          <li>Cuire encore 5 min.</li>
          <li>Vérifier que la pâte se décolle des bords.</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
ol {
  font-size: 15px;
}
</style>