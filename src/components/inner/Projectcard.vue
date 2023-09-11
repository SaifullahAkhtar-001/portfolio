<template>
    <div
        class="flex flex-col items-center justify-center gap-4 p-6 border-[1px] border-solid border-stone-600 rounded-[2rem] shadow-2xl">
        <div class="w-[90%]">
            <img src="/img/project1.b5e3389d.png" alt="hello " class="rounded-[1.5rem]">
        </div>
        <div class="font-medium">
            {{ projName }}
        </div>
        <div>
            
            <div class="max-sm:flex-col flex gap-4 text-sm font-bold">
                <router @click="navigateToLive"
                    class="transition-colors duration-200 px-6 py-4 border rounded-full dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white"
                    target="_blank">
                    Live
                </router>
                <button @click="navigateToRepo"
                    class="transition-colors duration-200 px-6 py-4 border rounded-full bg-stone-800 text-white dark:bg-white dark:text-stone-800 dark:hover:bg-stone-800 hover:bg-white dark:hover:text-white hover:text-stone-800"
                    target="_blank">
                    Repo
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { IMAGE1, IMAGE2, IMAGE3 } from '@/config/urls';
export default {

    name: 'Projectcard',
    data() {
        return{
            img1: IMAGE2,
        }
    },
    props: [
        'url', 'projName', 'live', 'repo'
    ],
    methods: {
        navigateToLive() {
            window.location.href = this.live;
        },
        navigateToRepo() {
            window.location.href = this.repo;
        },
    },
}
</script>

<style></style>