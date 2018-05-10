import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fonts from '@/components/theme-fonts'
import Page from '@/components/letter-page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/fonts'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fonts',
      name: 'Fonts',
      component: Fonts
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})
