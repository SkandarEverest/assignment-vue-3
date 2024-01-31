import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import BookingView from '../views/BookingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component:MenuView
    },
    {
      path: '/booking',
      name: 'booking',
      component:BookingView
    }
  ],
  linkActiveClass: "active"
})

export default router
