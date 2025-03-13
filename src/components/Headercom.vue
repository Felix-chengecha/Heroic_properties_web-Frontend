<template>
    
<main>

  <!-- <div :class="{ dark: darkModeStore.isDarkMode }" class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"> -->

<section id="section1" class="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">





  <section id="section1" class="text-gray-600 body-font">
  <div class="container lg:px-5  mx-auto">
    <!-- platform title  -->
    <div class="flex flex-col text-center lg:w-full mb-4">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Unlock the Door to Your Dream Home: Discover, Compare, and Connect with Rental Properties Tailored to Your 
        Lifestyle on Our Innovative Property Search Platform! Find the Perfect Rental, Embrace the Freedom!
      </p>
    </div>

    <!-- search property section -->

    <form  @submit.prevent="searchProperty"> 


    <div class="flex flex-wrap m-4 text-center mt-5 lg:ml-10 mb-9">

    <div class="md:w-1/4 lg:w-1/4 sm:w-1/2 w-full mt-2 lg:ml-2 relative">
      <button @click="toggleDropdownprop" type="button" class="inline-flex justify-between items-center lg:px-4 
      py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">
        {{ selectedProperty || 'Property category' }}
        <svg v-if="propDropdownOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <div v-if="propDropdownOpen" class="absolute left-0 lg:left-0 mt-2 w-full lg:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <a @click="propOption(option)" v-for="option in PropdownOptions" :key="option.id" href="#" class="block lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
          {{ option.label }}
        </a>
      </div>
    </div>



      <!-- location category dropdown-->
      <!-- <div class="md:w-1/4 lg:w-1/4 sm:w-1/2 w-full mt-2 ml-2"> -->
        <div class="md:w-1/4 lg:w-1/4 sm:w-1/2 w-full mt-2 lg:ml-2">

        <button @click="toggleDropdownloc" type="button" class="inline-flex justify-center lg:ml-1 items-center lg:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" id="dropdown-menu" aria-expanded="true" aria-haspopup="true">
      {{ selectedlocation || 'location' }}
      <svg v-if="locDropdownOpen" class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg v-else class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <div v-if="locDropdownOpen" class="origin-top absolute left-100      mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
      <a @click="LocationOption(option)" v-for="option in  locdownOptions" :key="option.id" href="#" class="block lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        {{ option.label }}
      </a>
    </div>
</div>

<div class="md:w-1/4 lg:w-1/5 sm:w-1/2 w-full mt-2 ml-2">

      <!-- max price input -->
        <input type="number" class="border rounded-lg px-3 py-2  mb-5 text-sm w-full ml-1" placeholder="max price" id="maxprice" v-model="maxprice" required />
    </div>    

    <div class="md:w-1/4 lg:w-1/5 sm:w-1/2 w-full mt-2">
    <!-- search button -->
    <button type="submit"  class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 
                       focus:ring-blue-500 focus:ring-opacity-50 text-white w-full  ml-2 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Search </span>
    </button>

    </div>
  </div>

  </form>

  <!-- categories section -->
    <div class="flex flex-wrap -m-4 text-center mt-5">
      <div class="py-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 lg:file:px-2 py-6 rounded-lg hover:bg-blue-200" @click="categoryProperties('Apartment')">
          <div class="container mx-auto flex justify-center items-center">
          <img :src="apartment" alt="Icon" style="height:60px" class="" />
          </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Apartments</p>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-blue-200" @click="categoryProperties('Hostel')">
          <div class="container mx-auto flex justify-center items-center">
          <img :src="hostel" alt="Icon" style="height:60px" />
          </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Hostel</p>
        </div>
      </div>

      
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-blue-200" @click="categoryProperties('Office')">
          <div class="container mx-auto flex justify-center items-center">
          <img :src="office" alt="Icon" style="height:60px" />
          </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed"> Office </p>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-blue-200" @click="categoryProperties('House')">
          <div class="container mx-auto flex justify-center items-center">
          <img :src="house" alt="Icon" style="height:60px" />
          </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">House </p>
        </div>
      </div>
    </div>
    </div>
</section>


</section>
<!-- </div> -->



</main>

</template>


<script>
import { useDarkModeStore } from "../store/darkModeStore"
import apartment from '../assets/icons/apartments.svg';
import hostel from '../assets/icons/hostel.svg';
import house from '../assets/icons/house.svg';
import office from '../assets/icons/office.svg';


export default { 
  

  data() {
    const darkModeStore = useDarkModeStore();
    return { darkModeStore ,
  
 

      apartment: apartment,
      hostel: hostel,
      house: house,
      office:office
    }
  },

  methods: {



    
  }
   
}
</script>