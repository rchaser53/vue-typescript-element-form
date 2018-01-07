import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementForm from './ElementForm.vue'
import VeeForm from './VeeValidateForm.vue'

Vue.use(VueRouter)

export const router =  new VueRouter({
  mode: 'history',
  routes: [
    { path: '/element', component: ElementForm },
    { path: '/vee', component: VeeForm }
  ]
})