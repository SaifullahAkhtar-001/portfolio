<template>
    <div class="h-vh-17 flex justify-around items-center text-2xl">
        <div class="text-3xl">
            Saifullah Akhtar
        </div>
        <navbarLinks class="max-xl:hidden" />
        <div class="hamburger-menu xl:hidden">
            <div class="hamburger-icon" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-links">
                <li><a href="#about" @click="toggleMenu">About</a></li>
                <li><a href="#experience" @click="toggleMenu">Experience</a></li>
                <li><a href="#projects" @click="toggleMenu">Projects</a></li>
                <li><a href="#contact" @click="toggleMenu">Contact</a></li>
            </div>
        </div>
    </div>
</template>

<script>
import navbarLinks from './inner/NavbarLinks.vue'
export default {
    name: 'Navbar',
    components: {
        navbarLinks,
    },
    methods: {
        toggleMenu() {
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            menu.classList.toggle("open");
            icon.classList.toggle("open");
        }
    }
}
</script>

<style>
#hamburger-nav {
    display: none;
}

.hamburger-menu {
    border-radius: 20px;
    position: relative;
    display: inline-block;
}

.hamburger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    cursor: pointer;
}

.hamburger-icon span {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3 ease-in-out;
}

.menu-links {
    position: absolute;
    top: 100%;
    right: 0;
    border: 2px;
    border-color: antiquewhite;
    border-radius: 24px;
    background-color: rgb(36, 35, 35);
    width: fit-content;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3 ease-in-out;
}

.menu-links a {
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    transition: all 0.3 ease-in-out;
}

.menu-links li {
    list-style: none;
}

.menu-links.open {
    max-height: 300px;
}

.hamburger-icon.open span:first-child {
    transform: rotate(45deg) translate(10px, 5px);
}

.hamburger-icon.open span:nth-child(2) {
    opacity: 0;
}

.hamburger-icon.open span:last-child {
    transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon span:first-child {
    transform: none;
}

.hamburger-icon span:first-child {
    opacity: 1;
}

.hamburger-icon span:first-child {
    transform: none;
}
</style>