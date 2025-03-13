<script>

import {mapMutations, mapState} from "vuex"


export default{

  data() {
    return{

      categories: [
        {"category":"Office"},
        {"category":"Apartment"},
        {"category":"Hostel"},
        {"category":"House"},
      ]

    }
  },

  computed:{

    ...mapState(["category"])

  },

  methods: {
    // ...mapMutations(["fetchcategory"]),

// fetchcategory(id){
//   console.log(id);
// }


}

}

</script>

<template>



<section class="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">

<!-- <div class="relative items-center w-full px-3 py-8 mx-auto md:px-3 lg:px-12 max-w-7xl bg-gray"> -->

  <div class="relative items-center w-full px-3 py-2 mx-2 md:px-10 lg:px-10 max-w-7xl mb-12 border mt-4" >


  <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-4 lg:gap-8">
    <div class="p-3"  v-for="categ, index in categories" :key="index">
      <div>
        <h3  class="inline-flex items-center justify-center flex-shrink-0 w-12 h-10 text-center mb-2 text-blue-600 rounded-full bg-blue-50" style="margin-left: 105px;">  12 </h3>
      </div>
      <h5 class="mb-2 text-l leading-none tracking-tighter text-neutral-800 text-center md:text-md" @click="fetchcategory(categ.category)" style="font-family: 'Nunito', sans-serif;">
        <span class="zoom-on-hover  text-md Font-mono  text-neutral-800">{{ categ.category }} </span>
      </h5>
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
