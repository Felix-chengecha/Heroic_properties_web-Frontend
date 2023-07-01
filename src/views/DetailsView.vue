<script >
import leaflet from "leaflet"
import { useRoute, useRouter } from 'vue-router';
import axios from '../axios'; 
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { ref } from 'vue';

export default{
  setup() {
       // Declare reactive variables
       const route = useRoute();
       const router = useRouter();

    const pid = route.params.propid;
    const routeCategory = route.params.category;
    let mymap;
    const details = reactive([]);
    const images = reactive([]);
    const similar = reactive([]);
    const mainimage = reactive({ value: '' });
    const name = reactive({ value: '' });
    const lat = ref(0.0 );
    const lng = ref(0.0);
  

    //fetch property details
       const Getdetails=(pid) =>{
         const data={"prop_id":pid}
           axios. getpropertydetails(data)
           .then(response=>   {
            details.splice(0, details.length, ...response.data);
            let res=response.data;

            for(let item of res){
              let img=item.display;
              let latitude=item.latitude;
              let longitude=item.longitude;
              let pname=item.name;
                
                 name.value=pname;
                mainimage.value=img;
                lat.value=latitude;
                lng.value=longitude; 
            }
          console.log(details);
        });
      }


      //get property images
      const Getimages=(pid) => {
        const data={"prop_id":pid}
          axios. getpropertyimages(data)
          .then(response=>   {
            images.splice(0, details.length, ...response.data);
            console.log(response.data);
          });
      }

      //fetch similar properties
      const Getsimilarproperties=(category)=> {
          const data= {"category":category }
            axios.getsimilarproperties(data)
           .then(response=>   {
            similar.splice(0, details.length, ...response.data);
            console.log(response.data);
        });
      }

      // display the hovered image to the main image category
      const  hoverImage=(img)=> {
          mainimage.value = img.images;
        }
      
       //reload function 
      const reload = () => {
        console.log('Reload function called'); 
        location.reload();
       } 
            

      //open the selected property in similar properties category
       const  navigateToDetails=(id, category)=> {
          router.push(`/moredetails/${id}/${category}`);
            setTimeout(() => {
               reload();
            }, 500); 
        }

        //open maps
       const launchmaps=()=> {
      
           console.log(lat.value);
           console.log(lng.value);
        
          mymap=leaflet.map("mapid").setView([lat.value, lng.value], 15);
            leaflet
           .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mymap);

          leaflet.marker([lat.value, lng.value]).addTo(mymap)
             .bindPopup(name.value)
             .openPopup();
       } 




      onMounted( ()=> {
        //call this methods on mount
        Getdetails(pid);
        Getimages(pid);

        setTimeout(() => {
          launchmaps();
            }, 500); 



        Getsimilarproperties(routeCategory )
      })

    return {
      details,
      images,
      name,
      similar,
      mainimage,
      lat,
      lng,
      pid,
      routeCategory,

      hoverImage,
      navigateToDetails
    }


    
  },

 


 

}


</script>

<template>
 
<!-- main image and details section start -->
<section>
 <div class="px-4 py-10 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-18 border mx-2">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl mt-3">
     
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative" >
              <img class="object-contain mx-auto rounded-lg h-80  shadow-2xl" alt="hero" :src="mainimage.value">
            </div> 
           </div>
        </div>

    <div class="relative flex overflow-x-scroll mx-1 mt-2">
      <div v-for="img, index in images" :key="index">
        <img :src="img.images" class="w-64 h-20 object-contain mr-4 md:mr-8 hover:opacity-75" @mouseover="hoverImage(img)">
      </div>
    </div>
  </div> 




<!-- more details -->

  <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative pl-24" >

              <!-- details start -->
              <div v-for="det, index in details" :key="index" >
                  <h2 class="mb-5 text-xl font-serif font-bold tracking-widest text-blue-500"> {{ det.category }} - {{ det.name }} </h2>
                   <h4 class="mb-5 text-2xl font-sans  leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-2xl">  <i class="fas fa-home"></i> {{ det.type }}</h4>
                    <span class="mb-3 text-sm leading-relaxed text-left text-gray-600 font-mono"> <i class="fas fa-bookmark"></i> {{ det.description }}</span>       
                    <div class="flex-col mt-0 lg:mt-4 max-w-7xl sm:flex">
                     <div class="prose prose-md">
                      <ul>
                      <li class="text-gray-600 font-sans"> <i class="fas fa-dollar"></i> {{ det.cost}}.KES</li>
                      <li class="text-gray-600 font-sans mt-2"> <i class="fas fa-location"></i> {{ det.location }}</li>
                      <li class="text-gray-600 font-sans mt-2"> <i class="fas fa-phone"></i> {{ det.owner }}</li>
                     </ul>
                   </div>
                  </div>
                </div>
            <!-- details end -->  
          </div> 


                  <!-- display amenities start -->
            <div class="relative pl-5">
                  <div class="flex">              
                    <div class="w-36 h-10 border-gray-500 rounded-full border-2 flex items-center justify-center mt-5">
                        <span class="text-gray-500 text-lg">
                        <i class="fas fa-power-off"></i>  Power</span>
                    </div>

                    <div class="w-36 h-10 border-gray-500 rounded-full border-2 flex items-center justify-center mt-5 ml-2">
                        <span class="text-gray-500 text-lg">
                          <i class="fas fa-faucet-drip px-1"></i>water </span>
                    </div>

                    <div class="w-36 h-10 border-gray-500 rounded-full border-2 flex items-center justify-center mt-5 ml-2">
                        <span class="text-gray-500 text-lg">
                          <i class="fas fa-parking px-1"></i> Parking </span>
                    </div>

                    <div class="w-36 h-10 border-gray-500 rounded-full border-2 flex items-center justify-center mt-5 ml-2">
                              <span class="text-gray-500 text-lg">
                                <i class="fas fa-wifi px-3"></i>wifi </span>
                          </div>
                 </div>

                 <!-- details two start -->
                 <div class="flex">
                       
                          <div class="w-36 h-10 border-gray-500 rounded-full border-2 flex items-center justify-center mt-5 ml-2">
                              <span class="text-gray-500 text-lg">
                                <i class="fas fa-user-lock px-1"></i> security </span>
                          </div>                
                  </div>
                 <!-- details two end -->
                </div>      

          
              
           </div>
        </div>

    <div class="relative flex mx-1 mt-2">
      <button type="submit"
       class="mt-5 mx-auto block w-1/2 px-5 py-3 text-base font-medium text-white bg-orange-600 border border-transparent 
             rounded-lg shadow hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">Book now</button>

    </div>
  </div>
      
     






    </div>
  </div>
</section>
<!-- main image and details section end -->
   
<!-- section two  map section start -->
<section>
    <div class="relative items-center w-full px-2 py-2 mx-2 md:px-10 lg:px-10 max-w-7xl mb-12 mt-5">
        <div id="mapid"></div>
    </div>
  </section>
<!-- section two map section end  -->
 

<!-- similar properties start -->
<section>
<h1 class="text-blue-700 text-2xl font-medium text-gray-700 pb-2 mx-5  mt-7 font-roboto py-4 font-mono text-center" style="font-family: 'Nunito', sans-serif;">Similar Properties</h1>
<div class="relative items-center w-full px-3 py-2 mx-2 md:px-10 lg:px-10 max-w-7xl mb-12 border">
    <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">

      <div class="p-6" v-for="prop ,  index in similar" :key="index">
        <router-link :to="{ path: `/moredetails/${prop.id}/${prop.category}` }" @click="navigateToDetails(prop.id, prop.category)"> 
        <img class="object-cover object-center w-full mb-5 lg:h-48 md:h-36 rounded-xl" :src="prop.display" alt="blog">
        <div class="inline-flex justify-between w-full">
                    <h4 class="mb-2 text-md font-sans leading-none tracking-tighter text-neutral-700">{{ prop.type }}</h4>
                    <span class="mb-2 text-md font-sans leading-none tracking-tighter text-neutral-700">{{ prop.cost }}.KES</span>
                 </div>
                <small class="mx-auto font-mono  text-gray-500 pr-1 pl-0 py-1"><i class="fas fa-location"></i>{{ prop.location }}</small>>
          </router-link>
        </div>

    </div>
</div>
</section>

<!-- similar properties end -->



</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Alata&family=Montserrat:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');


#mapid{
  height:  250px;
}
</style>
