import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import Blog from '../views/Blog.vue'

const routes = [
  { path: '/home', 
    name: 'home',
    component: HomeView },
  { 
    path: '/about', 
    name: 'about',
    component: AboutView
  },
  { 
    path: '/contact', 
    name: 'contact',
    component: Contact
  },
  { 
    path: '/services', 
    name: 'services',
    component: Services
  },
  { 
    path: '/blog', 
    name: 'blog',
    component: Blog
  },
]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;