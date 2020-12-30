import Vue from "vue";
import VueRouter from "vue-router";
import rocoCheck from "../components/rocoCheck.vue";
import foot from "../components/foot.vue";
import single from "../components/woodenDoor/single.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "rocoCheck",
    component: rocoCheck,
    children: [
      { path: "/single", name: "single", component: single },
      { path: "/", name: "foot", component: foot },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
