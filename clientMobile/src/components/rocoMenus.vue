<template>
  <!-- 菜单列表组件 -->
  <div class="roco-menus">
    <van-cell
      center
      clickable
      v-for="i in menusList"
      :key="i.id"
      :title="i.menusName"
      label="劳卡定制模块"
      icon="new-o"
      :to="i.path"
      @click="clickCell(i.path)"
    />
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  methods: {},
  props: ["menusList"],
};
</script>

<style lang="less">
.roco-menus {
  .van-cell__left-icon,
  .van-cell__right-icon {
    font-size: 40px;
    margin-right: 10px;
    margin-top: 9px;
    color: #d6d6d6;
  }
}
</style>
