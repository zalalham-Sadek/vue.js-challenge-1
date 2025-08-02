import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import Dashboard from "@/views/Dashboard.vue";
const routes = [
    {path:'/',name:'landing page', component:LandingPage},
    {path:'/dashboard',name:'dashboard', component:Dashboard}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;