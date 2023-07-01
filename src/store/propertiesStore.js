import { defineStore } from "pinia";
// import axios from '../axios'; 
import axios from 'axios';

export const usePropstore = defineStore('properties', {
    state: ()=> ({
      
        properties: null,
        details:[],
        count:100
        

    }),

actions:{

    

   



},

getters: {

    // Getprops : (state) => {
    //     axios. getallproperties()
    //     .then(response=>   {
    //         state.properties = response.data;
    //         console.log(response.data);
    //     });
    //     return state.properties;
    //     },



    Getprops: (state) => {
       axios.get('http://127.0.0.1:8000/api/properties/all')
        .then(response=> {
            state.properties = response.data;
            })
            .catch(error=> 
                console.log(error))

        return state.properties;
        }

    

  




   }
})
