/*
 * @Author: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @Date: 2023-11-22 15:07:09
 * @LastEditors: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @LastEditTime: 2023-12-07 16:18:51
 * @FilePath: \test-vue-big\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.min' // 注意这里使用了 bundle 版本，它包含了 Popper.js
import '@/assets/font/iconfont.css'

import ElementPlus from 'element-plus'//引入Element Plus库，用于创建UI界面
import 'element-plus/dist/index.css'//引入Element Plus库的CSS样式表
const app = createApp(App)
//带有凭证，跨域操作
// axios.defaults.withCredentials = true
app.use(router)
app.use(pinia)
app.use(ElementPlus);
app.mount('#app')

import * as ELIcons from '@element-plus/icons-vue'
// 全局导入element plus图标
for (let iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
}


