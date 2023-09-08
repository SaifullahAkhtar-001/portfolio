<template>
    <div
        class="flex-1 flex flex-col items-center justify-center gap-2 p-7  border-[1px] border-solid text-center border-opacity-50 border-stone-400 rounded-[2rem]">
        <slot></slot>
        <p class="xl:font-medium text-2xl">{{ title }}</p>
        <p class="text-[1rem] font-light">{{ duration }}</p>
        <p class="text-[1rem] font-light">{{ post }}</p>
    </div>
</template>

<script>
export default {
    name: 'aboutmecards',
    props: [
        'title', 'duration', 'post',
    ]
}
</script>

<style></style>