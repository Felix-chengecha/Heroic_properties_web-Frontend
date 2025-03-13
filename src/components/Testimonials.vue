<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <section id="section4" class="py-12 bg-gray-50">
    <h1 class="text-blue-700 text-3xl font-semibold text-center mb-8">Testimonials</h1>

    <div class="relative w-full px-5 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <p class="text-sm leading-relaxed text-gray-600 text-center">
            I had an excellent experience using this real estate site. The platform was user-friendly and provided me with all 
            the necessary information to find my dream home. I highly recommend this site to anyone in the market for a new home.
          </p>
          <img 
            alt="testimonial" 
            class="w-20 h-20 mt-6 rounded-full object-cover shadow-md transform transition duration-300 hover:scale-110"
            src="../assets/p1.jpeg"
          />
          <h2 class="mt-3 text-sm font-semibold text-blue-500 uppercase">Anita Angle</h2>
        </div>

        <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <p class="text-sm leading-relaxed text-gray-600 text-center">
            I had been trying to rent my house for months with no luck, but then I decided to list it on this real estate site. 
            I was amazed at the amount of interest my property generated, and I was able to sell it quickly and at a great price.
          </p>
          <img 
            alt="testimonial" 
            class="w-20 h-20 mt-6 rounded-full object-cover shadow-md transform transition duration-300 hover:scale-110"
            src="../assets/p2.jpeg"
          />
          <h2 class="mt-3 text-sm font-semibold text-blue-500 uppercase">Lloyd Austin</h2>
        </div>

        <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <p class="text-sm leading-relaxed text-gray-600 text-center">
            Thanks to this real estate site, I was able to search for properties in my preferred area and budget, 
            and I found a great apartment within a few days. The site was easy to use and had a lot of helpful information about each property.
          </p>
          <img 
            alt="testimonial" 
            class="w-20 h-20 mt-6 rounded-full object-cover shadow-md transform transition duration-300 hover:scale-110"
            src="../assets/p3.jpeg"
          />
          <h2 class="mt-3 text-sm font-semibold text-blue-500 uppercase">Eva Valecueza</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600&display=swap');

.shadow-lg {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
