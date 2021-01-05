<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/HelloWorld">首页</van-tabbar-item>
      <van-tabbar-item to="/door">
        门窗定制
        <template #icon="props">
          <img :src="props.active ? icon.men : icon.door" />
          <!-- <van-icon class-prefix="iconfont icon-chuangtai" /> -->
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/kitchen">
        厨卫定制
        <template #icon="props">
          <img :src="props.active ? icon.kitchenA : icon.kitchen" />
          <!-- <van-icon class-prefix="iconfont icon-chuangtai" /> -->
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/furniture"
        >家具定制
        <template #icon="props">
          <img :src="props.active ? icon.furnitureA : icon.furniture" />
          <!-- <van-icon class-prefix="iconfont icon-chuangtai" /> -->
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  name: "footerbar",
  data() {
    return {
      //  actived:this.active,
      //tarBarList:[],
      icon: {
        door: require("../assets/img/door.png"),
        men: require("../assets/img/men.png"),
        kitchen: require("../assets/img/kitchen.png"),
        kitchenA: require("../assets/img/kitchenA.png"),
        furniture: require("../assets/img/furniture.png"),
        furnitureA: require("../assets/img/furnitureActive.png"),
      },
      // iconfont: {
      //   0: "iconfont icon-chuangtai",
      //   1: "iconfont icon-men",
      //   2: "iconfont icon-chuangtai",
      // },
    };
  },
  mounted() {
  //  console.log(this.$route);
  },
  //计算属性
  computed: {
    active: {
     get: function() {
        switch (this.$route.path) {
          case "/HelloWorld":
            return 0;
            break;
          case "/door":
            return 1;
            break;
          case "/kitchen":
            return 2;
            break;
          case "/furniture":
            return 3;
            break;
          default:
            break;
        }
      },
      set: function () {},
    },
  },
};
</script>
<style lang="less">
.van-tabbar-item--active {
  color: rgb(230, 33, 41);
}
</style>
<style lang="less">
</style>