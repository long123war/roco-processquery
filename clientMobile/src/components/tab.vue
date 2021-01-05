<template>
  <div>
    <van-tabs @click="tabChange" :line-width="lineWidth" sticky offset-top="20" v-model="nowIndex"> 
      <van-tab
        class="tab"
        v-for="item in tabList"
        :key="item.id"
        :title="item.menusName"
      >
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import VueRouter from 'vue-router';
export default {
  data() {
    return {
      tabList: [],
      // 标签页底部条宽度
      lineWidth: 62,
      //点击标签的索引
      nowIndex:0
      
    };
  },
  created() {
    this.tarBar();
  },
  mounted () {
    this.$nextTick(()=>{
        //初始化，保证页面刷新页面后内容区和导航键一致
        this.initPage();
    });
  // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      this.$root.evenHub.$on('slideTab', this.slideTab);
    //  console.log(this.slideTab)
  },
  methods: {
    initPage(){
      //console.log(this.route.path)
      this.nowIndex = this.$route.path === '/HelloWorld#/single' ? 0 : this.$route.path === '/HelloWorld#/door' ? 1 : this.$route.path === '/HelloWorld#/kitchen' ? 2 : 0;

    },
    async tarBar() {
      const { data: res } = await this.$http.get("Custom");
      console.log(res);
      this.tabList = res;
    },
    tabChange(index) {
      //修改下划线
      const tabText = document.getElementsByClassName("van-tab--active")[0];
     // console.log(tabText);
      this.lineWidth = tabText.childNodes[0].clientWidth;
      //console.log(index)
      //获取当前tab的索引，传给swipe
      this.nowIndex = index;
      this.$root.evenHub.$emit('changeTab',index);
    },
    slideTab(index){
     //console.log(index);
      this.nowIndex = index;
      let router = new VueRouter();
      let href = index === 0 ? 'single' : index === 1 ? 'door': index === 2 ? 'kitchen' :'single';
     // console.log(href)
      //利用路由的push方法更新路径地址
      router.push(href)
    }
  },
};
</script>
<style lang="less">
.van-tabs {
  margin-top: 10px;
}
</style>


<style lang="less" scoped>
</style>