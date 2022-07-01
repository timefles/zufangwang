<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow> </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
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
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'wyj',
      password: '123456',
      time: 5 * 1000,
      isCountDownSgow: false
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.data)
        // this.$router.push({ name: 'my' })
        // this.toast.success('登录成功')
      } catch (err) {
        console.log(err)
      }
    }
  },
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
