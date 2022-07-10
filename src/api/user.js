import request from '@/utils/request'
import store from '@/store'

/**
 * 登录
 * @param {*} param0
 * @returns
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户个人信息
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: 'user',
    header: {
      Authorization: 'Bearer ' + store.state.user.token
    }
  })
}
