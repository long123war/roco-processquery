<template>
    <div>
       

      
          <van-tabbar v-model="active">
              <van-tabbar-item name="home" icon="wap-home" to='/'>首页</van-tabbar-item>
             <van-tabbar-item name="door" replace to="/door"> 门窗定制
                   <template #icon="icon">
                  <!-- <img :src="props.active ? icon.men : icon.door" />  -->
                   <van-icon class-prefix="iconfont icon-chuangtai" />
                  </template>
                </van-tabbar-item>
              <van-tabbar-item name="kitchen" replace to="/kitchen"> 厨卫定制 
                  <template #icon="icon">
                  <!-- <img :src="props.active ? icon.men : icon.door" />  -->
                   <van-icon class-prefix="iconfont icon-chuangtai" />
                  </template>
              </van-tabbar-item>
              <van-tabbar-item name="furniture" replace to="/furniture">家具定制
                  <template #icon="icon">
                  <!-- <img :src="props.active ? icon.men : icon.door" />  -->
                   <van-icon class-prefix="iconfont icon-chuangtai" />
                  </template>
                  </van-tabbar-item>              
            </van-tabbar>
            
    </div>
</template>


<script>
export default {
    name:'footerbar',
    data () {
        return {
            active:'home',
         //   tarBarList:[],
        // icon:{door:require('../assets/img/door.png'),
        // men:require('../assets/img/men.png'),
        // kitchen:require('../assets/img/kitchen.png'),
        // kitchenA:require('../assets/img/kitchenA.png'),
        // furniture:require('../assets/img/furniture.png'),
        // furnitureA:require('../assets/img/furnitureActive.png')
        // }
         // iconfont: {
      //   0: "iconfont icon-chuangtai",
      //   1: "iconfont icon-men",
      //   2: "iconfont icon-chuangtai",
      // },
        }
    }
}
</script>
<style lang="less">
.van-tabbar-item--active{
  color: rgb(230, 33, 41);
}
</style>
<style lang="less">


</style>