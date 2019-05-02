<template>
  <div>
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'

  export default {
    name: "Index",
    components:{
      Tabbar
    },
  }
</script>

<style scoped>

</style>
