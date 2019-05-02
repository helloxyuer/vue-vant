<template>
  <div>
    <div class="tips" v-if="islogin">
      <span class="tipsWord">还没有B.CEO账号？</span>
      <span class="turnWord" @click="gotoRegister">注册</span>
    </div>
    <div class="tips" v-if="!islogin">
      <span class="tipsWord">已有B.CEO账号？</span>
      <span class="turnWord" @click="gotoLogin">登陆</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GotoRegister",
    props: {
      islogin: {
        type: Boolean,
        default: true
      }
    },
    methods:{
      gotoRegister(){
        this.$router.push({name:'register',replace:true})
      },
      gotoLogin(){
        this.$router.push({name:'login',replace:true})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/variables.less';

  .tips{
    margin-top: 100px;
    margin-left: @margin1;
    font-size: 14px;
  }
  .turnWord{
    color: @color1;
    font-size: 18px;
  }
</style>
