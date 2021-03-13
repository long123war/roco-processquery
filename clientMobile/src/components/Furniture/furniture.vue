<template>
  <div class="furniture">
    <div>敬请期待</div>
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
  },
  mounted() {},
  data() {
    return {
      defaultPath: "http://localhost:8080/",
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
<style lang="less"></style>
