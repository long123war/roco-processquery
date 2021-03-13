import Vue from "vue";
import VueRouter from "vue-router";
import rocoCheck from "../components/rocoCheck.vue";
import doorFoot from "../components/doorFoot.vue";
import single from "../components/woodenDoor/single.vue";
import furniture from "../components/Furniture/furniture.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "rocoCheck",
    component: rocoCheck,
    children: [
      { path: "/", name: "doorFoot", component: doorFoot },
      { path: "/single", name: "single", component: single },
      { path: "/doubles", name: "doubles", component: single },
      { path: "/lash", name: "lash", component: single },
      { path: "/sliding", name: "sliding", component: single },
      { path: "/dumbs", name: "dumbs", component: single },
      { path: "/windowt", name: "windowt", component: single },
      { path: "/Wave", name: "Wave", component: single },
      { path: "/glassdoor", name: "glassdoor", component: single },
      { path: "/generalSliding", name: "generalSliding", component: single },
      { path: "/hanging", name: "hanging", component: single },
      { path: "/dumb", name: "dumb", component: single },
      { path: "/luxurious", name: "luxurious", component: single },
      { path: "/pentagon", name: "pentagon", component: furniture },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
