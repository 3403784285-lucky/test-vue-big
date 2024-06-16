import { defineStore } from 'pinia'
import { ref } from 'vue'

//用户模块  token setToken removeToken

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const userId = ref('0')
    const email = ref('')
    const setToken = (newValue) => {
      token.value = newValue
    }
    const removeToken = () => {
      token.value = ''
    }
    return {
      token,
      userId,
      setToken,
      removeToken,
      email
    }
  },

  {
    persist: true
  }
)
