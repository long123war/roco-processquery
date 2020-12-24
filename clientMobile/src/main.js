//引入适配
import 'amfe-flexible';
import axios from 'axios';
//引入组件
import { Button, Col, Grid, GridItem, Icon, Image as VanImage, Lazyload, List, Popup, PullRefresh, Row, Search, Sticky, Swipe, SwipeItem, Tab, Tabbar, TabbarItem, Tabs } from 'vant';
import Vue from "vue";
import App from "./App.vue";
// 导入字体图标
import './assets/font/iconfont.css';
//reset css
import './assets/reset.css';
import router from "./router";
Vue.use(Button);
Vue.use(Search);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload, {
  lazyComponent: true,
})
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Popup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);
Vue.use(List);
Vue.use(PullRefresh);
Vue.config.productionTip = false;
// 配置请求的跟路径
axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
