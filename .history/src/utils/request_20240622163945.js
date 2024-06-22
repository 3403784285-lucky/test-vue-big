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

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        const useStore = useUserStore()
        if (useStore.token) {
            config.headers.Authorization = useStore.token
        }
        return config
    },
    function (error) {
        // 处理请求错误
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function (response) {
        // 2xx 状态码都会触发此函数
        // 处理响应数据
        if (
            response.data.code === 0 ||
            response.data.code == 506 ||
            response.data.code == 503||response.data.code == 200
        ) {
            return response
        }
        ElMessage.error(response.data.message+"1" || '服务异常')
        return Promise.reject(response.data)
    },
    function (error) {
        // 处理响应错误
        // 特殊情况 401 未授权或者token过期=>跳转到登录页
        if (error.response?.status === 401) {
            router.push('/login')
        }
        // 默认情况下的错误处理
        ElMessage.error(error.response.data.message+"2" || '服务异常')
        return Promise.reject(error)
    }
)

export default instance
export { baseURL }
