<template>
  <div>
    <van-nav-bar
      title="找回密码"
      left-arrow
      @click-left="onClickLeft"/>
    <div class="tips"></div>
    <van-cell-group>
      <van-field
        v-model="phone"
        label="手机号"
        type="tel"
        maxlength="12"
        clearable
        placeholder="请输入手机号"/>
      <van-field
        v-model="sms"
        label="短信验证码"
        center
        clearable
        placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="info">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button
      @click="findPwdBtn"
      class="loginBtn"
      type="info"
      round
      size="normal">下一步</van-button>
  </div>
</template>

<script>
  export default {
    name: "FindPwd",
    methods: {
      findPwdBtn() {
        this.$router.push({name:'resetpwd'});
      },
      onClickLeft() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/variables.less';
  .tips{
    font-size: 12px;
    margin: @margin1;
    margin-bottom: 40px;
    height: 30px;
    line-height: 30px;
  }
  .loginBtn {
    width: @btnSize1;
    margin-left: calc(50% - @btnSize1/2);
    margin-top: 50px;
  }
</style>
