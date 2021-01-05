<template>
    <div>
       

         <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index">
            <van-image round class="imgFeizhu" :src="item" />
            <span class="feizhu">肥8===D</span>
          </van-grid-item>
        </van-grid> 
         <!-- 引入tab -->
          <!-- <div>
            <tab></tab>
          </div> -->
        <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index">
            <van-image round class="imgFeizhu" :src="item" />
            <span class="feizhu">肥8===D</span>
          </van-grid-item>
        </van-grid>
         
       
        <van-grid :border="false" :gutter="10">
          <van-grid-item v-for="(item, index) in gridImages" :key="index">
            <van-image round class="imgFeizhu" :src="item" />
            <span class="feizhu">肥8===D</span>
          </van-grid-item>
        </van-grid>
    </div>
</template>


<script>


export default {
    data () {
        return {
             gridImages: [
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
        require("../assets/img/pig.jpg"),
       
      ]
        }
    },
  
}
</script>
<style lang="less">
.feizhu{
    font-size: 14px;
}

</style>