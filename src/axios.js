import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/V1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

});

apiClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// Get the token from local storage

export default {

  //fetch all properties
  getallproperties() {
    return apiClient.get('/properties/all',  {
    })
    .then(response => {
      return response.data;
    });
  },

//fetch property details
  getpropertydetails(data) {
    return apiClient.post('/properties/details',data , {
    })
    .then(response => {
      return response.data;
    });
  },



//fetch property images
getpropertyimages(data) {
    return apiClient.post('/properties/images',data , {
    })
    .then(response => {
      return response.data;
    });
  },


  //fetch  similar properties

  getsimilarproperties(data){
    return apiClient.post('/properties/category',data , {
    })
    .then(response => {
      return response.data;
    });
  },

  //search property with loc, price, type
  Searchproperty(data){
    return apiClient.post('/properties/',data , {
    })
    .then(response => {
      return response.data;
    });
  },


};



