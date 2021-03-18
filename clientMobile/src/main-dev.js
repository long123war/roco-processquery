// 开发入口
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/vant";
import "../src/assets/global.css";
import "../src/assets/icon/iconfont.css";
import "amfe-flexible";
import axios from "axios";

// 配置默认请求路径
axios.defaults.baseURL = "http://localhost:8080/";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  data: {
    eventHub: new Vue(),
  },
}).$mount("#app");
