import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/BasePage',
      name: 'BasePage',
      component: () => import('./views/BasePage.vue')
    },
    {
      path: '/EditPage',
      name: 'EditPage',
      component: () => import('./views/EditPage.vue'),
      children: [
        {
          path: '/WaitPage',
          name: 'WaitPage',
          component: () => import('./views/WaitPage.vue')
        },
        {
          path: '/GladPage',
          name: 'GladPage',
          component: () => import('./views/GladPage.vue')
        },
        {
          path: '/SeraPage',
          name: 'SeraPage',
          component: () => import('./views/SeraPage.vue')
        },
        {
          path: '/MagePage',
          name: 'MagePage',
          component: () => import('./views/MagePage.vue')
        },
        {
          path: '/WElfPage',
          name: 'WElfPage',
          component: () => import('./views/WElfPage.vue')
        },
        {
          path: '/DElfPage',
          name: 'DElfPage',
          component: () => import('./views/DElfPage.vue')
        },
        {
          path: '/VampPage',
          name: 'VampPage',
          component: () => import('./views/VampPage.vue')
        },
        {
          path: '/DwarfPage',
          name: 'DwarfPage',
          component: () => import('./views/DwarfPage.vue')
        },
        {
          path: '/DemonPage',
          name: 'DemonPage',
          component: () => import('./views/DemonPage.vue')
        }
      ]
    }
  ]
})
