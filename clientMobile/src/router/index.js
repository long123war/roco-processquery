import Vue from "vue";
import VueRouter from "vue-router";
import rocoCheck from "../components/rocoCheck.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "rocoCheck",
    component: rocoCheck,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
