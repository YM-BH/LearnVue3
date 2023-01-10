
import { defineStore } from 'pinia'
import { getHotSuggests } from '@/service/modules/home'

const useHomeStore = defineStore('home', {
  state: () => ({
    enterDate: '',
    leaveDate: '',
    hotSuggests: []
  }),
  actions: {
    async getHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    }
  }
  
})

export default useHomeStore