<template>
  <div class="foot">
    <van-row>
      <van-col span="10">
        <div class="line"></div>
      </van-col>
      <van-col span="4">
        <van-button icon="add-o" type="primary" round color="#454545">
          <span>工艺</span>
        </van-button>
      </van-col>
      <van-col span="10">
        <div class="line"></div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.foot {
  width: 100%;
  position: absolute;
  bottom: 8px;
  .line {
    height: 1px;
    background-color: #454545;
    position: relative;
    top: 55px;
  }
  .van-button--normal {
    padding: 0;
  }
  .van-button {
    width: 55px;
    height: 55px;
    box-shadow: 3px 3px 10px 3px #00000024;

    .van-button__icon {
      color: #e62129;
    }
    .span {
      font-size: 14px;
    }
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
