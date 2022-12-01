import { createStore } from 'vuex'

import { INCREMENT } from './mutation_types'

const store = createStore({
  state: () => ({
    counter: 66,
    name: 'Lyci',
    friends: [
      { id: 111, name: 'Lucy', age: 18 },
      { id: 112, name: 'Smile', age: 17},
      { id: 113, name: 'Andy', age: 34}
    ],
    banners: [],
    recommends: []
  }),
  getters: {
    // 普通用法
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue += item.age
      }, 0)
    },
    // getters 中用其他 getters
    message(state, getters) {
      return `name is : ${state.name}, friendsTotalAge is ${getters.totalAge}`
    },

    findFriendById(state) {
      return function(id) {
        return state.friends.find(item => item.id === id)
      }
    }
  },
  mutations: {
    [INCREMENT](state, payload) {
      state.counter += payload
    },
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  actions: {
    incrementAction(contex, payload) {
      contex.commit(INCREMENT, payload)
    },
    async getTopData(contex) {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')

      const data = await res.json()
      // console.log(data.data)
      contex.commit("changeBanners", data.data.banner.list)
      contex.commit("changeRecommends", data.data.recommend.list)
    }
  }
})

export default store