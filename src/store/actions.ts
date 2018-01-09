import { throttle } from 'lodash';

export const actions = {
	changeFormState: async function({ commit, dispatch }, value) {
		await dispatch('changeFormStateAsync');
		commit('changeFormState', value);
	},
	changeFormStateAsync: async function(context, value) {
		const hoge = await asyncFunction();
	}
};

const throttleNyan = () => {
	return throttle((resolve, reject) => {
		setTimeout(() => {
			resolve('nya-n');
		}, 1000);
	}, 1000);
};

const asyncFunction = (): Promise<string> => {
	return new Promise(throttleNyan());
};
