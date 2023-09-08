<template>
    <Section>
        <div class="h-[16vh]">
            <div class="text-center font-extralight text-base opacity-75 mb-3">Explore</div>
            <div class="font-medium text-5xl text-center">My Experience</div>
        </div>
        <div class="flex max-xl:flex-col justify-center items-center h-[80vh] gap-10">
            <div class="flex-1 flex flex-col items-center justify-center gap-2 p-6 border-[1px] border-solid text-center border-opacity-50 h-fit border-stone-400 rounded-[2rem]">
                <Experiencedetails />
            </div>
            <div class="flex-1 flex flex-col items-center justify-center gap-2 p-6 border-[1px] border-solid text-center border-opacity-50 border-stone-400 rounded-[2rem]">
                <Experiencedetails />
            </div>
        </div>
    </Section>
</template>

<script>
import Section from "./inner/Section.vue";
import Experiencedetails from "./inner/Experiencedetails.vue";

export default {
    name: 'Experience',
    components: {
        Section,Experiencedetails
    }
}
</script>

<style></style>