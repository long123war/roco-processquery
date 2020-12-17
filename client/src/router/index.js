import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../components/Nav.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Nav' },
  { path: '/Nav', component: Nav }
]

const router = new VueRouter({
  routes
})

export default router
