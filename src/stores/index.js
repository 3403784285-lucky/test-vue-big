//pinia独立维护

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

//统一导出
export default pinia
export * from './modules/user'
export * from './modules/counter'
export * from './modules/time'
