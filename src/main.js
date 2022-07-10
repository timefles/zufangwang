import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import axios from 'axios'

Vue.use(Vant)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://liufusong.top:8080/'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
