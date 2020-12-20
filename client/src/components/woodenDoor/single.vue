<template>
  <div class="single">
    <el-row :gutter="15">
      <!-- 表单操作区域 -->
      <el-col :span="16">
        <!-- 左侧表单区域分区 -->
        <el-row>
          <!-- 输入数据区 -->
          <el-col>
            <el-card class="box-main" shadow="hover">
              <!-- 工艺说明图 -->
              <div>
                <span>单开门工艺查询</span>
                <el-image :src="doorImg"></el-image>
              </div>
              <!-- 表单填写及提交 -->
              <div>
                <el-form
                  :model="doorForm"
                  :rules="doorRules"
                  ref="doorForm"
                  label-width="80px"
                  class="demo-ruleForm"
                  label-position="left"
                >
                  <el-form-item label="门洞宽" prop="doorWayWvalue">
                    <el-input v-model="doorForm.doorWayWvalue"></el-input>
                  </el-form-item>
                  <el-form-item label="门洞高" prop="doorWayHvalue">
                    <el-input v-model="doorForm.doorWayHvalue"></el-input>
                  </el-form-item>
                  <el-form-item label="墙厚" prop="wayD">
                    <el-input v-model="doorForm.wayD"></el-input>
                  </el-form-item>
                  <el-form-item class="btns">
                    <el-button type="primary" @click="checkDoor"
                      >工艺查询</el-button
                    >
                    <el-button type="info" @click="removeDoorForm"
                      >重置</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </el-card>
          </el-col>
          <!-- 显示结果区-->
          <el-col v-if="doorResults.doorframeWvalue === '' ? false : true">
            <el-card class="box-main" shadow="hover">
              <!-- 工艺说明图 -->
              <div>
                <span>查询结果</span>
                <el-image :src="doorImg"></el-image>
              </div>
              <el-divider content-position="left">下单数据</el-divider>
              <!-- 工艺查询结果 -->
              <div class="doorResults">
                <span>包框宽：</span>
                <span>{{ doorResults.doorframeWvalue }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>包框高：</span>
                <span>{{ doorResults.doorframeHvalue }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>墙厚：</span>
                <span>{{ doorResults.wayThick }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 图标展示区域（侧栏） -->
      <el-col :span="8">
        <!-- 侧栏图片 -->
        <el-row>
          <el-col>
            <el-card
              class="box-img"
              shadow="hover"
              :body-style="{ padding: '0px' }"
            >
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div>
                <span>极简主义单开门</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">查看详细</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      // 提交查询参数表单对象
      doorForm: {
        doorWayWvalue: "",
        doorWayHvalue: "",
        wayD: ""
      },
      // 表单验证
      doorRules: {
        doorWayWvalue: [
          { required: true, message: "请输入您要查询的门洞宽", trigger: "blur" }
        ],
        doorWayHvalue: [
          { required: true, message: "请输入您要查询的门洞高", trigger: "blur" }
        ],
        wayD: [
          { required: true, message: "请输入您要查询的墙厚", trigger: "blur" }
        ]
      },
      // 工艺查询结果
      doorResults: {
        doorframeWvalue: "",
        doorframeHvalue: "",
        wayThick: ""
      },
      // 工艺展示图
      doorImg:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  methods: {
    checkDoor() {
      this.$refs.doorForm.validate(valid => {
        if (!valid) {
          return;
        }
        this.$http
          .get("/doorProcess/results", {
            params: this.doorForm
          })
          .then(res => {
            // 把服务器响应的数据保存
            if (res.status === 200) {
              this.doorResults.doorframeWvalue = res.data.doorframeWvalue;
              this.doorResults.doorframeHvalue = res.data.doorframeHvalue;
              this.doorResults.wayThick = res.data.wayThick;
            } else {
              this.$message.error("查询失败！");
            }
          })
          .catch(err => {
            console.error(err);
            this.$message.error("查询失败！");
          });
      });
    },
    removeDoorForm() {
      this.doorForm.doorWayWvalue = "";
      this.doorForm.doorWayHvalue = "";
      this.doorForm.wayD = "";
    }
  }
};
</script>
<style lang="less">
.single {
  .el-form-item__content {
    margin-left: 0px !important;
  }
}
</style>
<style lang="less" scoped>
.demo-ruleForm {
  .el-form-item {
    margin-bottom: 10px;
  }
  .btns {
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
  }
}
.el-card {
  margin-bottom: 15px;
  .doorResults {
    display: flex;
    justify-content: center;
  }
}
</style>
