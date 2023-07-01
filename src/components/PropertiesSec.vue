<script >
    import axios from '../axios'; 

    import apartment from '../assets/icons/apartments.svg';
    import hostel from '../assets/icons/hostel.svg';
    import house from '../assets/icons/house.svg';
    import office from '../assets/icons/office.svg';


     export default{
      data(){
            return {               
              apartment: apartment,
              hostel: hostel,
              house: house,
              office:office,

              propDropdownOpen: false,
              locDropdownOpen:false,
              selectedProperty: null,
              selectedlocation: null,

              properties: [],
              Categ:'',
              maxprice:null,




              locdownOptions: [
                  { id: 1, label: 'Kiambu' },
                  { id: 2, label: 'rwaka' },
                  { id: 3, label: 'ngegu' },
                  { id: 4, label: 'ndumberi' },

              ],

              PropdownOptions: [
                  { id: 1, label: 'Apartments' },
                  { id: 2, label: 'House' },
                  { id: 3, label: 'Hostel' },
                  { id: 4, label: 'Office' },
             ],

          }
     },

     methods: {

    toggleDropdownprop() {
      this.propDropdownOpen = !this.propDropdownOpen;
    },

    propOption(option) {
      this.selectedProperty = option.label;
      this.propDropdownOpen = false;
    },




    toggleDropdownloc() {
     this.locDropdownOpen = ! this.locDropdownOpen;
    },

    LocationOption(option) {
      this.selectedlocation = option.label
      this.locDropdown = false;
    },





   Getproperties() {
       axios. getallproperties()
        .then(response=>   {
          this.properties = response.data;
           });
         },

    categoryProperties(category) {
       const data= {"category":category }
        axios.getsimilarproperties(data)
        .then(response=>   {
          this.properties = response.data;
      this.Categ = category;

        console.log(this.properties);
      });
      },


    searchProperty(event) {
      event.preventDefault(); 
          if (this.maxprice === null || this.selectedProperty === null || this.selectedlocation === null) {
              console.log(' Please fill in all the required fields.');
        return; 
      }
      else{
        console.log( this.maxprice );
        console.log( this.selectedProperty );
        console.log( this.selectedlocation );

        const data= {"maxprice":this.maxprice,
                    "property":this.selectedProperty,
                    "location":this.selectedlocation }

        axios.Searchproperty(data)
        .then(response=>   {
          this.properties = response.data;
        console.log(this.properties);
      });







      }
    }  


  }, 

  created() {
        this.Getproperties();

     }
      
}

</script>



<template>

<!-- header section start -->



<!-- header section start -->
<section id="section1" class="text-black-800 body-font bg-transparent">

  <div class="container px-5 py-10 mx-auto h-full w-full bg-cover">

    <!-- search property section -->
    <form  @submit.prevent="searchProperty"> 

    <div class="flex flex-wrap -m-4 text-center mt-2  mb-9">
     <!-- propery category dropdown -->
    <div class="md:w-1/4 lg:w-1/4 sm:w-1/2 w-full mt-2 ml-2">
      <button @click="toggleDropdownprop" type="button" class="inline-flex justify-center ml-1 items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" id="dropdown-menu" aria-expanded="true" aria-haspopup="true">
      {{ selectedProperty || 'Property category' }}
      <svg v-if="propDropdownOpen" class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg v-else class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <div v-if="propDropdownOpen" class="origin-top absolute left-20      mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
      <a @click="propOption(option)" v-for="option in PropdownOptions" :key="option.id" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        {{ option.label }}
      </a>
    </div>
    </div>

      <!-- location category dropdown-->
      <div class="md:w-1/4 lg:w-1/4 sm:w-1/2 w-full mt-2 ml-2">

      <button @click="toggleDropdownloc" type="button" class="inline-flex justify-center ml-1 items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" id="dropdown-menu" aria-expanded="true" aria-haspopup="true">
        {{ selectedlocation || 'location' }}


       <svg v-if="locDropdownOpen" class="w-5 h-5 ml-2 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
       </svg>

      <svg v-else class="w-5 h-5 ml-2 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>


    </button>

    <div v-if="locDropdownOpen" class="origin-top absolute left-100      mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
      <a @click="LocationOption(option)" v-for="option in  locdownOptions" :key="option.id" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
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
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-blue-200" @click="categoryProperties('Apartment')">
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
<!-- header section end -->



<!-- header section end -->


<section id="section3">

    <h1 class="text-blue-700 text-2xl font-medium text-gray-700 pb-2 mx-5  font-roboto py-4 text-center" style="font-family: 'Nunito', sans-serif;" @click="fetchcategory('')"> 
    
      {{ Categ || ' Featured Properties' }}
    
    </h1>
    <div class="relative items-center w-full px-3 py-2 mx-2 md:px-10 lg:px-10 max-w-7xl mb-12 border" >
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">

          <div class="p-6" v-for="prop ,  index in properties" :key="index">
            <router-link :to="{ path: `/moredetails/${prop.id}/${prop.category}` }"> 
              <img class="object-cover object-center w-full mb-5 lg:h-48 md:h-36 rounded-xl" :src="prop.display" alt="blog">
             </router-link>
              <div class="inline-flex justify-between w-full">
                    <h4 class="mb-2 text-md font-sans leading-none tracking-tighter text-neutral-700">{{ prop.type }}</h4>
                    <span class="mb-2 text-md font-sans leading-none tracking-tighter text-neutral-700">{{ prop.cost }}.KES</span>
                 </div>
                <small class="mx-auto font-mono  text-gray-500 pr-1 pl-0 py-1"><i class="fas fa-location"></i>{{ prop.location }}</small>


            </div>
        </div>
    </div>


</section>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
