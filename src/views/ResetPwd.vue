<template>
  <div>
    <van-nav-bar
      title="重置密码"
      left-arrow
      @click-left="onClickLeft"/>
    <div class="tips"></div>
    <van-cell-group>
      <van-field
        v-model="pwd1"
        label="新密码"
        clearable
        placeholder="请输入新密码"/>
      <van-field
        v-model="pwd2"
        label="确认密码"
        center
        clearable
        placeholder="请再次输入新密码">
      </van-field>
    </van-cell-group>
    <van-button
      @click="sendPwd"
      class="loginBtn"
      type="info"
      round
      size="normal">确认</van-button>
  </div>
</template>

<script>
  export default {
    name: "ResetPwd",
    methods: {
      sendPwd() {
        this.$router.push({name:'login'});
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
