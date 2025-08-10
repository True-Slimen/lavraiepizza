<script setup lang="ts">
import Image from "@/components/common/Image.vue";
import data from "@/assets/images/jul.jpg";
import Recipe from "@/components/common/Recipe.vue";
</script>

<template>
  <div
    class="flex flex-row flex-wrap lg:flex-nowrap gap-7 relative"
  >
    <section class="basis-full lg:basis-2/3 card bg-base-200 p-6">
      <h2 class="subtitle font-thin">
        Une seule recette
      </h2>
      <h1 class="font-bold">
        L'ultime vraie Pizza
      </h1>
      <hr class="border-base mt-2 mb-6">
      <Recipe />
    </section>
    <section class="basis-full lg:basis-1/3 card bg-base-200 p-6 h-fit">
      <div class="">
        <h2 class="subtitle font-thin">
          Un seul auteur
        </h2>
        <h1 class="font-bold">
          L'unique vrai Pizzaïolo
        </h1>
        <hr class="border-base mt-2 mb-6">
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="basis-full lg:basis-4/8">
          <h2 class="text-2xl font-bold mb-4">
            Julien Bennica
          </h2>
        </div>
        <div class="basis-full">
          <Image
            class="mx-auto"
            :path="data"
            :width="400"
          />
          <p class="mt-8">
            Ardent gourmet dès son plus jeune âge, Julien grandit dans le sud de la France, nourri à la bonne pizza à Mémé. Il présente très tôt un grand potentiel dans l'art culinaire. C'est à <strong>seulement 9 mois</strong> qu'il réalise sa première pâte à pizza. <em>"È un miracolo !" </em> s'exclame alors la famille.
          </p>
          <p class="mt-5">
            Par la suite il n'aura de cesse de parfaire la recette de la <em>"ultima pizza"</em>, arpentant l'Italie de long en large afin de connaître <strong>chacune de ses saveurs</strong>, du 12 au 24 juin 2011.
          </p>
          <p class="mt-2">
            Après 6 ans de retraite spirituelle au sommet du Stromboli, lui brûlant ses extrémités, <strong>il concocte la pizza parfaite</strong>.
            <br>Au travers de ce site Julien souhaite offrir au Monde l'incroyable recette. Je cite:
          </p>
          <p class="mt-2">
            <em class="mt-2">"Je ne peux garder pour moi une vérité qui unira les peuples et élevera l'Homme."</em>
          </p>
          <p class="mt-2">
            Prêt à être marié, cédé en l'état.
          </p>
        </div>
      </div>
      <!--      <div class="basis-3/8">-->
      <!--        <Image-->
      <!--            :path="data"-->
      <!--            :width="400"-->
      <!--        />-->
      <!--      </div>-->
    </section>
  </div>
</template>

<style lang="scss" scoped>
#vraie {
  height: 68px!important;
  position: relative;
  bottom: -14px;
}
.st0 {
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
}

h1 {
  font-size: 28px;
}

.author-img {
  max-width: 470px;
  border-radius: 20px;
  margin: 0 auto;
}

@media screen and (width < 769px) {
  #vraie {
    height: 42px!important;
    position: relative;
    bottom: -8px;
  }

  .countdown-wrapper {
    min-height: unset!important;
    height: 300px;
    align-items: center;
  }
}

@media screen and (width < 539px) {
  h1 {
    font-size: 26px;
  }
  #vraie {
    height: 32px!important;
    position: relative;
    bottom: -8px;
  }
}
</style>