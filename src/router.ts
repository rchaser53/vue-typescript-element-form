import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementForm from './components/ElementForm.vue';

const VeeForm = Vue.extend({
	template: '<div>i cannot recommend it. use Element form</div>'
})

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/element', component: ElementForm },
		{ path: '/vee', component: VeeForm }
	]
});
