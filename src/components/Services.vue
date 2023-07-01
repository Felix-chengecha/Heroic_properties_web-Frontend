<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

<section id="section2" style="margin-right: 50px;">
  <h1 class="text-blue-700 text-2xl font-medium text-gray-700 pb-2 mx-5  font-roboto mt-2 text-center" style="font-family: 'Nunito', sans-serif;">Services</h1>
    <div class="relative items-center w-full px-5 py-3 mx-10 md:px-12 lg:px-24 max-w-7xl mb-20 border">


<div class="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-2">      
  
  

<!-- first grid col start -->    
    <div>
        <div class="p-6 mx-auto">
         <!-- search message start -->
            <div>
            <h2 class="mt-4 text-xl font-semibold tracking-widest text-blue-500">
              Search property
                </h2>   
            <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500 mt-2" style="font-family: 'Nunito', sans-serif;">
                   Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
        </div>
         <!-- search message end -->

       <!-- book message start -->
        <div class="mt-16">            
            <h2 class="mt-4 text-xl font-semibold tracking-widest text-blue-500">
              Book property
                </h2> 
            <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500 mt-2" style="font-family: 'Nunito', sans-serif;">
            Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
          
          <a href="#" class="w-full items-center block px-10 py-0.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out
             transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"></a> 
        </div>
         <!-- book message end -->
        </div>
    </div>


      <div>
        <div class="p-6 mx-auto">
          <!--List properties start  -->
        <div>
          <h2 class="mt-4 text-xl font-semibold tracking-widest text-blue-500">
            List property
                </h2>  
          <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500 mt-2" style="font-family: 'Nunito', sans-serif;">
            Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
     
        </div>
        <!-- List properties end -->
   
        <!-- book message start -->
        <div class="mt-16">          
            <h2 class="mt-4 text-xl font-semibold tracking-widest text-blue-500">
              Download our app
                </h2> 
            <p class="font-mono mx-auto text-sm leading-relaxed text-gray-500 mt-2" style="font-family: 'Nunito', sans-serif;">
            Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
          <a href="#" class="w-full items-center block px-10 py-0.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out
             transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"></a> 
        </div>
         <!-- book message end -->

        </div>
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
