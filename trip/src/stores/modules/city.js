import { defineStore } from "pinia";
import { getAllCity } from "@/service/modules/city";

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async getAllCitiesData() {
      const res = await getAllCity()
      this.allCities = res.data
    }
  }
})

export default useCityStore