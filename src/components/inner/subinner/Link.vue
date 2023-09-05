<template>
  <div>
    <!-- <a :href="url" class="hover:opacity-70 transition-all duration-200">
      <slot></slot>
    </a> -->
    <a :href="url" class="relative group transition duration-300">
      <slot></slot>
      <span
        class="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: ['url']
}
</script>

<style></style>