<template>
    <div class="h-[16vh]">
        <div class="text-center font-extralight text-base opacity-75 mb-3">{{subheading}}</div>
        <div class="font-medium text-5xl text-center">{{heading}}</div>
    </div>
</template>

<script>
export default {
    name: 'Sectionheader',
    props:['subheading','heading']
}
</script>

<style></style>