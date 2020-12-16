
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
// 导入字体图标
import './assets/font/iconfont.css'
// 引入全局Css
import './assets/global.css'
// 引入elementUI
import './plugins/element.js'
import router from './router/index.js'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
