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
      name: "home",
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
      path: "/order",
      component: () => import('../views/Order.vue')
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue")
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

// 动态添加路由
let admin = true

if (admin) {
  router.addRoute({
    path: "/admin",
    component: () => import('../views/Admin.vue')
  })

  // 动态添加二级路由

  router.addRoute("home", {
    path: "vip",
    component: () => import("../views/HomeVip.vue")
  })
}

// 路由导航守卫
router.beforeEach((to, from) => {

  const token = localStorage.getItem("token")
  if (!token && to.path === "/order") {
    return "/login"
  }
})

export default router