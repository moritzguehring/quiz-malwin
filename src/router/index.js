import Vue from 'vue'
import VueRouter from 'vue-router'
import task_1 from '../views/Task_1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'task_1',
    component: task_1
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
