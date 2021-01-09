<template>
  <div class="foot">
    <van-row>
      <van-col span="10">
        <div class="line"></div>
      </van-col>
      <!-- 底部中间按钮 -->
      <van-col span="4">
        <van-button
          type="primary"
          round
          color="#454545"
          @click="clickFoot"
          :class="btnShadow"
        >
          <van-icon class="iconfont" class-prefix="icon-sousuo" name="sousuo" />
          <span>工艺</span>
        </van-button>
      </van-col>
      <van-col span="10">
        <div class="line"></div>
      </van-col>
    </van-row>
    <!-- 弹出层 -->
    <van-popup
      v-show="select ? true : false"
      v-model="btnShadow.isshadow"
      position="bottom"
      :overlay="false"
      round
      closeable
    >
      <!-- 弹出层内表单 -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="doorCheck.doorWayWvalue"
          name="门洞宽"
          label="门洞宽"
          placeholder="门洞宽"
          :rules="[{ required: true, message: '请填写门洞宽' }]"
        />
        <van-field
          v-model="doorCheck.doorWayHvalue"
          name="门洞高"
          label="门洞高"
          placeholder="门洞高"
          :rules="[{ required: true, message: '请填写门洞高' }]"
        />
        <van-field
          v-model="doorCheck.wayD"
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
                round
                type="info"
                native-type="submit"
              >
                <van-icon
                  class="iconfont"
                  class-prefix="icon-sousuo"
                  name="sousuo"
                />
                <span>查询</span>
              </van-button>
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
import { Notify } from "vant";
export default {
  props: ["select"],
  data() {
    return {
      btnShadow: {
        isshadow: false,
      },
      // 查询尺寸的对象
      doorCheck: {
        // 门洞宽
        doorWayWvalue: "",
        // 客户输入的门洞高
        doorWayHvalue: "",
        // 客户输入的墙厚
        wayD: "",
      },
    };
  },
  methods: {
    clickFoot() {
      // console.log(this.select);
      this.btnShadow.isshadow = !this.btnShadow.isshadow;
      if (!this.select) {
        // this.btnShadow.isshadow = !this.btnShadow.isshadow;
        Notify("请选择您想查询的产品");
      }
    },
    onSubmit(values) {
      // console.log("submit", values);
      this.$http
        .get("doorProcess/results", { params: this.doorCheck })
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            return;
          }
          // this.$emit("results", res.data);
          // 发送表单请求结果给主页面。
          this.$root.eventHub.$emit("results", res.data);
          this.$root.eventHub.$emit("isshow", true);
        })
        .catch((err) => {
          console.error(err);
          Notify("查询失败！！！");
        });
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

  .van-button__text {
    // 垂直上下
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .van-icon {
      font-size: 30px;
      color: #e62129;
    }
    .iconfont {
      font-size: 30px;
      color: #e62129;
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
