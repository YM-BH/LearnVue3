import { defineStore } from 'pinia'

const useUser = defineStore("user", {
  state: () => ({
    name: 'kobe',
    age: 30,
    level: 33
  })
})

export default useUser