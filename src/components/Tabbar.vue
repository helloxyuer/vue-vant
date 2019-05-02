<template>
  <van-tabbar v-model="active" :safe-area-inset-bottom="true">
    <van-tabbar-item
      icon="home-o"
      :to="{name:'home'}"
      :replace="true">首页</van-tabbar-item>
    <van-tabbar-item
      icon="search"
      :to="{name:'market'}"
      :replace="true">行情</van-tabbar-item>
    <van-tabbar-item
      icon="gold-coin"
      :to="{name:'coin'}"
      :replace="true">法币</van-tabbar-item>
    <van-tabbar-item
      icon="cart-circle"
      :to="{name:'buycoin'}"
      :replace="true">币币</van-tabbar-item>
    <van-tabbar-item
      icon="contact"
      :to="{name:'my'}"
      :replace="true">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {
        name: "Tabbar",
      data(){
          return{
            active:0
          }
      }
    }
</script>

<style scoped>

</style>
