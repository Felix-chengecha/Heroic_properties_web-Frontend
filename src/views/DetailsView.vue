<script>

import axios from 'axios';

export default{

  data() {
    return {
      details:[],
      images:[],
      category:'',
      similar:[],
      mainimage:''
     }
  },
  
created() {

  let pid = this.$route.params.propid;
    
  console.log(pid);

  this.loaddetails(pid);
  this.loadimages(pid);
  setTimeout(() => {
    this.similarproducts(); // Call your method here
    }, 1000);


},

methods:{

  async loaddetails(pid){
      const data={"prop_id":pid}
      const response =await axios.post('http://127.0.0.1:8000/api/properties/details',data )
      const res= response.data.data;
      this.details = res;
      console.log(res);
        for(let item of res) {
         this.category= item.category;
         this.mainimage= item.display;
      }

  },

  async loadimages(pid) {

    const data={"prop_id":pid}
      const response =await axios.post('http://127.0.0.1:8000/api/properties/images',data )
      const res= response.data.data;
      console.log(res);

      this.images=res;

    
  },

  async similarproducts() {

    const data= {"category": this.category }
    const response = await axios.post('http://127.0.0.1:8000/api/properties/category', data)
    const res= response.data.data;
    this.similar=res;
    console.log(this.category);
    console.log(res);

  },

  hoverImage(img) {
      this.mainimage = img.images;
    },
  refresh() {
    location.reload();
  }


}




}


</script>

<template>
 
<section>

  

<div class="px-4 py-10 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-18 border mx-2">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl mt-3">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div class="relative" >
              <img class="object-contain mx-auto rounded-lg h-80  shadow-2xl" alt="hero" :src="mainimage">
      <!-- <img class="w-full h-1/4 object-cover rounded overflow-hidden" :src="mainimage"> -->

            </div> 
           </div>
        </div>

    <div class="relative flex overflow-x-scroll mx-1 mt-2">
      <div v-for="img, index in images" :key="index">
        <img :src="img.images" class="w-64 h-20 object-contain mr-4 md:mr-8 hover:opacity-75" @mouseover="hoverImage(img)">
      </div>
    </div>

  </div> 
      
      <div class="flex flex-col items-start mt-12 mb-8 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
           
        <div v-for="det, index in details" :key="index" >
        <h2 class="mb-8 text-xl font-serif font-bold tracking-widest text-blue-500"> {{ det.category }} - {{ det.name }} </h2>
        <h4 class="mb-8 text-2xl font-sans  leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-2xl">  <i class="fas fa-home"></i> {{ det.type }}</h4>
        <span class="mb-8 text-sm leading-relaxed text-left text-gray-600 font-mono"> <i class="fas fa-bookmark"></i> {{ det.description }}</span>       
        <div class="flex-col mt-0 lg:mt-4 max-w-7xl sm:flex">
          <div class="prose prose-md">
            <ul>
              <li class="text-gray-600 font-sans"> <i class="fas fa-dollar"></i> {{ det.cost}}.KES</li>
              <li class="text-gray-600 font-sans mt-2"> <i class="fas fa-location"></i> {{ det.location }}</li>
              <li class="text-gray-600 font-sans mt-2"> <i class="fas fa-phone"></i> {{ det.owner }}</li>
            </ul>
          </div>
        </div>
         <button type="submit" 
         class=" mt-5 block w-full px-5 py-3 text-base font-medium text-white bg-orange-600 border border-transparent rounded-lg
           shadow hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Book now</button>
      </div>
    </div>
    </div>
  </div>
</section>


<section>

<h1 class="text-blue-700 text-2xl font-medium text-gray-700 pb-2 mx-5  mt-7 font-roboto py-4 font-mono">Similar Properties</h1>


<div class="relative items-center w-full px-3 py-2 mx-2 md:px-10 lg:px-10 max-w-7xl mb-12">
    <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">

      
      <div class="p-6" v-for="prop ,  index in similar" :key="index">
      <router-link :to="{path: `/details/${prop.id}`}" @click="refresh">

        <img class="object-cover object-center w-full mb-5 lg:h-48 md:h-36 rounded-xl" :src="prop.display" alt="blog">
          <div class="inline-flex justify-between w-full">
                <h4 class="mb-2 text-xl font-sans leading-none tracking-tighter text-neutral-800">{{ prop.type }}</h4>
                <span>{{ prop.cost }}.KES</span>
             </div>
            <small class="mx-auto text-base font-medium leading-relaxed text-gray-500 pr-1 pl-0 py-1"><i class="fas fa-geolocation"></i>{{ prop.location }}</small>
          </router-link>
        </div>


    </div>
</div>

</section>






</template>

<style scoped>

</style>
