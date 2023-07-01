<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
 
 <section id="section4"> 

    <h1 class="text-blue-700 text-3xl font-medium text-gray-700 pb-2 mx-5 mb-5 text-center">Testimonials</h1>

    <div class="relative items-center w-full px-5 py-12 mx-10 md:px-12 lg:px-24 max-w-7xl border">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div class="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                    <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500" style="font-family: 'Nunito', sans-serif;">
                    I had an excellent experience using this real estate site. The platform was user-friendly and provided me with all 
                    the necessary information to find my dream home.
                    I highly recommend this site to anyone in the market for a new home.</p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
          Anita angle
                </h2>
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src="../assets/p1.jpeg">
            </div>
            <div class="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                    <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500" style="font-family: 'Nunito', sans-serif;">
                    I had been trying to rent my house for months with no luck, but then I decided to list it on this real estate site. I was amazed at the amount of 
                    interest my property generated, 
                    and I was able to sell it quickly and at a great price.</p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            lyod austin
                </h2>
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src="../assets/p2.jpeg">
            </div>
            <div class="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                    <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500" style="font-family: 'Nunito', sans-serif;">
                    Thanks to this real estate site,
                    I was able to search for properties in my preferred area and budget, and I found a great apartment within a few days. 
                    The site was easy to use and had a lot of helpful information about each property.</p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Eva valecueza
                </h2>
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src="../assets/p3.jpeg">
            </div>
        </div>
    </div>
</section>


</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Alata&family=Montserrat:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');


.read-the-docs {
  color: #888;
}

.zoom-on-hover:hover {
  transform: scale(1.1);
  /* add transition to create a smooth animation */
  transition: transform 0.3s ease-in-out;
}

</style>
