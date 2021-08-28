import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg.vue'
import Aut from '@/components/Aut.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Aut',
      component: Aut
    }
  ]
})
