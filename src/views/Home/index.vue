<template>
  <div>
    <!-- Search搜索 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入小区或地址"
      @search="onSearch"
      slot="left-icon"
    >
      <template #action>
        <div @click="onSearch">
          <van-icon name="user-o" />
        </div>
      </template>
    </van-search>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#888888">
      <van-swipe-item>
        <img src="@/img/img1.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/img/img2.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/img/img3.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- Title -->
    <van-grid :column-num="4" :border="false" style="height: 100px">
      <van-grid-item icon="home-o" text="整租" />
      <van-grid-item icon="friends-o" text="合租" />
      <van-grid-item icon="location-o" text="地图找房" />
      <van-grid-item icon="home-o" text="去出租" />
    </van-grid>
    <!-- 租房小组 -->
    <div class="group">
      <div>租房小组</div>
      <a href="">更多</a>
      <div>
        <van-grid :column-num="2">
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </div>
    </div>
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
.my-swipe .van-swipe-item {
  color: #fff;
  height: 424px;
  text-align: center;
  line-height: 424px;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 424px;
  }
}
/deep/ .van-grid-item__icon::before {
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 50%;
  background-color: #f4fbf7;
}
.group {
  background-color: #f6f5f6;
  overflow: hidden;
  width: 100%;
  height: 375px;
  div {
    float: left;
    overflow: hidden;
    line-height: 100px;
    padding-left: 20px;
    color: #333;
    font-weight: 700;
    font-size: 15px;
  }
  a {
    float: right;
    overflow: hidden;
    line-height: 100px;
    padding-right: 20px;
    color: #787d82;
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
