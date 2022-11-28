import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [
    { 
      path: "/", 
      redirect: "/home" 
    },
    { 
      path: "/home", 
      component: () => import('../views/Home.vue'),
      // 路由嵌套
      children: [
        {
          path: "/home",
          redirect: "/home/recommend"
        },
        {
          path: "recommend",
          component: () => import("../views/HomeRecommend.vue")
        },
        {
          path: "ranking",
          component: () => import('../views/HomeRanking.vue')
        }
      ]
    },
    { 
      path: "/about", 
      component: () => import('../views/About.vue') 
    },
    {
      // 动态路由
      path: "/user/:id",
      component: () => import('../views/User.vue')
    },
    // NotFound
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/NotFound.vue")
    }
  ]
})

export default router