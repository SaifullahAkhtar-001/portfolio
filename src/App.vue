<template>
  <div class="text-xl dark:bg-stone-800 m-0 dark:text-white min-h-screen min-w-full">
      <Headwrapper>
        <Navbar id="home"/>
        <Profile id="profile" />
      </Headwrapper>
      <Aboutme id="about" />
      <Experience />
      <Footer />
      <homebtn/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Headwrapper from './components/inner/Headwrapper.vue'
import Profile from './components/Profile.vue'
import Aboutme from './components/Aboutme.vue'
import homebtn from './components/homebtn.vue'
import Experience from './components/Experience.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer,Profile,Aboutme,homebtn,Experience,Headwrapper
  },
}
</script>

<style>
html{
  scroll-behavior: smooth;
}

#app {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  min-height: fit-content;
}
</style>
