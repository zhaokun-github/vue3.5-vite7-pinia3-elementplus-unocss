import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/', // 根据环境变量自动切换
  timeout: 8000,
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 可在此添加token等
  return config
}, error => {
  ElMessage.error('请求发送失败')
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  res => {
    // 这里假设后端返回 { code, msg, data }
    if (res.code && res.code !== 200) {
      ElMessage.error(res.msg || '请求失败')
      return Promise.reject(res)
    }
    return res.data ?? res
  },
  error => {
    const status = error.response?.status
    if (status === 401) {
      ElMessage.error('未登录或登录已过期，请重新登录')
      // 可跳转到登录页
    } else if (status === 403) {
      ElMessage.error('没有权限访问')
    } else if (status === 500) {
      ElMessage.error('服务器错误，请稍后再试')
    } else {
      ElMessage.error(error.response?.data?.msg || '网络异常')
    }
    return Promise.reject(error)
  }
)

export default service