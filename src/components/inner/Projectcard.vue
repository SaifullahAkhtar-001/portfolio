<template>
    <div
        class="flex flex-col items-center justify-center gap-4 p-6 border-[1px] border-solid border-stone-600 rounded-[2rem] shadow-2xl">
        <div class="w-[90%] max-w-[400px]">
            <img src="../../assets/project-1.png" alt="" class="rounded-[1.5rem]">
        </div>
        <div class="font-semibold">
            Project-1
        </div>
        <div>
            <div class="max-sm:flex-col flex gap-4 text-sm font-bold">
                <button
                    class="transition-colors duration-200 px-6 py-4 border rounded-full dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white">
                    Download CV
                </button>
                <button
                    class="transition-colors duration-200 px-6 py-4 border rounded-full bg-stone-800 text-white dark:bg-white dark:text-stone-800 dark:hover:bg-stone-800 hover:bg-white dark:hover:text-white hover:text-stone-800">
                    Contact Info
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projectcard'
}
</script>

<style></style>