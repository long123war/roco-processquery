<template>
  <div>
    <div class="container">
      
        <div class="header">
      <van-sticky>
          <van-row class="headTitle">
            <van-col class="logo"
              ><img src="../assets/rocoRogo-red.svg"
            /></van-col>
            <van-col class="bread">
              <van-icon @click="popup" name="wap-nav" />
              <!-- <van-popup v-model="show" position="right">肥猪系右边</van-popup> -->
            </van-col>
          </van-row>
         </van-sticky>
          <transition name="van-slide-right">
          <div>
            <router-view></router-view>
            </div>
           </transition> 
        </div>
     
      <div class="content">
       <tab></tab>
       <swiper></swiper>
    
      </div> 

      <div class="footer"></div>
 
    </div>
  </div>
</template>

<script>

import Tab from '../components/tab';
import swiper from './swiper';



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

      
      tabList: [],
      gridList: [],
     
       lineWidth: 62
    };
  },
  components: {Tab,swiper},

  created() {
    this.tarBar();
    
  },
  mounted () {
    
  },
  methods: {
    popup() {
     this.$router.push('/HelloWorld/popup')
    },
        tabChange() {
        const tabText = document.getElementsByClassName('van-tab--active')[0]
      //  console.log(tabText)
       this.lineWidth = tabText.childNodes[0].clientWidth
    },                                                                   
  

    async tarBar() {
      const { data: res } = await this.$http.get("Custom");
     // console.log(res);
      this.tabList = res;
    },
    gitImages(menusName){
      switch (menusName) {
        case "单开门":
          return this.gridImages[0];
        case "双开门":
          return this.gridImages[1];

        default:
          return this.gridImages[3];
      }
    
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
.van-tabs .van-tabs--line {
 margin-top: 0;
}
.van-tabs{
   margin-top: 0;
}

</style>

<style lang="less" scoped>
.headTitle {
  display: flex;
  justify-content: space-between;
  //margin-top: 10px;
  background-color:#fff;
  //box-sizing: border-box;
  //height: 50px;

  .logo {
    padding-left: 20px;
    margin-top: 10px;
  }
  .bread {
    position: relative;
    left: 50px;
    padding: 0;
     margin-top: 10px;
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
// .van-tab{
//   background-color: pink;
// }

</style>
