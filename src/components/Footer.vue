<template>
  <div class="max-xl:h-vh-40 relative bg-[#3586ff] h-vh-26 flex flex-col justify-center items-center gap-8 border-t-2">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <div class="flex text-2xl h-vh-17 items-center">
      <NavbarLinks />
    </div>
    <div class="pb-6 text-sm text-gray-300">
      <p>Copyright &#169; 2023 Saifullah Akhtar. All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>
import NavbarLinks from './inner/NavbarLinks.vue'
export default {
  name: 'Footer',
  components: {
    NavbarLinks,
  }
}
</script>

<style>
.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }

  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }

  100% {
    background-positon-x: 0px;
  }
}
</style>