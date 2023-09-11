<template>
  <div class="text-xl dark:bg-[#121212] m-0 dark:text-white min-h-screen min-w-full">
    <div class="dark:bg-[url('../assets/banner-bg.png')] dark:bg-no-repeat dark:bg-cover">
      <Navbar id="home" />
      <Profile id="profile" />
    </div>
    <div class="dark:bg-[url('../assets/color-sharp.png')] dark:bg-no-repeat dark:bg-cover">
        <Aboutme id="about" />
    </div>
    <div class="dark:bg-[url('../assets/color-sharp2.png')] dark:bg-no-repeat dark:bg-cover">
      <Experience id="experience"/>
    </div>
    <div class="dark:bg-[url('../assets/color-sharp.png')] dark:bg-no-repeat dark:bg-cover">
      <Projects id="project"/>
    </div>
    <div class="dark:bg-[url('../assets/color-sharp.png')] dark:bg-no-repeat dark:bg-cover rotate-180">
      <Contact id="contact" class="rotate-180"/>
    </div>
    <Footer />
    <homebtn />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Profile from './components/Profile.vue'
import Aboutme from './components/Aboutme.vue'
import homebtn from './components/homebtn.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'App',
  components: {
    Navbar, Footer, Profile, Aboutme, homebtn, Experience,Projects,Contact 
  },
}
</script>

<style>
html {
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
