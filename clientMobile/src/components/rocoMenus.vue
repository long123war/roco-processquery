<template>
  <!-- 菜单列表组件 -->
  <div class="roco-menus">
    <van-list>
      <van-cell
        center
        clickable
        v-for="i in menusList"
        :key="i.id"
        :title="i.menusName"
        label="劳卡定制模块"
        :to="i.path"
        class="iconfont"
        icon-prefix="icon"
        :icon="getIcon(i.menusName)"
        @click="clickCell(i.menusName, i.path)"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  methods: {
    // 点击菜单触发的回调
    clickCell(menusName, path) {
      // 穿给兄弟组件——主内容组件。用于请求显示什么内容
      this.$root.eventHub.$emit("event-path", path);
      // 发送给父组件，控制菜单隐藏显示，并且查询栏也需要使用
      this.$emit("event-pathname", menusName);
    },
    // 获得菜单对应的图标
    getIcon(name) {
      switch (name) {
        case "单开门":
          return "dankaimen";
        case "子母门":
          return "zimumen";
        case "双开门":
          return "shuangkaimen";
        case "内置双推拉门":
          return "tuilamen";
        case "哑口套，三边窗套01，方形飘窗":
          return "chuang";
        case "四边窗套":
          return "chuang";
        case "L型飘窗":
          return "piaochuang";
        case "通用玻璃门02":
          return "boli";
        case "通用推拉门02":
          return "tuilamen";
        case "通用吊趟门01":
          return "tuilamen1";
        case "哑口套02，窗套02":
          return "chuang";
        case "五角柜掩门":
          return "Anglexiejiao";
        case "轻奢主义":
          return "dankaimen";

        default:
          return "circle";
          break;
      }
    },
  },
  computed: {},
  props: ["menusList"],
};
</script>

<style lang="less">
.roco-menus {
  .van-cell {
    .van-cell__left-icon {
      font-style: normal;
    }
  }
  .van-cell__left-icon {
    font-size: 40px;
    margin-right: 10px;
    color: #d6d6d6;
  }
}
</style>
