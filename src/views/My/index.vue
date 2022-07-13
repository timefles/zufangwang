<template>
  <div>
    <!-- 登录后 -->
    <div class="my-title" v-if="user && user.token">
      <img class="my-img" src="@/img/my2.png" alt="" />
      <div class="my-info">
        <div class="my-icon">
          <img class="my-avatar" src="@/img/avatar.png" alt="" />
        </div>
        <div class="my-user">
          <div class="my-name">好客_68564</div>
          <div class="my-edit">
            <!-- <a href="" class="my-denglu" v-if="user && user.token">
              <span>退出</span>
            </a> -->
            <van-button
              class="logout"
              type="default"
              block
              v-if="user && user.token"
              @click="logout"
              >退出</van-button
            >
          </div>
          <div class="my-code">
            编辑个人资料
            <span><van-icon name="play" /></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录前 -->
    <div class="my-title" v-else>
      <img class="my-img" src="@/img/img-my.png" alt="" />
      <div class="my-info">
        <div class="my-icon">
          <img class="my-avatar" src="@/img/avatar.png" alt="" />
        </div>
        <div class="my-user">
          <div class="my-name">游客</div>
          <div class="my-edit" @click="$router.push('/login')">
            <van-button
              class="logout"
              type="default"
              block
              >去登录</van-button
            >
          </div>
        </div>
      </div>
    </div>
    <van-grid column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="underway-o" text="看房记录" />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="user-circle-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <div class="my-ad">
      <img src="@/img/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'my',
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        console.log('res', res)
        this.userInfo = res.data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      getUserInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.my-title {
  min-height: 600px;
  position: relative;
  .my-img {
    width: 100%;
    border-style: none;
  }
  .my-info {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .my-icon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .my-avatar {
        width: 100%;
        border-radius: 50%;
      }
    }
    .my-user {
      padding-top: 15px;
      .my-name {
        font-size: 13px;
        margin-top: -30px;
        margin-bottom: 40px;
      }
      .my-edit {
        color: #999;
        font-size: 12px;
        // margin-top: 20px;
        .logout {
          background-color: #21b97a;
          font-size: 13px;
          width: 108px;
          height: 41px;
          line-height: 41px;
          padding: 0 15px;
          display: inline-block;
          border-radius: 20px;
          span {
            color: #fff;
          }
        }
      }
      .my-code {
        padding-top: 60px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}

.my-ad {
  text-align: center;
  padding-left: 15px;
  margin-top: 10px;
  width: 96%;
  img {
    width: 100%;
  }
}
</style>
