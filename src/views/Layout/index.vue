<template>
  <div>
    <router-view />

    <van-tabbar active-color="#58b57f" route>
      <van-tabbar-item replace to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/found" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="newspaper-o"
        >咨讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .van-tabbar-item__text {
  font-size: 10px;
  margin: 3px 0 0;
  line-height: 1;
  text-align: center;
}
</style>
