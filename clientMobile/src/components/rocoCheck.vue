<template>
  <div class="roco">
    <!-- 劳卡ROGO -->
    <img class="logo" src="../assets/rocoRogo-red.svg" alt="劳卡全屋定制" />
    <!-- 标签Tab -->
    <div>
      <van-tabs
        v-model="active"
        swipeable
        animated
        title-inactive-color="#4C4C4C"
        title-active-color="#E62129"
        @click="clickTab"
        :line-width="tabWidth"
      >
        <van-tab
          :title="item.menusName"
          v-for="item in rocoMenus"
          :key="item.id"
          :name="item.id"
        >
          <transition name="van-slide-down">
            <div v-if="isMenusBlock" class="tabList">
              <van-cell
                center
                clickable
                v-for="i in item.children"
                :key="i.id"
                :title="i.menusName"
                label="劳卡定制模块"
                icon="new-o"
                :to="i.path"
                @click="clickCell"
              />
            </div>
          </transition>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 主内容 -->
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getMenus();
  },
  mounted() {},
  data() {
    return {
      // 标签页激活的索引
      active: 0,
      // 标签页前一次索引
      actived: 0,
      // tab的下划线宽度
      lineWidth: 100,
      // 劳卡定制模块菜单对象
      rocoMenus: [],
      // 控制菜单下拉隐藏
      isMenusBlock: false,
      // 标签页下划线宽度
      tabWidth: "33%",
    };
  },
  methods: {
    getMenus() {
      this.$http
        .get("Custom")
        .then((res) => {
          // console.log(res);
          if (res.status !== 200) {
            return;
          }
          this.rocoMenus = res.data;
          console.log(this.rocoMenus);
        })
        .catch((err) => {
          console.error(err);
        });
      // 编程时导航，刷新后转跳回主页
      if (window.location.pathname === "/") {
        return;
      } else {
        this.$router.push("/");
      }
    },
    clickTab() {
      // console.log("actived:" + this.actived);
      // console.log("active:" + this.active);
      // 如果点击的标签页是自己。把下拉菜单隐藏取反。
      if (this.active === this.actived) {
        this.isMenusBlock = !this.isMenusBlock;
      } else {
        // 如果标签页发生切换，把切换的状态保存下来。
        this.actived = this.active;
        // 切换时如果下拉栏不显示，取反
        if (!this.isMenusBlock) {
          this.isMenusBlock = !this.isMenusBlock;
        }
      }
      console.log(this.tabWidth);
    },
    clickCell() {
      this.isMenusBlock = false;
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.roco {
  .logo {
    margin: 8px 0 8px 0;
    width: 200px;
  }
  .van-tabs {
    margin: 0 5px;
    height: 46px;
    box-shadow: 3px 3px 10px 3px #00000024;
    border-radius: 7px;
    font-size: 24px;
  }
  .van-cell__left-icon,
  .van-cell__right-icon {
    font-size: 40px;
    margin-right: 10px;
    margin-top: 9px;
    color: #d6d6d6;
  }
}
</style>
<style lang="less">
.roco {
  .van-tabs--line .van-tabs__wrap {
    border-radius: 7px;
    height: 46px;
  }
  .van-tab {
    font-size: 16px;
  }
  .tabList {
    margin-top: 5px;
    .van-cell {
      box-shadow: inset 0px 0px 1px 0px #000;
      color: #4c4c4c;
      text-align: left;
    }
    .van-cell:first-child {
      border-radius: 7px 7px 0 0;
    }
    .van-cell:last-child {
      border-radius: 0 0 7px 7px;
    }
  }
}
</style>
