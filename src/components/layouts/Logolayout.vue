<script setup lang="ts">

</script>

<template>
  <div class="logo-bg">
    <div class="shine" />
    <div class="shine shine2" />

    <svg
      id="Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 124.85 170.34"
    >
      <circle
        class="st0"
        cx="77.34"
        cy="92.9"
        r="12.23"
      />
      <path
        class="st0"
        d="M102.75,105.05l-34.21,58.92c-2.22,3.82-8.73,3.82-10.94,0l-12.48-21.49c6.26-.53,11.18-5.78,11.18-12.18,0-6.75-5.48-12.23-12.23-12.23-4.17,0-7.85,2.09-10.06,5.28l-24.06-41.45s21.35-15.58,53.12-15.58c26.52,0,40.91,8.27,40.91,8.27,0,0,9.37,3.91,13.41-2.97,3.5-5.96-4.28-11.47-4.28-11.47,0,0-12.27-10.55-48.71-10.55S3.5,67.46,3.5,67.46l7-39.72,27.46,10.75S62.43,3.5,62.43,3.5l24.46,35,27.46-10.75,7,20.07"
      />
    </svg>
  </div>
</template>

<style lang="scss">
.logo-bg {
  background: #e0bd5a;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: inset 3px 3px 0px #e6d5a0, inset -3px -3px 0px #82723a;
}

.shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
          120deg,
          rgba(255, 255, 255, 0) 30%,
          rgba(255, 255, 255, 0.4) 50%,
          rgba(255, 255, 255, 0) 70%
  );
  transform: rotate(0deg);
  animation: shine 10s ease-in-out infinite;
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  pointer-events: none;
}

.shine2 {
  animation: shine 10s infinite ease-in-out;
  animation-delay: 0.4s;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(25deg);
    opacity: 0;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 1;
  }

  10% {
    transform: translateX(100%) rotate(25deg);
    opacity: 0;
  }

  100% {
    transform: translateX(100%) rotate(25deg);
    opacity: 0;
  }
}

#Calque_1 {
  display: block;
  width: calc(100% - 15%);
  height: calc(100% - 15%);
  margin: 0 auto;
  align-self: center;
}

.st0 {
  fill: none;
  stroke: #442500;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 7px;
}
</style>