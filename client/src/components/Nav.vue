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
      <el-main>
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"
              >定制工艺查询</el-breadcrumb-item
            >
            <el-breadcrumb-item>{{ crumbOne }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ crumbTwo }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="maxWitdh">
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
    console.log(window.location.hash);
  },
  mounted() {
    this.listenPage();
  },
  methods: {
    //获取导航栏数据
    async getNavlist() {
      const { data: res } = await this.$http.get("Custom");
      // console.log(res)
      this.navList = res;
      console.log(this.navList);
    },

    // 导航栏触发的函数
    handleSelect(index) {
      console.log(index.slice(1));
      for (let item of this.navList) {
        for (let i of item.children) {
          if (index.slice(1) === i.path) {
            this.crumbTwo = i.menusName;
            this.crumbOne = item.menusName;
          }
        }
      }
    },
    listenPage() {
      window.onbeforeunload = function(e) {
        e = e || window.event;
        if (e) {
          console.log(222);
        }
      };
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
}
</style>
<style lang="less" scoped>
.maxWitdh {
  padding: 0 300px 0 300px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px 0 300px;
  background-color: #f4f4f4;
  .el-menu {
    background-color: #f4f4f4;
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
      color: red;
    }
  }
}
</style>
