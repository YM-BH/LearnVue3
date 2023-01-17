
import { defineStore } from 'pinia'
import { getHomeCategories, getHotSuggests, getHouseList } from '@/service/modules/home'

const useHomeStore = defineStore('home', {
  state: () => ({
    enterDate: '',
    leaveDate: '',
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: []
  }),
  actions: {
    async getHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async getHomeCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async getHouseList() {
      const res = await getHouseList(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    }
  }
  
})

export default useHomeStore