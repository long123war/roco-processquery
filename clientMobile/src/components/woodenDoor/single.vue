<template>
  <div class="single">
    <van-image
      v-for="(item, index) in imgArray"
      :key="index"
      :src="defaultPath + item"
      radius="7px"
    />
  </div>
</template>

<script>
export default {
  created() {
    // 接收rocoMenus的菜单地址
    this.$root.eventHub.$on("event-path", (path) => {
      this.path = path;
      this.getContent(this.path);
    });
    // 拿入口文件定义的默认地址
    this.defaultPath = this.$root.defaultPath;
  },
  mounted() {},
  data() {
    return {
      defaultPath: "https://kjlaccount.roco.cn/",
      // 用户选择菜单的地址
      path: "",
      // 保存请求的图片
      imgArray: [],
    };
  },
  methods: {
    getContent(path) {
      this.$http
        .get("/img/woodenDoor", { params: { img: this.path } })
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            return;
          }
          this.imgArray = res.data;
          console.log(this.imgArray);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  props: ["value"],
};
</script>
<style lang="less">
.single {
  .van-image {
    box-sizing: border-box;
    margin: 0 10px 8px 10px;
    box-shadow: 3px 3px 10px 3px #bfbfbf;
    border: 1px solid #454545;
  }
}
</style>
