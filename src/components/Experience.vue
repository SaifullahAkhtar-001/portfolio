<template>
    <Section>
        <div class="flex flex-col justify-center gap-10 items-center h-[80vh] max-xl:h-fit">
            <Sectionheader heading="Experience" subheading="Explore My"/>
            <div class="flex max-md:flex-col justify-center items-center gap-6">
                <div
                    class="flex-1 flex flex-col items-center justify-center p-6 border-[1px] gap-10 border-solid text-center border-opacity-50 border-stone-400 rounded-[2rem]">
                    <div class="font-medium text-2xl opacity-75">FrontEnd Development</div>
                    <div class="flex flex-row flex-wrap gap-10 items-center justify-around ">
                        <Experiencedetails title="React" experience="Intermediate" />
                        <Experiencedetails title="Vue JS" experience="Experienced" />
                        <Experiencedetails title="HTML" experience="Experienced" />
                        <Experiencedetails title="Tailwind" experience="Experienced" />
                        <Experiencedetails title="Bootstrap" experience="Experienced" />
                        <Experiencedetails title="JavaScript" experience="Experienced" />
                    </div>
                </div>
                <div
                    class="flex-1 flex flex-col items-center justify-center p-6 border-[1px] gap-10 border-solid text-center border-opacity-50 border-stone-400 rounded-[2rem]">
                    <div class="font-medium opacity-75">BackEnd Development</div>
                    <div class="flex flex-row flex-wrap gap-10 items-center justify-around ">
                        <Experiencedetails title="Laravel" experience="Experienced" />
                        <Experiencedetails title="MySQL" experience="Intermediate" />
                        <Experiencedetails title="PostgresSQL" experience="Intermidate" />
                        <Experiencedetails title="PHP" experience="Experienced" />
                        <Experiencedetails title="Git" experience="Experienced" />
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script>
import Section from "./inner/Section.vue";
import Experiencedetails from "./inner/Experiencedetails.vue";
import Sectionheader from './inner/Sectionheader.vue'


export default {
    name: 'Experience',
    components: {
        Section, Experiencedetails,Sectionheader
    }
}
</script>

<style></style>