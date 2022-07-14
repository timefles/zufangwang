import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Found = () => import('@/views/Found')
const Message = () => import('@/views/Message')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const Resources = () => import('@/views/Resources')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'found', component: Found },
      { path: 'message', component: Message },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/resources', component: Resources, name: 'resources' },
  { path: '/map', component: Map, name: 'map' }
]

const router = new VueRouter({
  routes
})

export default router
