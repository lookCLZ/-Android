/*global Vue*/
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
