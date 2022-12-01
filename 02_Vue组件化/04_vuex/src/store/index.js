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
    ]
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
    }
  }
})

export default store