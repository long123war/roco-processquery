<template>
  <van-dialog
    class="resultDialog"
    v-model="show"
    title="下单尺寸"
    closeOnClickOverlay
  >
    <!-- <van-cell-group>
      <van-cell
        v-for="(item, index) in resultsData"
        :key="index"
        :value="item ? item : '不在工艺范围'"
        clickable
        @click="isImg"
      >
        <template #title>
          <span>{{ resultsTitleChange(index) }}</span>
          <van-icon name="question-o" />
        </template>
      </van-cell>
    </van-cell-group> -->
    <van-collapse v-model="indexName" accordion>
      <van-collapse-item
        v-for="(item, index) in resultsData"
        :key="index"
        :name="index"
        :title="resultsTitleChange(index)"
        :value="item ? item : '不在工艺范围'"
      >
        <div>
          <van-image
            v-for="(item2, index2) in getResultImg(index)"
            :key="index2"
            :src="defaultPath + item2"
            radius="7px"
            @click="viewImg(defaultPath + item2)"
          />
        </div>
      </van-collapse-item>
    </van-collapse>
  </van-dialog>
</template>

<script>
import { ImagePreview } from "vant";
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
    // 接受图解图片
    this.$root.eventHub.$on("imgArrayObj", (imgArrayObj) => {
      // console.log(imgArrayObj);
      this.imgArrayObj = imgArrayObj;
    });
  },
  data() {
    return {
      // 默认请求地址
      defaultPath: "http://localhost:8080/",
      // 保存请求的图片
      imgArrayObj: {},
      // 控制弹出框显示
      show: false,
      // 接收查询工艺结果
      resultsData: {},
      indexName: "1",
    };
  },
  methods: {
    // 相应数据显示转换
    resultsTitleChange(index) {
      switch (index) {
        case "doorframeWvalue":
          return "包框宽";
        case "doorframeHvalue":
          return "包框高";
        case "wayD":
          return "墙厚";
        case "buildWayOpenW":
          return "开启面横套线盖墙宽";
        case "buildWayOpenH":
          return "开启面竖套线盖墙宽";
        case "buildWayNotOpenW":
          return "非开启面横套线盖墙宽";
        case "buildWayNotOpenH":
          return "非开启面竖套线盖墙宽";
        default:
          return;
      }
    },
    getResultImg(key) {
      // console.log(this.imgArrayObj[key]);
      return this.imgArrayObj[key];
    },
    // // 点击触发
    viewImg(imgPath) {
      // console.log(imgPath);
      const imgViewArr = new Array(imgPath);
      // console.log(imgViewArr);

      ImagePreview({ images: imgViewArr, closeable: true });
    },
  },
  computed: {},
};
</script>

<style lang="less">
.resultDialog {
  .van-cell__title {
    display: flex;
    align-items: center;
    flex: 2;
  }
}
</style>
