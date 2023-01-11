
import { defineStore } from 'pinia'
import { getHomeCategories, getHotSuggests } from '@/service/modules/home'

const useHomeStore = defineStore('home', {
  state: () => ({
    enterDate: '',
    leaveDate: '',
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async getHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async getHomeCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    }
  }
  
})

export default useHomeStore