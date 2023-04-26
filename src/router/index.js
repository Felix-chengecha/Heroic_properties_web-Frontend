import { createRouter, createWebHistory } from "vue-router";
import Details from '../views/DetailsView.vue';
import home from '../views/HomepageView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name:'home',
            component:home
        },

        {
            path:'/details/:propid',
            name:'details',
            component: Details
        }
    ]
}) ;

export default router;
