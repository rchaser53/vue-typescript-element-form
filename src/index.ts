import Vue from 'vue'
import Vuex from 'vuex'
import Form from './ElementForm.vue'
import store from './store'

Vue.use(Vuex);

// mount
new Vue({
  el: '#app',
  store,
  render: h => h(Form)
})
