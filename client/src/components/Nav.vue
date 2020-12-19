<template>
  <div class="nav">
    <el-container class="HolyGrail">
      <el-header>
        <div class="logo">
          <a href="./Nav.vue"
            ><img src="../assets/rocoRogo-red.svg" alt="加载失败"
          /></a>
        </div>

        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          menu-trigger="hover"
          router
        >
          <el-submenu :index="item.id +''" :key='item.id' v-for="item in navList">
            <template slot="title"
              ><span class="title">{{item.menusName}}</span></template
            >
            <el-menu-item :index="'/'+ subitem.path" :key='subitem.id' v-for="subitem in item.children">{{subitem.menusName}}</el-menu-item>
           
          </el-submenu>

        </el-menu>
      </el-header>
      <el-main>
        <div class="banner">
          <el-carousel height="250px" :arrow="arrow" autoplay>
            <el-carousel-item v-for="item in imgList" :key="item.url">
              <img :src="item.url" width="100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
      <!-- 页面主体区域 -->
      <el-container class="HolyGrail-body">
        <el-main class="HolyGrail-content">
          <router-view></router-view>
        </el-main>
        <nav class="HolyGrail-nav"></nav>
        <aside class="HolyGrail-ads"></aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      imgList: [
        { url: require("../assets/img/1.jpg") },
        { url: require("../assets/img/2.jpg") },
        { url: require("../assets/img/3.jpg") }
      ],
      arrow: "never",

      //导航栏数据
      navList:[]
      
    };
  },
  created() {
     this.getNavlist()
  },
  methods: {

      //获取导航栏数据
     async getNavlist(){
       const {data:res} = await this.$http.get('Custom')
      // console.log(res)
      this.navList = res
      console.log(this.navList)
      },


    // 导航栏触发的函数
    handleSelect() {}
  }
};
</script>
<style lang="less">
.nav {
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: none;
  }
  .el-submenu.is-active .el-submenu__title {
    border-bottom-color: none;
  }
  // 修改轮播图的小圆点
  .el-carousel__button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  
}
// 取消二级菜单的最小宽度
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 0px;
    
}

  
  

</style>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 360px 0 360px;

 
  /* 整体的下划线进行隐藏 */
  .el-menu {
    border-bottom: none;
    :hover {

      color: rgb(230, 33, 41) !important;
    }
     .el-submenu {
      
      .title {
        font-size: 20px;
        color: #666666;
      }
    }
  }
}
//修改二级菜单的样式
.el-menu--horizontal .el-menu .el-menu-item:hover {
    color: rgb(230, 33, 41);
    
}
.el-menu--horizontal .el-menu .el-menu-item{
  font-size: 16px;
}
//取消轮播图两边的padding
.el-main{
 padding: 0;
}

</style>
