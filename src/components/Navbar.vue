<template>
    <div class="h-vh-17 flex justify-around items-center text-2xl">
        <div class="text-3xl">
            Saifullah Akhtar
        </div>
        <NavbarLinks class="max-xl:hidden" />
        <div class="relative">
            <Humburger/>
        </div>
    </div>
</template>

<script>
import NavbarLinks from './inner/NavbarLinks.vue'
import Humburger from './inner/Humburger.vue'
export default {
    name: 'Navbar',
    components: {
        NavbarLinks,Humburger
    }
}
</script>

<style>
</style>