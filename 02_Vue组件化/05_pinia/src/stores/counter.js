
import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 20,
    friends: [
      { id: 111, name: 'kobe' },
      { id: 222, name: 'curry' }
    ]
  }),
  getters: {
    doubleCounter(state) {
      return state.count * 2
    },
    // 使用其他 getters
    doubleCounterAddOne() {
      return this.doubleCounter + 1
    },
    // 返回函数
    getFriendById(state) {
      return function (id) {
        return state.friends.find((item) => {
          return item.id === id
        })
      }
    },

    // 使用其他store
    showInfo(state) {
      const userStore = useUser()
      return `count: ${state.count}, user: ${userStore.name}`
    }
  }
})

export default useCounter