<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div>
          <el-card class="box-main" shadow="hover">
            <div v-for="o in 100" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-card
            class="box-img"
            shadow="hover"
            :body-style="{ padding: '13px' }"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div>
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.box-img {
  display: flex;
  align-items: center;
  .image {
    width: 100%;
  }
}
</style>
