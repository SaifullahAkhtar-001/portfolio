<template>
  <Section>
    <div class="flex flex-col justify-center gap-10 items-center h-[80vh] max-xl:h-fit">
      <Sectionheader heading="Projects" subheading="Browse My Recent" />
      <div class="flex gap-6 flex-wrap items-center justify-center">
        <Projectcard/>
        <Projectcard/>
        <Projectcard/>        
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
    Section, Sectionheader,Projectcard
  }
}
</script>

<style></style>