<template>
  <div class="flex gap-10">
            <Link url ="#about" class="relative">About</Link>
            <Link url ="#experience">Experience</Link>
            <Link url ="#project">Projects</Link>
            <Link url ="#contact">Contact</Link>
        </div>
</template>

<script>
import Link from './subinner/Link.vue'

export default {
    name: 'NavbarLinks',
    components:{
        Link,
    }
}
</script>

<style>

</style>