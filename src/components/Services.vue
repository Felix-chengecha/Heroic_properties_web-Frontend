<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <section id="section2" class=" bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 dark:border-gray-900 dark:border rounded p-4">

    <h1 class="text-gray-400 text-2xl font-semibold pb-4 text-center font-nunito">
      Our Services
    </h1>

    <div class="grid grid-cols-1 gap-10 text-center lg:gap-16 lg:grid-cols-2">

      <!-- First Column -->
      <div>
        <div class="p-4 mx-auto">
          <!-- Search Property -->
          <div class="mb-10">
            <h2 class="text-lg font-semibold tracking-widest text-blue-500">Search Property</h2>
            <p class="text-gray-400 text-sm mt-2">
              Find your ideal home or investment property effortlessly. Filter by location, price, and amenities to match your needs.
            </p>
          </div>

          <!-- Book Property -->
          <div class="mb-10">
            <h2 class="text-lg font-semibold tracking-widest text-blue-500">Book Property</h2>
            <p class="text-gray-400 text-sm mt-2">
              Secure your desired property in just a few clicks. Enjoy a smooth, hassle-free booking experience with verified listings.
            </p>
            <a href="#" class="inline-block mt-3 px-5 py-1.5 text-white text-sm bg-blue-400 rounded-lg shadow-md hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
        </div>
      </div>

      <!-- Second Column -->
      <div>
        <div class="p-4 mx-auto">
          <!-- List Property -->
          <div class="mb-10">
            <h2 class="text-lg font-semibold tracking-widest text-blue-500">List Property</h2>
            <p class="text-gray-400 text-sm mt-2">
              Showcase your property to thousands of potential buyers. Get expert guidance and exposure to the right audience.
            </p>
          </div>

          <!-- Download Our App -->
          <div class="mb-10">
            <h2 class="text-lg font-semibold tracking-widest text-blue-500">Download Our App</h2>
            <p class="text-gray-400 text-sm mt-2">
              Stay updated with the latest listings, alerts, and deals. Download our app for instant access anywhere, anytime.
            </p>
            <a href="#" class="inline-block mt-3 px-5 py-1.5 text-white text-sm bg-blue-400 rounded-lg shadow-md hover:bg-blue-700 transition">
              Get the App
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template> 

<script>
import { ref, onMounted } from "vue";

import { useDarkModeStore } from "../store/darkModeStore"

export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    return { darkModeStore };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;400&display=swap');

.zoom-on-hover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
