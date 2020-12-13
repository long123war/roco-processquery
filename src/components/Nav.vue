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
        >
          <el-submenu index="1">
            <template slot="title"
              ><span class="title">我的工作台</span></template
            >
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">我的工作台</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main>
        <div class="banner">
          <el-carousel height="250px" :arrow="arrow" :autoplay="false">
            <el-carousel-item v-for="item in imgList" :key="item.url">
              <img :src="item.url" width="100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
      <!-- 页面主体区域 -->
      <el-container class="HolyGrail-body">
        <el-main class="HolyGrail-content">
          main
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
      arrow: "never"
    };
  },
  created() {},
  methods: {
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
      border-bottom: none !important;

      color: rgb(230, 33, 41) !important;
    }
     .el-submenu {
      .el-menu-item {
        :hover {
          color: rgb(230, 33, 41) !important;
          background-color: pink !important;
        }
      }
      .title {
        font-size: 20px;
        color: #666666;
      }
    }
  }
}
.el-main{
 padding: 0;
}
</style>
