import { createRouter, createWebHistory } from "vue-router";
import moredetails from '../views/DetailsView.vue';
import Indexcom from '../views/IndexView.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name:'home',
            component:Indexcom
        },

        {
            path: '/moredetails/:propid/:category',
            name: 'moredetails',
            component: moredetails
        }

       
    ]
}) ;

export default router;
