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
        icon="shuangkaimen"
        @click="clickCell(i.menusName)"
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
    clickCell(menusName) {
      this.$emit("event-path", menusName);
    },
  },
  props: ["menusList"],
};
</script>

<style lang="less">
.roco-menus {
  .van-cell {
    i {
      font-style: normal;
    }
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
