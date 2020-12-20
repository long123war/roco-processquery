import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "../components/Nav.vue";
import single from "../components/woodenDoor/single.vue";
import welcome from "../components/welcome.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/Nav" },
  {
    path: "/Nav",
    component: Nav,
    //redirect: "/welcome",
    children: [
      { path: "/welcome", component: welcome },
      { path: "/single", component: single }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
