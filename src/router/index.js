import Vue from 'vue'
import VueRouter from 'vue-router'
import task_1 from '../views/Task_1.vue'
import task_2 from '../views/Task_2.vue'
import task_3 from '../views/Task_3.vue'
import task_4 from '../views/Task_4.vue'
import task_5 from '../views/Task_5.vue'
import task_6 from '../views/Task_6.vue'
import task_7 from '../views/Task_7.vue'
import task_8 from '../views/Task_8.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'task_1',
    component: task_1
  },
  {
    path: '/2',
    name: 'task_2',
    component: task_2
  },
  {
    path: '/3',
    name: 'task_3',
    component: task_3
  },
  {
    path: '/4',
    name: 'task_4',
    component: task_4
  },
  {
    path: '/5',
    name: 'task_5',
    component: task_5
  },
  {
    path: '/6',
    name: 'task_6',
    component: task_6
  },
  {
    path: '/7',
    name: 'task_7',
    component: task_7
  },
  {
    path: '/8',
    name: 'task_8',
    component: task_8
  },
  {
    path: '/success',
    name: 'Success',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
