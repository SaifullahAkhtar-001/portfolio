<template>
  <div class="text-xl dark:bg-stone-800 m-0 dark:text-white min-h-screen min-w-full">
      <Navbar />
      <Profile id="profile" />
      <Aboutme id="aboutme" />
      <Footer />
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
