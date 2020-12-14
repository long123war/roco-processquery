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
            <template slot="title"
              ><span class="title">我的工作台</span></template
            >
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><span class="title">我的工作台</span></template
            >
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
           <template slot="title"
              ><span class="title">我的工作台</span></template
            >
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
          <el-menu  mode="horizontal">
           <el-tabs :tab-position="tabPosition" style="height: 300px;">
                <el-tab-pane label="硬装">                   
                     <h4 class="door">门</h4>        
                   <el-menu-item>
                     <a href="https://www.ele.me" target="_blank">室内门</a>
                     </el-menu-item>
                       <el-menu-item >
                     <a href="https://www.ele.me" target="_blank">大门</a>
                     </el-menu-item>
                      <el-menu-item >
                     <a href="https://www.ele.me" target="_blank">移门</a>
                     </el-menu-item>
                     <el-menu-item><br><div class="line">123</div></el-menu-item>
                     </el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
          </el-menu> 
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
       //随意门方向
       tabPosition:'left'
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
// 取消二级菜单的最小宽度
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 0px;
    
}
//修改随意门的样式
 a:-webkit-any-link {
    color: #666;
    cursor: pointer;
    text-decoration: none;   
   }
   .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
   background-color:transparent;   
}
.el-menu-item{
  float: left;
  padding: 0 5px;
  margin: 0;
  height: 30px;
  line-height: 30px;
  :hover{
    color:rgb(230, 33, 41);
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
.door{
    margin: 10px;
  }
</style>
