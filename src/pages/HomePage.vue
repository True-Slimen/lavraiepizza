<script setup lang="ts">
import Image from "@/components/common/Image.vue";
import data from "@/assets/images/pizzaiolomystere.jpg";
import Recipe from "@/components/common/Recipe.vue";
</script>

<template>
  <div class="flex flex-row flex-wrap lg:flex-nowrap gap-7">
    <section class="basis-full lg:basis-1/4 card bg-base-200 p-6">
      <h2 class="subtitle font-thin">
        Une seule recette
      </h2>
      <h1 class="text-2xl font-bold">
        L'ultime vraie Pizza
      </h1>
      <hr class="border-base mt-2 mb-6">
      <Recipe
        title="Pizza Margherita"
        :ingredients="[
          'Pâte à pizza maison',
          'Sauce tomate',
          'Mozzarella di bufala',
          'Feuilles de basilic',
          'Huile d\'olive extra vierge',
          'Sel et poivre'
        ]"
      />
    </section>
    <section class="basis-full lg:basis-3/4 card bg-base-200 p-6">
      <div class="">
        <h2 class="subtitle font-thin">
          Un seul auteur
        </h2>
        <h1 class="text-2xl font-bold">
          L'unique vrai Pizzaïolo
        </h1>
        <hr class="border-base mt-2 mb-6">
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="basis-full lg:basis-4/8">
          <h1 class="text-2xl font-bold mb-4">
            John Johnny
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi at beatae consectetur consequuntur cum cupiditate, dicta, distinctio dolor eaque est, eum ex facere fuga fugiat hic id illo impedit in inventore itaque libero magnam molestias nam obcaecati perspiciatis quae quis sed similique sint sit tempora ut.</p>
        </div>
        <div class="basis-full mt-8 lg:mt-0 lg:basis-4/8">
          <Image
            class="ml-auto"
            :path="data"
            :width="400"
          />
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

<style lang="scss">
.author-img {
  max-width: 470px;
  border-radius: 20px;
  margin: 0 auto;

}
</style>