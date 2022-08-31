<template>
  <div>
<Header></Header>
<router-view></router-view>
<Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/headerIndex.vue'
import Footer from './components/Footer/footerIndex.vue'
  export default {
     components:{
      Header,
      Footer
     }
  }
</script>

<style lang="scss" scoped>

</style>