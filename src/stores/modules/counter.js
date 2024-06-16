import { defineStore } from 'pinia'
import { ref } from 'vue'

//数字计数器模块

export const useCountStore = defineStore(
  'big-count',
  () => {
    const count = ref(60)
    const sub = () => {
      count.value--
    }
    return {
      count,
      sub
    }
  },
  {
    persist: {
      enabled: true,
      key: 'tempCount',
      storage: sessionStorage
    }
  }
)
