<template>
  <van-dialog v-model="show" title="下单尺寸">
    <van-cell-group>
      <van-cell
        v-for="(item, index) in resultsData"
        :key="index"
        :title="resultsTitleChange(index)"
        :value="item ? item : '不在工艺范围'"
      />
    </van-cell-group>
  </van-dialog>
</template>

<script>
export default {
  mounted() {
    // 接收提交表单请求得到的值。
    // 请求的结果
    this.$root.eventHub.$on("results", (resultsData) => {
      console.log(resultsData);
      this.resultsData = resultsData;
    });
    // 是否显示的控制变量
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
        case "wayD":
          return "墙厚";
        default:
          return;
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
