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
          <el-submenu
            :index="item.id + ''"
            :key="item.id"
            v-for="item in navList"
          >
            <template slot="title">
              <span class="title">{{ item.menusName }}</span>
            </template>
            <el-menu-item
              :index="'/' + subitem.path"
              :key="subitem.id"
              v-for="subitem in item.children"
              ><span class="sTitle">
                <i :class="'icon ' + 'el-icon-eleme'"></i>
                <span>{{ subitem.menusName }}</span>
              </span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main class="maxWitdh">
        <!-- 面包屑导航 -->
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"
              >定制工艺查询</el-breadcrumb-item
            >
            <el-breadcrumb-item v-if="crumbOne === '' ? true : false"
              >请选择您需要查询的产品</el-breadcrumb-item
            >
            <el-breadcrumb-item v-if="crumbOne !== '' ? true : false">{{
              crumbOne
            }}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="crumbTwo !== '' ? true : false">{{
              crumbTwo
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div>
          <router-view></router-view>
        </div>
      </el-main>
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
      navList: [],
      // 面包屑导航的一级菜单名
      crumbOne: "",
      // 面包屑导航的二级菜单名
      crumbTwo: ""
    };
  },
  created() {
    this.getNavlist();
  },
  mounted() {},
  methods: {
    //获取导航栏数据
    async getNavlist() {
      const { data: res } = await this.$http.get("Custom");
      // console.log(res)
      this.navList = res;
      console.log(this.navList);
      // 编程式导航，把页面重置
      if (window.location.hash.slice(2) === "Nav") {
        return;
      } else {
        this.$router.push("/");
      }
    },

    // 导航栏触发的函数
    handleSelect(index) {
      // 遍历导航数组一级菜单
      for (let item of this.navList) {
        // 遍历导航栏二级菜单
        for (let i of item.children) {
          // 判断用户点击的是哪个耳机菜单，把二级和一级菜单的名称保存
          if (index.slice(1) === i.path) {
            this.crumbTwo = i.menusName;
            this.crumbOne = item.menusName;
          }
        }
      }
    }
  }
};
</script>
<style lang="less">
.nav {
  .el-submenu__title {
    font-size: 16px;
    color: #303133;
    padding: 0 25px;
  }
  .el-submenu.is-active .el-submenu__title {
    border-bottom-color: #e62129;
  }
}
.HolyGrail {
  height: 100%;
}
</style>
<style lang="less" scoped>
.maxWitdh {
  padding: 0 360px 0 360px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 360px 0 360px;
  background-color: #fff;
  border-bottom: 1px solid #f4f5f5;
  .el-menu {
    background-color: #fff;
    .is-opened {
      background-color: #fff;
    }
    .el-submenu {
      .title {
        color: #666;
      }
    }
  }
}
.el-main {
  .el-breadcrumb {
    margin: 10px 0;
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item {
  .sTitle {
    .icon {
      padding-right: 5px;
    }
  }
}
.el-menu-item:hover {
  .sTitle {
    .icon {
      font-size: 18px;
      color: #e62129;
    }
  }
}
</style>
