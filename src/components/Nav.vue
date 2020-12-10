<template>
    <div>

       <el-container>
            <el-header>
                    <div class="logo">
                    <a href="./Nav.vue"><img src="../assets/rocoRogo-red.svg" alt="加载失败"></a>
                    </div>

                       <el-menu :default-active="activeIndex"  mode="horizontal" text-color='#666666'   active-text-color="#e62129" @select="handleSelect">                           
                             <el-submenu index="1">
                                <template slot="title">我的工作台</template>
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
            <!-- 页面主体区域 -->
         <el-container>
            <el-main>Main</el-main>

         </el-container>
        </el-container>

    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  created () {

  },
  methods: {
    // 导航栏触发的函数
    handleSelect () {}
  }
}
</script>

<style lang="less" scoped>

   .el-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 260px 0 260px;
        
         
          /* 整体的下划线进行隐藏 */
        .el-menu{
          border-bottom: none;
      

            >.el-submenu{
              .el-submenu__title{
                font-size: 20px;
              }
            }
        }

    }      
     
</style> 