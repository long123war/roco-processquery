import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../components/Nav.vue'
import practice from '../components/practice.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Nav' },
  { path: '/Nav', component: Nav, redirect: '/practice',
  children:[{ path: '/practice', component: practice } ]}
]

const router = new VueRouter({
  routes
})

export default router
