<template>
  <!-- 木门的底部查询组件 -->
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
          readonly
          clickable
          v-model="doorCheck.doorLine"
          name="套线款式"
          label="套线款式"
          placeholder="点击选择套线款式"
          @click="selectDoorLine"
          :rules="[{ required: true, message: '请填写门洞宽' }]"
        />
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
        <van-field
          v-model="doorCheck.doorNum"
          name="门扇数量"
          label="门扇数量"
          placeholder="例如，单开门输入1"
          :rules="[{ required: true, message: '门扇数量' }]"
        />
        <!-- 弹出层底部按钮 -->
        <div>
          <div class="fromTitle">
            <span>{{ doorCheck.name }}下单工艺一键查</span>
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
    <!-- 弹出框 -->
    <van-dialog v-model="isdoorLine" title="" :showConfirmButton="false">
      <!-- 选择器——选择套线款式 -->
      <van-picker
        title="套线款式"
        show-toolbar
        :columns="doorLineMenus"
        @confirm="doorLineOnConfirm"
        @cancel="doorLineOnCancel"
      />
    </van-dialog>
  </div>
</template>

<script>
import { Notify } from "vant";
import { throttle } from "../plugins/utils";
import { debounce } from "../plugins/utils";
export default {
  props: ["select"],
  data() {
    return {
      // 控制选择器弹出框显示
      isdoorLine: false,
      // 按键阴影
      btnShadow: {
        isshadow: false,
      },
      // 查询尺寸的对象
      doorCheck: {
        // 产品名
        name: this.select,
        // 门洞宽
        doorWayWvalue: "",
        // 客户输入的门洞高
        doorWayHvalue: "",
        // 客户输入的墙厚
        wayD: "",
        // 门扇数
        doorNum: "",
        // 套线款式
        doorLine: "",
      },
      // 套线款式列表
      doorLineMenus: [],
      // 保存请求的图片(图解图片)
      imgArrayObj: {},
    };
  },
  methods: {
    // 点击底部按钮
    clickFoot() {
      // console.log(this.select);
      this.btnShadow.isshadow = !this.btnShadow.isshadow;
      if (!this.select) {
        // this.btnShadow.isshadow = !this.btnShadow.isshadow;
        Notify("请选择您想查询的产品");
      }
    },
    // 表单信息提交
    onSubmit: throttle(function() {
      this.$http
        .get("doorProcess/results", { params: this.doorCheck })
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            return;
          }
          // this.$emit("results", res.data);
          // 发送表单请求结果给主页面。
          // 发送请求的结果
          this.$root.eventHub.$emit("results", res.data);
          // 发送是否查询点击状态信息
          this.$root.eventHub.$emit("isshow", true);
          // 发起请求获取图解图片
          for (const index in res.data) {
            // 结果数据有key和value，用key请求获得对应的图解图片。
            this.$http
              .get("/img/diagram", { params: { img: index } })
              .then((res) => {
                // console.log(res);
                if (res.status !== 200) {
                  return;
                }
                // 以结果key为基础保存对应的图片到对象里，对象key为图片对应的内容名，数值为存放了服务器图片路径的数组。
                this.imgArrayObj[index] = res.data;
                // console.log(this.imgArrayObj);
              })
              .catch((err) => {
                console.error(err);
              });
          }
          // 发存放图解图片的对象发射出去。
          this.$root.eventHub.$emit("imgArrayObj", this.imgArrayObj);
          // console.log(this.imgArrayObj);
        })
        .catch((err) => {
          console.error(err);
          Notify("查询失败！！！");
        });
    }, 1000),
    // 点击选择器触发函数
    selectDoorLine: throttle(function() {
      // 发起请求，获得门套线列表
      this.$http
        .get("/doorBuild")
        .then((res) => {
          // console.log(res);
          if (res.status !== 200) {
            return;
          }
          this.doorLineMenus = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
      // 显示选择门套线的对话框
      this.isdoorLine = true;
    }, 1000),

    // // 发起请求，获得门套线列表
    // this.$http
    //   .get("/doorBuild")
    //   .then((res) => {
    //     // console.log(res);
    //     if (res.status !== 200) {
    //       return;
    //     }
    //     this.doorLineMenus = res.data;
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // // 显示选择门套线的对话框
    // this.isdoorLine = true;

    // 套线选择器点击确定
    doorLineOnConfirm(value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.doorCheck.doorLine = value;
      this.isdoorLine = false;
    },
    // 套线选择器点击取消
    doorLineOnCancel(value, index) {
      this.isdoorLine = false;
    },
  },
  computed: {
    // 借用computed事实获取select的值
    name() {
      return this.select;
    },
  },
  watch: {
    // 监听computed里的name(){},一旦发生变化就会执行这里的name(){}
    name() {
      this.doorCheck.name = this.select;
      console.log(this.doorCheck.name);
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
    top: 35px;
  }
  .van-button--normal {
    padding: 0;
  }
  .van-button {
    width: 55px;
    height: 55px;
    box-shadow: 0px 0px 3px 0px #000;
    :active {
      box-shadow: inset 3px 3px 3px #000;
    }
    .van-button__icon {
      color: #e62129;
    }
    .span {
      font-size: 14px;
    }
  }
  .van-button:active {
    box-shadow: inset 3px 3px 3px #000;
  }
  // .isshadow {
  //   box-shadow: inset 3px 3px 3px #000;
  // }

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
