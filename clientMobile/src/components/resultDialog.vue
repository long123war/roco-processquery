<template>
  <van-dialog v-model="show" title="下单尺寸">
    <van-cell-group>
      <van-cell
        v-for="(item, index) in resultsData"
        :key="index"
        :title="resultsTitleChange(index)"
        :value="item"
      />
    </van-cell-group>
  </van-dialog>
</template>

<script>
export default {
  mounted() {
    this.$root.eventHub.$on("results", (resultsData) => {
      console.log(resultsData);
      this.resultsData = resultsData;
    });
    this.$root.eventHub.$on("isshow", (isshow) => {
      console.log(isshow);
      this.show = isshow;
    });
  },
  data() {
    return {
      // 控制弹出框显示
      show: false,
      // 接收查询工艺结果
      resultsData: {},
    };
  },
  methods: {
    // 显示转换
    resultsTitleChange(index) {
      switch (index) {
        case "doorframeWvalue":
          return "包框宽";
        case "doorframeHvalue":
          return "包框高";
        case "wayThick":
          return "墙厚";
        default:
          return;
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
