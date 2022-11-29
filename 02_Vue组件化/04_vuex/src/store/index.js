import { createStore } from 'vuex'

const store = createStore({
  state: () => ({
    counter: 66,
    name: 'Lyci'
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  }
})

export default store