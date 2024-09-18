import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

import Suspect from '../views/Suspect.vue'
import shimizu from '../views/suspect/shimizu.vue'
import yanase from '../views/suspect/yanase.vue'
import kimoto from '../views/suspect/kimoto.vue'
import meiji from '../views/suspect/meiji.vue'

import files from '../views/files.vue'
import episode from '../views/files/episode.vue'
import materials from '../views/files/materials.vue'
import report from '../views/files/report.vue'
import scene from '../views/files/scene.vue'
import statement from '../views/files/statement.vue'

import story from '../views/story.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  //suspect
  {
    path: '/suspect',
    name: 'Suspect',
    component: Suspect
  },
  {
    path: '/suspect/shimizu',
    name: 'shimizu',
    component: shimizu
  },
  {
    path: '/suspect/yanase',
    name: 'yanase',
    component: yanase
  },
  {
    path: '/suspect/kimoto',
    name: 'kimoto',
    component: kimoto
  },
  {
    path: '/suspect/meiji',
    name: 'meiji',
    component: meiji
  },
  //files
  {
    path: '/files',
    name: 'files',
    component: files
  },
  {
    path: '/files/episode',
    name: 'episode',
    component: episode
  },
  {
    path: '/files/materials',
    name: 'materials',
    component: materials
  },
  {
    path: '/files/report',
    name: 'report',
    component: report
  },
  {
    path: '/files/scene',
    name: 'scene',
    component: scene
  },
  {
    path: '/files/statement',
    name: 'statement',
    component: statement
  },
  {
    path: '/story',
    name: 'story',
    component: story
  }
]

const router = createRouter({
  history: createWebHistory('/keigan'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 常にページトップにスクロール
    return {
      top: 0
    }
  }
})

export default router
