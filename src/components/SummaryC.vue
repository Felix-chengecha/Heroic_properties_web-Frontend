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
    ...mapMutations(["fetchcategory"]),

}

}

</script>

<template>



<section>

<div class="relative items-center w-full px-3 py-8 mx-auto md:px-3 lg:px-12 max-w-7xl">
  <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-4 lg:gap-8 border">
    <div class="p-3"  v-for="categ, index in categories" :key="index">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-10 mb-5 text-blue-600 rounded-full bg-blue-50">
        <h3> 12 </h3>
      </div>
      <h5 class="mb-2 text-xl leading-none tracking-tighter text-neutral-800 lg:text-xl" @click="fetchcategory(categ.category)">
        <span class="zoom-on-hover  text-xl Font-mono  text-neutral-800">{{ categ.category }} </span>
      </h5>
    </div>
  </div>
</div>
</section>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.zoom-on-hover:hover {
  transform: scale(1.1);
  /* add transition to create a smooth animation */
  transition: transform 0.3s ease-in-out;
}

</style>
