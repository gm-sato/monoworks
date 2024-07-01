import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import About from '@/components/pages/About.vue'
import Contact from '@/components/pages/Contact.vue'
import ApiData from '@/components/pages/ApiData.vue'
import List from '@/components/pages/List.vue'
import GsapExample from '@/components/pages/GsapExample.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/scenario/my-vue/', // ベースURL
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/api-data',
      name: 'ApiData',
      component: ApiData
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/gsap-example',
      name: 'GsapExample',
      component: GsapExample
    }
  ]
})
