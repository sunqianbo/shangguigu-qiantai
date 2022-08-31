<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor />
    <!--楼层-->
    <Floor />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
  import Brand from './Brand/brandIndex.vue'
  import Floor from './Floor/floorIndex.vue'
  import Like from './Like/likeIndex.vue'
  import ListContainer from './ListContainer/ListContainer.vue'
  import Rank from './Rank/rankIndex.vue'
  import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
  export default {
    name:'homeIndex',
    components: {
      Brand,
      Floor,
      Like,
      ListContainer,
      Rank,
      TodayRecommend,
    },
    mounted(){
      this.$store.dispatch('getFloorList')
      //用户信息的接口
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style lang="less" scoped>

</style>