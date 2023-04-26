<script >
// import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {

  data(){
    return{
      // properties:[]

    }
  },

  computed:{

    ...mapState(["properties"])

  },



  created() {
  
  //  this.$mapMutations.fetchcategory('');
  //  ...mapMutations(["fetchcategory"])

  },

  

  methods: {
    ...mapMutations(["fetchcategory"])

  }
  //   async fetchproducts() {
  //     let response =await axios.get('http://localhost:8000/api/properties/all')
  //     let res = response.data.data;
  //     this.properties=res;
  //     console.log(res);

  //    }

 


}
</script>

<template>
  

<section>

    <h1 class="text-blue-700 text-2xl font-medium text-gray-700 pb-2 mx-5 border-b font-roboto py-4" @click="fetchcategory('')">Featured Properties</h1>
     
 
    <div class="relative items-center w-full px-3 py-2 mx-2 md:px-10 lg:px-10 max-w-7xl mb-12">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
 
          
          <div class="p-6" v-for="prop ,  index in properties" :key="index">
          <router-link :to="{path: `/details/${prop.id}`}">

            <img class="object-cover object-center w-full mb-5 lg:h-48 md:h-36 rounded-xl" :src="prop.display" alt="blog">
              <div class="inline-flex justify-between w-full">
                    <h4 class="mb-2 text-md font-sans leading-none tracking-tighter text-neutral-700">{{ prop.type }}</h4>
                    <span class="mb-2 text-md font-sans leading-none tracking-tighter text-neutral-700">{{ prop.cost }}.KES</span>
                 </div>
                <small class="mx-auto font-mono  text-gray-500 pr-1 pl-0 py-1"><i class="fas fa-location"></i>{{ prop.location }}</small>
              </router-link>
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
