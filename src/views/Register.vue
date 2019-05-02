<template>
  <div>
    <van-nav-bar
      title="注册"
      left-arrow
      @click-left="onClickLeft"
    />

  </div>
</template>

<script>
  export default {
    name: "Register",
    methods:{
      onClickLeft() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
