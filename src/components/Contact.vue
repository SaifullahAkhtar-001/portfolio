<template>
    <Section>
        <div class="flex flex-col justify-center gap-10 items-center h-[80vh] max-xl:h-fit">
            <Sectionheader heading="Contant Me" subheading="Get In Touch" />
            <div>
                <div class="flex flex-around max-xl:gap-9 gap-24 py-6 px-12 max-md:px-5 border-[1px] rounded-[2rem] border-stone-400 text-medium">
                    <div class="flex gap-4 justify-center items-center">
                        <svg class="mt-1 h-7 cursor-pointer dark:fill-white dark:hover:fill-stone-600 hover:opacity-70"
                            version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299.997 299.997" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
                                        C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
                                        c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
                                        l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
                                        c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
                                        c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
                                        c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
                                        V196.423z" />
                                </g>
                            </g>
                        </svg>
                        <a href="mailto:saifullah.akhtar13@gmail.com" class="relative group transition duration-300">
                            Gmail
                            <span
                                class="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
                        </a>
                    </div>
                    <div class="flex gap-4 justify-center items-center">
                        <svg class="mt-1 h-7 cursor-pointer dark:fill-white dark:hover:fill-stone-600 hover:opacity-70"
                            version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299.997 299.997" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
                                        C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
                                        c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
                                        l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
                                        c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
                                        c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
                                        c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
                                        V196.423z" />
                                </g>
                            </g>
                        </svg>
                        <a href="http://linkedin.com/in/saifullah-akhtar-0ba508233"
                            class="relative group transition duration-300">
                            LinkedIn
                            <span
                                class="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </Section>
</template>

<script>
import Section from './inner/Section.vue';
import Sectionheader from './inner/Sectionheader.vue';
export default {
    name: 'Contact',
    components: {
        Section, Sectionheader
    },
}
</script>

<style></style>