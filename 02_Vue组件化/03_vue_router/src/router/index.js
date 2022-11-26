import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    { 
      path: "/", 
      redirect: "/home" 
    },
    { 
      path: "/home", 
      component: () => import('../views/Home.vue') 
    },
    { 
      path: "/about", 
      component: () => import('../views/About.vue') 
    }
  ]
})

export default router