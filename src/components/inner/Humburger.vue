<template>
    <div id="menu" class="xl:hidden">
        <div id="menu-bar" @click="menuOnClick">
            <div id="bar1" class="bar dark:bg-white bg-stone-900"></div>
            <div id="bar2" class="bar dark:bg-white bg-stone-900"></div>
            <div id="bar3" class="bar dark:bg-white bg-stone-900"></div>
        </div>
        <nav class="nav" id="nav">
            <ul>
                <li><a href="#about" @click="menuOnClick">About</a></li>
            <li><a href="#experience" @click="menuOnClick">Experience</a></li>
            <li><a href="#projects" @click="menuOnClick">Projects</a></li>
            <li><a href="#contact" @click="menuOnClick">Contact</a></li>
            </ul>
        </nav>
    </div>

    <div class="menu-bg" id="menu-bg"></div>
</template>

<script>
export default {
    name: 'Humburger',
    methods: {
        menuOnClick() {
            document.getElementById("menu-bar").classList.toggle("change");
            document.getElementById("nav").classList.toggle("change");
            document.getElementById("menu-bg").classList.toggle("change-bg");
        }
    }
}
</script>

<style>
#menu {
    z-index: 2;
}

#menu-bar {
    width: 45px;
    height: 40px;
    margin: 75px 20px 20px 20px;
    cursor: pointer;
}

.bar {
    height: 5px;
    width: 100%;
    /* background-color: #3586ff; */
    display: block;
    border-radius: 5px;
    transition: 0.3s ease;
}

#bar1 {
    transform: translateY(-4px);
}

#bar3 {
    transform: translateY(4px);
}

.nav {
    transition: 0.3s ease;
    display: none;
}

.nav ul {
    padding: 0 22px;
}

.nav li {
    list-style: none;
    padding: 12px 0;
}

.nav li a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.nav li a:hover {
    font-weight: bold;
}

.menu-bg,
#menu {
    top: 0;
    right: 0;
    position: absolute;
}

.menu-bg {
    position: fixed;
    z-index: 1;
    width: 0;
    height: 0;
    margin: 30px 0 20px 20px;
    background: radial-gradient(circle, #3586ff, #3586ff);
    border-radius: 50%;
    transition: 0.3s ease;
}

.change {
    display: block;
}

.change .bar {
    background-color: white;
}

.change #bar1 {
    transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
    opacity: 0;
}

.change #bar3 {
    transform: translateY(-6px) rotateZ(45deg);
}

.change-bg {
    width: 520px;
    height: 460px;
    transform: translate(50%, -18%);
}
</style>