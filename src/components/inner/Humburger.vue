<template>
    <div id="menuToggle">
        <input type="checkbox" />
        
            <span class="dark:bg-white bg-stone-800"></span>
            <span class="dark:bg-white bg-stone-800"></span>
            <span class="dark:bg-white bg-stone-800"></span>

        <ul id="menu" class="dark:text-white text-black">
            <li class="transition-all hover:opacity-60"><a href="#about" @click="menuOnClick">About</a></li>
            <li class="transition-all hover:opacity-60"><a href="#experience" @click="menuOnClick">Experience</a></li>
            <li class="transition-all hover:opacity-60"><a href="#project" @click="menuOnClick">Projects</a></li>
            <li class="transition-all hover:opacity-60"><a href="#contact" @click="menuOnClick">Contact</a></li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'Humburger',
}
</script>

<style>

</style>