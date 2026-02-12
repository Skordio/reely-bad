import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/home.vue'
import WarGamesPage from '../pages/war-games.vue'
import ScoobyDooPage from '../pages/scooby-doo.vue'
import GoodWillHuntingPage from '../pages/good-will-hunting.vue'
import TheMatrixPage from '../pages/the-matrix.vue'
import InceptionPage from '../pages/inception.vue'
import JamesBondPage from '../pages/james-bond.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/war-games',
      name: 'war-games',
      component: WarGamesPage
    },
    {
      path: '/scooby-doo',
      name: 'scooby-doo',
      component: ScoobyDooPage
    },
    {
      path: '/good-will-hunting',
      name: 'good-will-hunting',
      component: GoodWillHuntingPage
    },
    {
      path: '/the-matrix',
      name: 'the-matrix',
      component: TheMatrixPage
    },
    {
      path: '/inception',
      name: 'inception',
      component: InceptionPage
    },
    {
      path: '/james-bond',
      name: 'james-bond',
      component: JamesBondPage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
