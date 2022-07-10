<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        type="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入账号' },
          { pattern: '', message: '不符合账号的格式' },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button color="#56b27b" square block native-type="submit"
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
      username: 'itheima',
      password: '123456',
      time: 5 * 1000
      // isCountDownSgow: false
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        if (this.username.length === 0 || this.password.length === 0) { return this.$toast('不能为空') }
        const res = await login(values)
        if (res.data.status === 400) { return this.$toast('你的账号或者密码错误') }
        this.$router.push('/home')
        this.$toast.success('登录成功')
        console.log(res)
        this.$store.commit('setUser', res.data.body)
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
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
