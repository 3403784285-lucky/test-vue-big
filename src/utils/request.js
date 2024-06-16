import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
import axios from 'axios'
const baseURL = 'http://localhost:8080'
const instance = axios.create({
  baseURL,
  timeout: 60000
  //   headers: { 'X-Custom-Header': 'foobar' }
})
// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // 携带token
    // Do something before request is sent
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (
      response.data.code === 0 ||
      response.data.code == 506 ||
      response.data.code == 503
    ) {
      return response
    }
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //错误的特殊情况401 权限不足或者token过期=》拦截到登录
    if (error.response?.status === 401) {
      router.push('/login')
    }
    //错误的默认情况
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
