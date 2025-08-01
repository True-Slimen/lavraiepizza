<script setup lang="ts">
import Image from "@/components/common/Image.vue";
import data from "@/assets/images/pizzaiolomystere.jpg";
import Recipe from "@/components/common/Recipe.vue";
import CountDown from "@/components/common/CountDown.vue";
</script>

<template>
  <div
    v-if="false"
    class="flex flex-row flex-wrap lg:flex-nowrap gap-7"
  >
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
  <div
    v-else
    class="count-down-page-wrapper"
  >
    <h1 class="text-8xl text-center flex justify-center">
      La&nbsp;<span>
        <svg
          id="vraie"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 266.77 67.32"
        >

          <path
            class="st0"
            d="M17.46,1l15.36,46.37L48.01,1h15.92l-24.75,65.32h-12.7L1.45,1h16.01Z"
          />
          <path
            class="st0"
            d="M69.99,66.32V1h29.44c3.07,0,5.9.64,8.51,1.93,2.61,1.29,4.86,2.98,6.76,5.06,1.9,2.09,3.39,4.45,4.46,7.08,1.07,2.64,1.61,5.31,1.61,8,0,2.02-.25,3.97-.74,5.84-.49,1.87-1.2,3.63-2.12,5.29-.92,1.66-2.04,3.14-3.36,4.46-1.32,1.32-2.81,2.44-4.46,3.36l14.35,24.29h-17.02l-12.51-21.07h-9.84v21.07h-15.09ZM85.08,32.1h13.8c1.78,0,3.31-.84,4.6-2.53,1.29-1.69,1.93-3.85,1.93-6.49s-.74-4.84-2.21-6.44c-1.47-1.59-3.07-2.39-4.78-2.39h-13.34v17.85Z"
          />
          <path
            class="st0"
            d="M148.38,1h13.62l23.83,65.32h-15.46l-5.06-14.63h-20.33l-4.97,14.63h-15.46L148.38,1ZM162.82,41.3l-7.64-23.09-7.82,23.09h15.46Z"
          />
          <path
            class="st0"
            d="M192.26,66.32V1h15.09v65.32h-15.09Z"
          />
          <path
            class="st0"
            d="M265.77,53.07v13.25h-45.91V1h45.08v13.25h-29.99v12.7h25.76v12.24h-25.76v13.89h30.82Z"
          />
        </svg></span> &nbsp;pizza
    </h1>
    <hr>
    <p class="mt-3 italic text-center">
      Le concours pour mettre tout le monde d'accord.
    </p>
    <div class="flex countdown-wrapper">
      <CountDown class="mt-7" />
    </div>
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
.count-down-page-wrapper {
  min-height: 500px;
  h1 {
    font-weight: 100;
    text-transform: uppercase;
    span {
      fill: none;
      stroke:#CCFF00;
      stroke-dasharray:1100%;
    }
  }
  .countdown-wrapper {
    min-height: 500px;
    align-items: center;
  }
}

.author-img {
  max-width: 470px;
  border-radius: 20px;
  margin: 0 auto;
}

@media screen and (width < 769px) {
  h1 {
    font-size: 58px;
  }
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
    font-size: 46px;
  }
  #vraie {
    height: 32px!important;
    position: relative;
    bottom: -8px;
  }
}
</style>