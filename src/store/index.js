import { createStore } from "vuex"
import axios from "axios"

export default createStore({

   state() {
      return{
         properties:[],
        //  category_prop:[],
         category:''
     }
   },

   mutations: {

    async fetchprops(){
        const response =await axios.get('http://localhost:8000/api/properties/all')
        const res= response.data.data;
        state.properties.push(res);
      },

    async fetchcategory(state, payload) {

      if(!payload) {
        const response =await axios.get('http://localhost:8000/api/properties/all')
        const res= response.data.data;

        // state.properties.push(res);
        state.properties=res;
        console.log(res);

      }
      else{

        const data= {"category":payload};
        const response = await axios.post('http://127.0.0.1:8000/api/properties/category', data);
        const res= response.data.data;

        state.properties=res;

        console.log(res);
        state.category=payload;
      }
     
    }
   }

})