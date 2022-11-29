import { createStore } from 'vuex'

const store = createStore({
  state: () => ({
    counter: 66
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  }
})

export default store