<template>
  <div>
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
          text-color="#666666"
          
          @select="handleSelect"
          menu-trigger="hover"
        >
          <el-submenu index="1">
            <template slot="title"><span class="title">我的工作台</span></template>
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
        <div>
          <el-carousel height="150px" :arrow='arrow'>
            <el-carousel-item v-for="item in imgList" :key="item.url">
              <img src="require(item.url)" >

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
      imgList:[ { url: require("@/assets/img/1.jpg") },
                { url: require("@/assets/img/2.jpg") },
                { url: require("@/assets/img/3.jpg") } 
                    ],
       arrow:'never'           
    };
  },
  created() {},
  methods: {
    // 导航栏触发的函数
    handleSelect() {}
  }
};
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 360px 0 360px;

  .el-menu--horizontal{
  
        >.el-menu-item{
          border-bottom: none !important;
    
           >.is-active {
           border-bottom: none !important;
      }
        }
}
  /* 整体的下划线进行隐藏 */
  .el-menu {
    border-bottom: none;
    :hover {
      border-bottom:none  !important;
      
      color: rgb(230, 33, 41) !important;
    }
      >.el-submenu{

        .title{
          font-size: 20px;
        }
      //   .el-menu-item{
      //     border-bottom-color:#ffffff!important;
      // }
      } 
//        .el-menu--horizontal{
  
//         >.el-menu-item{
//           border-bottom: none !important;
    
//            >.is-active {
//            border-bottom: none !important;
//       }
//         }
// }
    
      // .el-menu-demo{
      //    border-bottom-color:#ffffff!important;
      // }
      //  .el-menu-item{
      //     border-bottom-color:#ffffff!important;
      // }
    }
    
  }



</style>
