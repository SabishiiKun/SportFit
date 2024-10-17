import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/home', 
    name: 'home',
    component: HomeView },
  { 
    path: '/about', 
    name: 'about',
    component: AboutView
  },
]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;