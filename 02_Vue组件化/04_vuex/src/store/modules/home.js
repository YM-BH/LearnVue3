export default {
  state: () => ({
    banners: [],
    recommends: []
  }),
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  actions: {
    async getTopData(contex) {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')

      const data = await res.json()
      // console.log(data.data)
      contex.commit("changeBanners", data.data.banner.list)
      contex.commit("changeRecommends", data.data.recommend.list)
    }
  }
}