<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left-text><van-icon name="search" size="18" /></template>
      <template #title
        ><van-search
          v-model="value"
          placeholder="请输入小区或地址"
          label="地址"
      /></template>
      <template #right-text><van-icon name="search-o" color="red" /></template>
    </van-nav-bar>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
      123
    </van-popup>
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
import { Toast } from 'vant'
export default {
  async created () {
    const res1 = await this.$axios.get('houses/condition?id=AREA%7C88cff55c-aaa4-e2e0')
    console.log(res1)
    res1.data.body.area.children[0].children = [{ label: '' }]
    res1.data.body.subway.children[0].children = [{ label: '' }]
    this.columns = [res1.data.body.area, res1.data.body.subway]
    this.columns1 = res1.data.body.rentType
    this.columns1 = res1.data.body.price
  },
  data () {
    return {
      areaList,
      value: '',
      columns: [],
      columns1: [
        { text: '浙江' },
        { text: '福建' }
      ],
      columns2: [
        { text: '浙江' },
        { text: '福建' }
      ],
      flag: false
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background-color: #21b97a;
  /deep/ .van-icon {
    color: #fff;
  }
  /deep/ .van-icon-search {
    color: #9c9fa1;
  }
  /deep/ .van-search {
    padding: 5px;
  }
}
</style>
