<template>
  <div class=" h-vh-26 flex flex-col items-center">
    <div class="flex text-2xl h-vh-17 items-center">
     <navbarLinks />
    </div>
    <div class="text-sm text-gray-300">
      <p>Copyright &#169; 2023 Saifullah Akhtar. All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>
import navbarLinks from './inner/NavbarLinks.vue'
export default {
    name: 'Footer',
    components:{
        navbarLinks,
    }
}
</script>

<style></style>