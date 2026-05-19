import { createRouter, createWebHistory } from 'vue-router'
import Schedule from '../views/Schedule.vue'

const routes = [
  {
    path: '/',
    redirect: '/schedule',
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: '/mentoring',
    name: 'MentoringProgramme',
    component: () => import('../views/MentoringProgramme.vue'),
  },
  {
    path: '/sessions',
    name: 'Sessions',
    component: () => import('../views/Sessions.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
