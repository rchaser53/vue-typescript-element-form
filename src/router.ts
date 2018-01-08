import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementForm from './components/ElementForm.vue'
import VeeForm from './components/VeeValidateForm.vue'

Vue.use(VueRouter)

export const router =  new VueRouter({
  mode: 'history',
  routes: [
    { path: '/element', component: ElementForm },
    { path: '/vee', component: VeeForm }
  ]
})