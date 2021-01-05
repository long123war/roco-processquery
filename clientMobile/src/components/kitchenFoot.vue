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
      :overlay="false"
      round
      closeable
    >
      <!-- 弹出层内表单 -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="doorWidth"
          name="门洞宽"
          label="门洞宽"
          placeholder="门洞宽"
          :rules="[{ required: true, message: '请填写门洞宽' }]"
        />
        <van-field
          v-model="doorheight"
          name="门洞高"
          label="门洞高"
          placeholder="门洞高"
          :rules="[{ required: true, message: '请填写门洞高' }]"
        />
        <van-field
          v-model="wayD"
          name="墙厚"
          label="墙厚"
          placeholder="墙厚"
          :rules="[{ required: true, message: '请填写墙厚' }]"
        />
        <!-- 弹出层底部按钮 -->
        <div>
          <div class="fromTitle">
            <span>{{ select }}下单工艺一键查</span>
          </div>
          <van-row>
            <van-col span="10">
              <div class="line"></div>
            </van-col>
            <!-- 底部中间按钮 -->
            <van-col span="4">
              <van-button
                color="#454545"
                icon="add-o"
                round
                type="info"
                native-type="submit"
                >查询</van-button
              >
            </van-col>
            <van-col span="10">
              <div class="line"></div>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: ["select"],
  data() {
    return {
      btnShadow: {
        isshadow: false,
      },
      // 门洞宽
      doorWidth: "",
      // 客户输入的门洞高
      doorheight: "",
      // 客户输入的墙厚
      wayD: "",
    };
  },
  methods: {
    clickFoot() {
      this.btnShadow.isshadow = !this.btnShadow.isshadow;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less">
.foot {
  width: 100%;
  position: fixed;
  bottom: 5px;
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
  .van-popup {
    position: fixed;
    bottom: 5px;
    box-shadow: 3px 3px 10px 3px #00000024;
    .fromTitle {
      font-size: 20px;
      font-weight: bold;
      text-shadow: 3px 3px 3px #c8c8c8;
    }
  }
}
</style>
<style lang="less" scoped></style>
