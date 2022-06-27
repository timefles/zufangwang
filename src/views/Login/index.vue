<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow> </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          color="#56b27b"
          square
          block
          type="info"
          native-type="submit"
          >登 录</van-button
        >
        <a href="" class="zhuce">还没有账号,去注册~</a>
      </div>
    </van-form>
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
.zhuce {
  color: #666;
  font-size: 14px;
  display: block;
  text-align: center;
  padding-top: 50px;
}
</style>
