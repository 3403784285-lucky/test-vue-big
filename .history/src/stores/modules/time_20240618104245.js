import { defineStore } from 'pinia'
import { ref } from 'vue'

//数字计数器模块

export const useTimeStore = defineStore(
  'temporary',
  () => {
    const house = ref({})
    const order = ref({})
    const finish = ref('')
    const cancel = ref('')
    const loading= ref(false)


    const activeTab = ref('待支付')
    return {
      house,
      order,
      activeTab,
      finish,
      loading,
      cancel
    }
  },
  {
    persist: {
      enabled: true,
      key: 'temp',
      storage: sessionStorage
    }
  }
)
