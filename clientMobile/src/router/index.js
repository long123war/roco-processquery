import Vue from "vue";
import VueRouter from "vue-router";
import door from '../components/door.vue';
import furniture from '../components/furniture.vue';
import HelloWorld from '../components/HelloWorld.vue';
import kitchen from '../components/kitchen.vue';
import popup from '../components/popup.vue';
import single from '../components/single.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: "/HelloWorld",
    
    component: HelloWorld,
    children:[{ path: 'popup', component: popup },
  ]
  },
 
  {
    path: '/door', component: door
    
 },
 {
  path: '/kitchen', component: kitchen
  
},
{
  path: '/furniture', component: furniture
  
},
{
  path: '/single', component: single
  
}





 
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
