<template>
  <div class="single">
    <van-image
      v-for="(item, index) in imgArray"
      :key="index"
      width="100%"
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
      // this.getContent();
    });
  },
  mounted() {},
  data() {
    return {
      defaultPath: "http://localhost:8080/",
      // 用户选择菜单的地址
      path: "",
      // 保存请求的图片
      imgArray: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
    };
  },
  methods: {
    // getContent() {
    //   this.$http
    //     .get("/img/")
    //     .then((res) => {
    //       console.log(res);
    //       if (res.status !== 200) {
    //         return;
    //       }
    //       this.imgArray.push(res.request.responseURL);
    //       console.log(this.imgArray);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // },
  },
  props: ["value"],
};
</script>
<style lang="less"></style>
