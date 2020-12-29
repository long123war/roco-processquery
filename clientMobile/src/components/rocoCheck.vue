<template>
  <div class="roco">
    <!-- 劳卡ROGO -->
    <img class="logo" src="../assets/rocoRogo-red.svg" alt="劳卡全屋定制" />
    <div>
      <!-- 标签Tab -->
      <van-tabs
        v-model="active"
        swipeable
        animated
        title-inactive-color="#45454570"
        title-active-color="red"
        @change="changeTab"
        @click="clickTab"
        line-width="33%"
      >
        <van-tab
          :title="item.menusName"
          v-for="item in rocoMenus"
          :key="item.id"
          :name="item.menusName"
        >
          <div v-if="item.isMenusBlock">
            <van-cell
              v-for="i in item.children"
              :key="i.id"
              center
              :title="i.menusName"
              label="劳卡定制模块"
            />
          </div>
        </van-tab>
      </van-tabs>
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
      // tab的下划线宽度
      lineWidth: 100,
      // 劳卡定制模块菜单对象
      rocoMenus: [],
      // 控制菜单下拉隐藏
      isMenusBlock: false,
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
          for (const i of res.data) {
            i.isMenusBlock = false;
          }
          this.rocoMenus = res.data;
          console.log(this.rocoMenus);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeTab() {
      if (this.isMenusBlock) {
        this.isMenusBlock;
      } else {
        this.isMenusBlock = !this.isMenusBlock;
      }
      // this.isMenusBlock = !this.isMenusBlock;
    },
    clickTab() {
      for (const i of this.rocoMenus) {
        if ((i.menusName = this.active)) {
          // console.log(this.active);
          // console.log(i.id);
          i.isMenusBlock = !i.isMenusBlock;
        }
      }
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
}
</style>
