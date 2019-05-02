<template>
  <div>
    <van-nav-bar title="登陆"/>
    <van-tabs
      v-model="active"
      type="card"
      color="#169bd5"
      animated>
      <van-tab title="快捷登陆">
        <div class="tips">验证即可登陆，未注册用户将根据手机号自动创建账号</div>
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
          @click="gotoIndex"
          class="loginBtn"
          type="info"
          round
          size="normal">登陆</van-button>
      </van-tab>
      <van-tab title="密码登陆">
        <div class="tips"></div>
        <van-cell-group>
          <van-field
            v-model="email"
            label="手机/邮箱"
            type="tel"
            maxlength="12"
            clearable
            placeholder="请输入号码"/>
          <van-field
            v-model="pwd"
            label="密码"
            clearable
            placeholder="请输入密码"/>
        </van-cell-group>
        <div class="findpwd" @click="findPwd">忘记密码</div>
        <van-button
          @click="gotoIndex"
          class="loginBtn"
          type="info"
          round
          size="normal">登陆</van-button>
      </van-tab>
    </van-tabs>
    <LoginOrReg islogin="islogin"></LoginOrReg>
  </div>
</template>

<script>
  import LoginOrReg from '@/components/LoginOrReg'

  export default {
    name: "Login",
    components: {
      LoginOrReg
    },
    data() {
      return {
        active: 0,
        islogin: true,
        phone: '',
        email: '',
        sms: '',
        pwd: ''
      }
    },
    methods: {
      gotoIndex() {
        this.$router.push({name: 'index'})
      },
      findPwd(){
        this.$router.push({name: 'findpwd'})
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

  .findpwd{
    text-align: right;
    margin-right: @margin1;
    font-size: 14px;
    color: @color1;
  }
</style>
