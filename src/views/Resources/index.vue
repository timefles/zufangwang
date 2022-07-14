<template>
  <div>
    <div class="rend">
      <van-nav-bar title="发布房源" @click-left='$router.back()'>
        <template #left>
          <van-icon name="arrow-left" class="iconFont" />
        </template>
      </van-nav-bar>
      <!-- 基本信息 -->
      <van-form>
        <div>
          <h3 class="am-list-header rend-h1">房源信息</h3>
          <!-- 小区名称 -->
          <van-field
            label="小区名称"
            right-icon="arrow"
            placeholder="请输入小区名称"
          >
          </van-field>
          <!-- 租金 -->
          <van-field label="租金" placeholder="请输入租金/月">
            <template #extra> ￥/月 </template>
          </van-field>
          <!-- 建筑面积 -->
          <van-field label="建筑面积" placeholder="请输入建筑面积">
            <template #extra> ㎡ </template>
          </van-field>

          <!-- 户型 -->
          <van-field
            center
            clearable
            right-icon="arrow"
            label="户型"
            placeholder="请选择"
          />
          <van-popup position="bottom" :style="{ height: '30%' }">
            <van-picker show-toolbar />
          </van-popup>

          <!-- 所在楼层 -->
          <van-field
            center
            clearable
            label="所在楼层"
            right-icon="arrow"
            placeholder="请选择"
          />
          <van-popup position="bottom" :style="{ height: '30%' }">
            <van-picker show-toolbar value-key="label" />
          </van-popup>

          <!-- 朝向 -->
          <van-field
            center
            clearable
            label="朝向"
            right-icon="arrow"
            placeholder="请选择"
          />
          <van-popup position="bottom" :style="{ height: '30%' }">
            <van-picker value-key="label" show-toolbar />
          </van-popup>
        </div>
        <!-- 房屋标题 -->
        <div>
          <h3 class="am-list-header">房屋标题</h3>
          <van-field placeholder="请输入标题(例如：整租 小区名 2室 5000元)" />
        </div>
        <!-- 房屋图像 -->
        <div>
          <h3 class="am-list-header">房屋图像</h3>
          <van-uploader multiple />
        </div>
        <!-- 房屋配置 -->
        <div>
          <h3 class="am-list-header">房屋配置</h3>
          <van-grid :column-num="5" :border="false">
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="衣柜"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="洗衣机"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="空调"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="天然气"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="冰箱"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="暖气"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="电视"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="热水器"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="宽带"
            />
            <van-grid-item
              :key="value"
              icon="photo-o"
              text="沙发"
            />
          </van-grid>
        </div>
        <!-- 房屋描述 -->
        <div class="describe">
          <h3 class="am-list-header">房屋描述</h3>
          <van-field
            rows="5"
            autosize
            type="textarea"
            maxlength="100"
            placeholder="请输入房屋描述信息"
            show-word-limit
          />
        </div>
        <!-- 底部按钮 -->
        <div class="foolted">
          <van-button plain hairline type="primary" native-type="button"
            >取消</van-button
          >
          <van-button type="primary">提交</van-button>
        </div>
      </van-form>
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
.van-nav-bar {
  background-color: #21b97a;
}
.rend {
  background-color: #fff;

  .rend-h1 {
    color: #21b97a;
    background-color: #fff;
    font-size: 15px;
    border-bottom: 1px solid #ddd;
  }
  .van-popup {
    padding-bottom: 50px !important;
  }
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
  .iconFont {
    color: #fff;
  }
}

.am-list-header {
  padding: 15px 15px 9px;
  font-size: 14px;
  color: #888;
  width: 100%;
  font-weight: normal;
  box-sizing: border-box;
  color: #333;
}
.describe {
  padding-top: 20px;
}
.foolted {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  /deep/ .van-button {
    width: 50% !important;
    font-size: 17px;
  }
}
</style>
