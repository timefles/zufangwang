<template>
  <div>
    <!-- Search搜索 -->
    <van-search placeholder="请输入小区或地址" slot="left-icon" class="searchs">
      <template #left>
        <div class="search-left">
          <span class="name">上海</span>
          <van-icon name="arrow-down" />
        </div>
      </template>
    </van-search>
    <van-icon name="user-o" class="home-icon0" @click="$router.push('/map')" />
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
      <van-grid-item icon="home-o" text="整租" style="color: #4eaa6d" />
      <van-grid-item icon="friends-o" text="合租" style="color: #4eaa6d" />
      <van-grid-item icon="location-o" text="地图找房" style="color: #4eaa6d" />
      <van-grid-item
        icon="home-o"
        text="去出租"
        style="color: #4eaa6d"
        @click="$router.push('/resources')"
      />
    </van-grid>
    <!-- 租房小组 -->
    <div class="group">
      <h3 class="group-title">
        租房小组
        <span class="more">更多</span>
      </h3>
      <div class="group-body">
        <div class="flexbox">
          <div class="item">
            <div class="item-content">
              <van-icon name="photo-fail" />
              <div class="right">
                <p>家住回龙观</p>
                <p>归属的感觉</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-content">
              <van-icon name="photo-fail" />
              <div class="right">
                <p>宜居四五环</p>
                <p>大都市生活</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flexbox">
          <div class="item">
            <div class="item-content">
              <van-icon name="photo-fail" />
              <div class="right">
                <p>喧嚣三里屯</p>
                <p>繁华的背后</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-content">
              <van-icon name="photo-fail" />
              <div class="right">
                <p>比邻十号线</p>
                <p>地铁心连心</p>
              </div>
            </div>
          </div>
        </div>
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
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .searchs {
  position: absolute;
  top: 50px;
  width: 620px;
  padding: 0 20px;
  margin-left: 20px;
  z-index: 2;
  .search-left {
    width: 80px;
    height: 40px;
    border-right: solid 0.5px #ececec;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    .name {
      display: block;
      font-size: 14px;
      line-height: 40px;
      color: #333;
    }
    .van-icon {
      display: block;
      font-size: 14px;
      line-height: 40px;
      margin-right: 8x;
      margin-left: 4px;
    }
  }
}
.home-icon0 {
  position: absolute;
  top: 60px;
  right: 20px;
  width: 50px;
  height: 50px;
  z-index: 2;
}
/deep/ .my-swipe .van-swipe-item {
  position: relative;
  top: 0;
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
.van-grid-item__icon::before {
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
  width: 710px;
  padding: 0 20px;
  overflow: hidden;
  .group-title {
    position: relative;
    margin: 15px 0 15px 10px;
    font-size: 15px;
    .more {
      color: #787d82;
      position: absolute;
      right: 0;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .group-body {
    display: block;
    width: 750px;
    height: 374px;
    .flexbox {
      background-color: transparent;
      width: 750px;
      height: 120px;
      margin-bottom: 10px;
      display: flex;
      /deep/ .item {
        width: 345px;
        height: 100px;
        flex: 1;
        margin-right: 20px;
        margin-left: 10px;
        background-color: #fff;
        border-radius: 5px;
        .item-content {
          text-align: center;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          .left {
            width: 100px;
            height: 100px;
            margin: 0 10px;
            box-sizing: border-box;
            flex: 1;
          }
          .right {
            flex: 2;
            p {
              margin: 0;
              padding: 0;
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
