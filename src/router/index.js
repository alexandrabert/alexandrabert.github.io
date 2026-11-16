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
  scrollBehavior(to, from) {
    // Menu cliqué depuis une page projet : descendre à la section demandée de l'accueil
    if (to.query.section) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: '#' + to.query.section, top: 100, behavior: 'smooth' }), 100)
      })
    }
    // Même page (ex. nettoyage de l'URL) : ne pas bouger
    if (to.path === from.path) return false
    return { top: 0 }
  }
})

export default router
