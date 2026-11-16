import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // Ancienne adresse du projet d'animation de logo (avant le renommage)
    path: '/project/disclamer',
    redirect: '/project/intv-animation'
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
