<template>
  <div>
    <div class="container">
      <div class="Nav-left">
        <ul class="nav-list">
          <li
            :key="i"
            v-for="(item, i) in liName"
            class="nav-item"
            @mouseover="liHover"
            @mouseout="liOut"
          >
            <a href="/Nav">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="banner">
        <el-carousel height="355px" autoplay>
          <el-carousel-item v-for="item in imgList" :key="item.url">
            <img :src="item.url" width="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div
        v-show="isblock"
        class="Nav-right"
        @mouseover="liHover"
        @mouseout="liOut"
      >
        <h4>劳卡推荐</h4>
        <el-row> </el-row>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      imgList: [
        { url: require("../assets/img/1.jpg") },
        { url: require("../assets/img/2.jpg") },
        { url: require("../assets/img/3.jpg") },
      ],
      // 动态控制Nav-right的隐藏和显示
      isblock: false,

      liName: ["门窗定制", "家具定制", "厨卫定制"],
    };
  },
  methods: {
    liHover() {
      this.isblock = true;
      // const cateList = document.getElementById('cateList')
      // const List = document.getElementsByClassName("Nav-right");
      // List[0].style.display = "block";
    },
    liOut() {
      this.isblock = false;
    },
  },
};
</script>
<style lang="less">
.is-active {
  .el-carousel__button {
    background: rgb(230, 33, 41);
  }
}
</style>


<style lang="less" scoped>
.isblock{
  display: none;
}
.container {
  //width: 1215px;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: row;

  .Nav-left {
    position: relative;
    // border: 1px solid orange;
    width: 220px;
    height: 355px;
    background: rgb(230, 33, 41);
    //float: left;
    z-index: 100;

    .nav-list {
      .nav-item {
        list-style: none;
        width: 161px;
        padding: 0 30px;
        height: 33.2px;
        line-height: 33.2px;
        text-align: center;
        margin: 0;
        // background:brown ;
        // z-index: 100;
        // :hover{

        //  //  background: brown;
        //   //  color: burlywood;
        // }
        &:first-of-type {
          margin-top: 13px;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      }
      .nav-item:hover {
        background: brown;
      }
      .hovor {
        display: block;
      }
    }
  }
  //右侧导航菜单

  .banner {
    //  float: right;
    width: 100%;
  }
  .Nav-right {
    width: 850px;
    background: pink;
    // display: none;
    position: absolute;
    left: 571px;
    top: 304px;
    z-index: 100;

    //z-index: 100;
    h4 {
      text-align: left;
      padding-left: 35px;
      margin-top: 10px;
    }
  }
}
</style>