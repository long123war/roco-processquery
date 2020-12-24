import Vue from "vue";
import VueRouter from "vue-router";
import door from '../components/door.vue';
import furniture from '../components/furniture.vue';
import HelloWorld from '../components/HelloWorld.vue';
import kitchen from '../components/kitchen.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: "/HelloWorld",
    
    component: HelloWorld
  },
 
  {
    path: '/door', component: door
    
 },
 {
  path: '/kitchen', component: kitchen
  
},
{
  path: '/furniture', component: furniture
  
}




 
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
