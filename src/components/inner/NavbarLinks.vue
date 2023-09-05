<template>
  <div class="xl:flex gap-10">
            <Link url ="#about">About</Link>
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