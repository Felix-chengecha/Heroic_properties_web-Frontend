import { createRouter, createWebHistory } from "vue-router";
import moredetails from '../views/DetailsView.vue';
import Indexcom from '../views/IndexView.vue'
import AboutUs from '../components/AboutUs.vue';
import Contact from '../components/ContactUs.vue';
import Account from '../components/Account.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name:'home',
            component:Indexcom
        },
        {
            path: '/AboutUs',
            name:'AboutUs',
            component:AboutUs
        }, 

        {
            path: '/Contact',
            name:'Contact',
            component:Contact
        },

        {
            path: '/Account',
            name:'Account',
            component:Account
        },


        //aboutus
        {
            path: '/moredetails/:propid/:category',
            name: 'moredetails',
            component: moredetails
        }

       
    ]
}) ;

export default router;
