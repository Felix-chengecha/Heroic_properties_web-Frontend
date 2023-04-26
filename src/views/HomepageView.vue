<script setup>

import PropertiesSec from '../components/PropertiesSec.vue'
import SummaryC from '../components/SummaryC.vue'
import Testimonials from '../components/Testimonials.vue';
import Services from '../components/Services.vue';
import Footercom from '../components/Footercom.vue'

</script>

<template>
 


<section>
  <div class="mx-auto flex flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20 mx-1 mt-1">
    <div class="relative">
      <img class="w-full h-1/4 object-cover rounded overflow-hidden" src="../assets/images/1.jpg">
      <div class="absolute inset-0 bg-black bg-opacity-70">
        <div class="absolute inset-0 flex flex-col items-center justify-center mt-3">
          <h5 class="text-xl font-semibold text-center text-neutral-200 mb-2 sm:text-xl lg:text-3xl">Buy & Rent real estate properties</h5>
          <p class="font-extrabold text-center text-neutral-200 mb-4 sm:text-lg lg:text-xl">with us</p>

          <!-- <form class="flex flex-col items-center mt-3 w-full"> -->
            <form class="rounded-md shadow-md px-4 py-6 sm:px-6 md:px-8 lg:px-10">

            <input id="search" name="search" type="text" required="" placeholder="search properties" 
            class="block w-full px-4 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform 
            border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white 
            focus:ring-offset-2 focus:ring-offset-gray-400 sm:w-80 lg:w-96">
            
           
            <button type="submit" class=" mt-3 block w-full sm:w-auto mx-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 
            focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500">Search</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<summary-c />
<properties-sec id="sectionp"/>
<services id="section2" />
<testimonials id="section1" />
<footercom />



</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
