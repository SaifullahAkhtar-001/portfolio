<template>
  <div class="text-xl dark:bg-stone-800 m-0 dark:text-white min-h-screen min-w-full">
      <Navbar id="home"/>
      <Profile id="profile" />
      <Aboutme id="about" />
      <Footer />
      <a href="#home" class="transition-all duration-100 flex justify-center items-center bg-opacity-90 rounded-full fixed bottom-12 right-4 h-10 w-10 cursor-pointer border-2 border-stone-400 hover:border-2  hover:border-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 dark:fill-white fill-black" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
      </a>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Profile from './components/Profile.vue'
import Aboutme from './components/Aboutme.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer,Profile,Aboutme,
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  min-height: fit-content;
}
</style>
