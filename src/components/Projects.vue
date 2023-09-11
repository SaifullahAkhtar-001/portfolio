<template>
  <Section>
    <div class="flex flex-col justify-center gap-10 items-center h-[80vh] max-xl:h-fit">
      <Sectionheader heading="Projects" subheading="Browse My Recent" />
      <div class="flex flex-row max-md:flex-wrap gap-6 items-center justify-center">
        <Projectcard url="/img/project1.b5e3389d.png" projName="Blog App"
          live="https://blog-app-production-af82.up.railway.app/"
          repo="https://github.com/SaifullahAkhtar-001/Blog-App" />
        <Projectcard url="/img/project2.5aa82cb5.png" projName="Elite Watches" live="https://elite-watches.vercel.app/"
          repo="https://github.com/SaifullahAkhtar-001/elite-watches " />
        <Projectcard url="/img/project3.79560941.png" projName="Weather App"
          live="https://saifullahakhtar-001.github.io/WeatherApp/"
          repo="https://github.com/SaifullahAkhtar-001/WeatherApp" />
      </div>
    </div>
  </Section>
</template>

<script>
import Projectcard from './inner/Projectcard.vue';
import Section from './inner/Section.vue';
import Sectionheader from './inner/Sectionheader.vue';

export default {
  name: 'Projects',
  components: {
    Section, Sectionheader, Projectcard
  }
}
</script>

<style></style>