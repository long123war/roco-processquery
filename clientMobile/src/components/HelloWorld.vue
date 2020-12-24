<template>
  <div>
    <div class="container">
     <van-sticky> 
      <div class="header">
        <van-row class="headTitle">
          <van-col class="logo"
            ><img src="../assets/rocoRogo-red.svg"
          /></van-col>
          <van-col class="bread">
            <van-icon @click="popup" name="wap-nav" />
            <van-popup v-model="show" position="right">肥猪系右边</van-popup>
          </van-col>
        </van-row>
        <van-tabs @click="tabChange">
          <van-tab class="tab" v-for="item in tabList"  :key="item.id" :title="item.menusName">
            
          </van-tab>
        </van-tabs>
      </div>
    </van-sticky>
      <div class="content">
       <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        > 
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="swipe-img" v-lazy="image" />
          </van-swipe-item>
        </van-swipe>

        <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index" >
            <van-image round class="imgFeizhu" :src="item" />
            <span v-for="(item, index1) in gridList"
            :key="index1" class="feizhu">{{item.menusName}}</span>
          </van-grid-item>
        </van-grid>
        
        <!-- <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index">
            <van-image round class="imgFeizhu" :src="item" />
            <span class="feizhu">肥猪</span>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index">
            <van-image round class="imgFeizhu" :src="item" />
            <span class="feizhu">肥猪</span>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index">
            <van-image round class="imgFeizhu" :src="item" />
            <span class="feizhu">肥猪</span>
          </van-grid-item>
        </van-grid> -->
          </van-list>
        </van-pull-refresh>
      </div>
      
      <div class="footer"></div>
       <footerbar></footerbar>
        <!-- <van-tabbar v-model="active">
          <van-tabbar-item name="home" icon="wap-home" to='/'>首页</van-tabbar-item> -->
          <!-- <van-tabbar-item
            name="home"
            replace
            to="/door"
            v-for="item in tarBarList"
            :key="item.id"
            
          >
            {{ item.menusName }}
            <span>门窗定制</span> 
            <template #icon="icon">
             <img :src="props.active ? icon.men : icon.door" /> -->
              <!-- <i :class="iconfont[item.id]"></i>
            </template>
          </van-tabbar-item> -->
          <!-- <van-tabbar-item name="kitchen" replace to="/kitchen">
                 <span>厨卫定制</span> 
                   <template #icon="props">
                    <img :src="props.active ? icon.kitchenA : icon.kitchen" />
                  </template>
              </van-tabbar-item>
              <van-tabbar-item name="furniture" replace to="/furniture">
                 <span>家具定制</span> 
                   <template #icon="props">
                    <img :src="props.active ? icon.furnitureA : icon.furniture" />
                  </template>
                  </van-tabbar-item>               -->
        <!-- </van-tabbar> -->
      
    </div>
  </div>
</template>

<script>
import footerbar from "../components/footerbar";

export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      images: [
        require("../assets/img/1.jpg"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpg"),
      ],
      gridImages: [
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
      ],
      show: false,

      active: "home",

      // iconfont: {
      //   0: "iconfont icon-chuangtai",
      //   1: "iconfont icon-men",
      //   2: "iconfont icon-chuangtai",
      // },
        // icon:{door:require('../assets/img/door.png'),
        // men:require('../assets/img/men.png'),
        // kitchen:require('../assets/img/kitchen.png'),
        // kitchenA:require('../assets/img/kitchenA.png'),
        // furniture:require('../assets/img/furniture.png'),
        // furnitureA:require('../assets/img/furnitureActive.png')
        // },
      tabList: [],
      gridList:[],
      loading: false,
        finished: false,
      refreshing: false,
    };
  },
  components: { footerbar },

  created() {
   this.tarBar();
  },
  methods: {
    popup() {
      this.show = true;
    },
    tabChange(){
      const tabText = document.getElementsByClassName('van-tab__text')
      //const tabLine = document.getElementsByClassName('van-tabs__line')
     // console.log(tabText)
    //  van-tabs__line.style.width == tabText[0].offsetWidth + 'px'
    },
    onRefresh(){
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },

     async onLoad(){
        const { data: res } = await this.$http.get("Custom");
          //console.log(res);
          let getNew = res
          this.loading = false;  //本次请求成功后就停止加载，关闭加载图表出现

         if (this.refreshing) {
          this.list = [];  //数据请求完后先清空列表
          this.refreshing = false;  //停止刷新，目的是关闭刷新图标出现
        }
         if(getNew == null || getNew.length == 0) {
          this.finished = true;  //如果请求回来的数据为空，则代表所有数据已加载完毕，此时页面可出现“没有更多数据了”
          return;
        }

        this.gridList = this.gridList.concat(getNew) //每次请求回来的数据都与原来的数据进行合并  加载=》合并  刷新=》 清空后合并 
    },
    async tarBar() {
      const { data: res } = await this.$http.get("Custom");
      console.log(res);
      this.tabList = res;
    },
  },
};
</script>
<style lang="less">
.van-swipe__indicator--active {
  background: red;
}
.van-grid {
  position: relative;
  top: -5px;
  //background: rgb(230, 33, 41);
  margin: 0;
}

.van-grid-item .van-grid-item__content {
  background: transparent;
}
// .van-tabbar-item--active{
//   color: rgb(230, 33, 41);
// }
.van-tabs{
  margin-top:10px;
}
// .van-tabs__line{
//    ;
// }
</style>

<style lang="less" scoped>
.headTitle {
  position: relative;
  top: 10px;
  display: flex;
  justify-content: space-between;
  //margin-top: 10px;
   background-color: #fff;
  .logo {
    padding-left: 20px;
  }
  .bread {
    position: relative;
    left: 50px;
    padding: 0;
  }
}
.swipe-img {
  width: 100%;
  height: 200px;
  margin-top: 10px;
}

.feizhu {
  font-size: 14px;
  margin-top: 3px;
}
.imgFeizhu {
  width: 60px;
  height: 60px;
}
.van-popup {
  height: 100%;
  background: rgb(230, 33, 41);
}
.header{
  background-color: #fff;
}
</style>


