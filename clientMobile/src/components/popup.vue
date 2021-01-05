<template>
    <div>
      <div class="popup">
          <van-button type="danger" @click="back">危险按钮</van-button>
      </div>
      
    </div>
</template>


<script>

export default {
    data () {
        return {
           
        }

        qin
    },
    methods: {
        back(){
            this.$router.push('/HelloWorld')
        }
    }
   
        
    
  }

</script>
<style lang="less">
.popup{
    height: 100%;
    width: 375px;
    position: absolute;
    right: 0;
    top: 0;
    background:pink;
    z-index: 100;
}

</style>