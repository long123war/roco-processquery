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
          v-for="item in rocoMenus"
          :key="item.id"
          :title="item.menusName"
          :name="item.id"
        >
          <transition name="van-slide-down">
            <!-- @event-path接受子组件传递的值 -->
            <menus-cell
              @event-path="clickCell"
              v-if="isMenusBlock"
              class="tabList"
              :menusList="item.children"
            >
            </menus-cell>
          </transition>
        </van-tab>
      </van-tabs>
      <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in rocoMenus" :key="item.id">
            <transition name="van-slide-down">
              <menus-cell
                v-if="true"
                class="tabList"
                :menusList="item.children"
              >
              </menus-cell>
            </transition>
          </div>
        </div>
      </div> -->
    </div>
    <!-- 主内容 -->
    <div>
      <main-content :value="test"></main-content>
    </div>
    <!-- 底栏 -->
    <component :is="footId" :select="selectName"></component>
    <!-- 结果弹出框 -->
    <result-dialog></result-dialog>
  </div>
</template>

<script>
import mainContent from "./woodenDoor/single";
import menusCell from "./rocoMenus";
import Swiper from "swiper";
import "../assets/swiper-bundle.min.css";
import doorFoot from "./doorFoot.vue";
import furnitureFoot from "./furnitureFoot.vue";
import kitchenFoot from "./kitchenFoot.vue";
import resultDialog from "./resultDialog.vue";

export default {
  components: {
    "main-content": mainContent,
    "menus-cell": menusCell,
    "result-dialog": resultDialog,
    doorFoot: {
      template: "<doorFoot></doorFoot>",
    },
    furnitureFoot: {
      template: "<furnitureFoot></furnitureFoot>",
    },
    kitchenFoot: {
      template: "<kitchenFoot></kitchenFoot>",
    },
  },
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
      test: "这里是主内容",
      // 选择的定制模块
      selectName: "",
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
      console.log("active:" + this.active);
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
      // console.log(this.mySwiper.slideTo);
      // this.$root.eventHub.$emit("changeTab", index);
      // this.mySwiper.slideTo(this.active, 1000, false);
    },
    clickCell(menusName) {
      this.isMenusBlock = false;
      this.selectName = menusName;
      // console.log(this.selectName);
    },
  },
  computed: {
    // 底部查询动态组件
    footId() {
      switch (this.active) {
        case "0":
          return doorFoot;
        case "1":
          return furnitureFoot;
        case "2":
          return kitchenFoot;
        default:
          return;
      }
    },
  },
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
  .tabList {
    margin-top: 5px;
    // 固定高度，超出出现滚动条
    max-height: 500px;
    overflow-y: scroll;
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
  // 隐藏滚动条
  .tabList::-webkit-scrollbar {
    display: none;
  }
  // 菜单栏滑动区
  .swiper-container {
    width: 100%;
    margin: 0;
  }
}
</style>
