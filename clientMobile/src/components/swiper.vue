<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <!-- 能在组件切换过程中将状态保留在内存中，防止重复渲染DOM -->
          <keep-alive>
            <!-- :is='模板文件' 动态加载不同模板文件 -->
            <component :is="item.component"> </component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import single from "./single";
import door from "./door";
import kitchen from "./kitchen";
import Swiper from "../assets/swiper/swiper-bundle.min.js";
import "../assets/swiper/swiper-bundle.min.css";
export default {
  data() {
    return {
      list: [
        { path: "/single", component: single },
        { path: "/door", component: door },
        { path: "/kitchen", component: kitchen },
      ],
      // slideTab:'activeIndex'
    };
  },
  components: {
    single,
    door,
    kitchen,
  },
  mounted() {
    const mySwiper = new Swiper(".swiper-container", {
      //设定初始化时slide的索引,此时已引入swiper插件，
      //我们需要让链接路径与slide的内容区的模板文件保持同步，这里通过路由获取链接地址控制swiper的初始slide索引initialSlide即可实现
      initialSlide:
        this.$route.path === "/single"
          ? 0
          : this.$route.path === "/door"
          ? 1
          : this.$route.path === "/kitchen"
          ? 2
          : 0,
    });
    //左右滑动内容区时利用swiper插件的on方法监控slideChange属性,当滑动slide后将当前activeIndex传给tab组件
    mySwiper.on("slideChange", () => {
      // 监控滑动后当前页面的索引，将索引发射到导航组件
      // 左右滑动时将当前slide的索引发送到nav组件
     // console.log(mySwiper.activeIndex)
      this.$root.evenHub.$emit("slideTab", mySwiper.activeIndex);
    
      
    });
    // console.log(mySwiper)
    //接收tab组件传过来的索引值，跳转到响应内容区
    this.$root.evenHub.$on("changeTab", (index) => {
      //控制Swiper切换到指定slide,index指定将要切换到的slide的索引
      mySwiper.slideTo(index, 0, false);
    });
  },
};
</script>


<style lang="less" scoped>
</style>