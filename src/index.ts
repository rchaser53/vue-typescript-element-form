import Vue from 'vue'
import Vuex from 'vuex'
import Form from './ElementForm.vue'
import store from './store'

import { router } from './router'
import App from './entry.vue'

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
})
