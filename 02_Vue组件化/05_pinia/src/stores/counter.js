
import { defineStore } from 'pinia'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 20
  })
})

export default useCounter