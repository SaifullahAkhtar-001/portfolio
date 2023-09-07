<template>
    <div id="menu">
        <div id="menu-bar" @click="menuOnClick">
            <div id="bar1" class="bar dark:bg-white bg-stone-900"></div>
            <div id="bar2" class="bar dark:bg-white bg-stone-900"></div>
            <div id="bar3" class="bar dark:bg-white bg-stone-900"></div>
        </div>
        <nav class="nav" id="nav">
            <ul class="bg-[#5c30b1] mr-4 rounded-[2rem] cast-shadow">
                <li><a href="#about" @click="menuOnClick">About</a></li>
                <li><a href="#experience" @click="menuOnClick">Experience</a></li>
                <li><a href="#projects" @click="menuOnClick">Projects</a></li>
                <li><a href="#contact" @click="menuOnClick">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Humburger',
    methods: {
        menuOnClick() {
            document.getElementById("menu-bar").classList.toggle("change");
            document.getElementById("nav").classList.toggle("change");
        }
    }
}
</script>

<style>

#menu {
    z-index: 2;
}

#menu-bar {
    width: 32px;
    height: 35px;
    margin: 58px 20px 20px 20px;
    cursor: pointer;
}
.cast-shadow{
    box-shadow: 0 10px 20px rgba(92, 48, 177, 0.7);
}
.bar {
    height: 3px;
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

#menu {
    top: 0;
    right: 0;
    position: absolute;
}

.change {
    display: block;
}

.change .bar {
    background-color: white;
}

.change #bar1 {
    transform: translateY(2px) rotateZ(-51deg);
}

.change #bar2 {
    opacity: 0;
}

.change #bar3 {
    transform: translateY(-4px) rotateZ(45deg);
}

</style>