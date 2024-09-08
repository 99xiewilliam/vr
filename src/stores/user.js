import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref(0)
    const setToken = (newToken) => {
      token.value = newToken
    }
    return { token, setToken }
  },
  {
    persist: true
  }
)
