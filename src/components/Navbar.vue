<template>
    <div class="h-vh-17 flex max-xl:ml-8 justify-center items-center text-2xl">
        <Humburger class="xl:hidden"/>
        <div class="text-3xl">
            Saifullah Akhtar
        </div>
        <NavbarLinks class="max-xl:hidden relative" />
    </div>
</template>

<script>
import NavbarLinks from './inner/NavbarLinks.vue'
import Humburger from './inner/Humburger.vue'
export default {
    name: 'Navbar',
    components: {
        NavbarLinks, Humburger
    }
}
</script>

<style></style>