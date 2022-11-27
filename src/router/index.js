import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/Profile.vue'
import Projects from '../components/Projects.vue'
import Certificates from '../components/Certificates.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: Profile
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Certificates',
      name: 'Certificates',
      component: Certificates
    },
  ]
})

export default router
