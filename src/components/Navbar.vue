<template>
    <div class="h-vh-17 flex justify-around items-center text-2xl">
        <div class="text-3xl">
            Saifullah Akhtar
        </div>
        <navbarLinks />
    </div>
    
</template>

<script>
import navbarLinks from './inner/NavbarLinks.vue'
export default {
    name: 'Navbar',
    components:{
        navbarLinks,
    }
}
</script>

<style></style>