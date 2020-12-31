<template>
  <div class="foot">
    <van-row>
      <van-col span="10">
        <div class="line"></div>
      </van-col>
      <!-- 底部中间按钮 -->
      <van-col span="4">
        <van-button
          icon="add-o"
          type="primary"
          round
          color="#454545"
          @click="clickFoot"
          :class="btnShadow"
        >
          <span>工艺</span>
        </van-button>
      </van-col>
      <van-col span="10">
        <div class="line"></div>
      </van-col>
    </van-row>
    <!-- 弹出层 -->
    <van-popup
      v-model="btnShadow.isshadow"
      position="bottom"
      :style="{ height: '50%' }"
      :overlay="false"
      round
      closeable
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnShadow: {
        isshadow: false,
      },
    };
  },
  methods: {
    clickFoot() {
      this.btnShadow.isshadow = !this.btnShadow.isshadow;
    },
  },
};
</script>

<style lang="less">
.foot {
  width: 100%;
  position: fixed;
  bottom: 8px;
  .line {
    height: 1px;
    background-color: #454545;
    position: relative;
    top: 50px;
  }
  .van-button--normal {
    padding: 0;
  }
  .van-button {
    width: 55px;
    height: 55px;
    box-shadow: 0px 0px 3px 0px #000;

    .van-button__icon {
      color: #e62129;
    }
    .span {
      font-size: 14px;
    }
  }
  .isshadow {
    box-shadow: inset 3px 3px 3px #000;
  }
  .van-button__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .van-button__icon {
      font-size: 30px;
    }
  }
}
</style>
<style lang="less" scoped></style>
