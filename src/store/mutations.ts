import { parse } from 'date-fns';

export const initialFormValue = {
	name: '',
	price: 0,
	radio: '',
	region: '',
	date: null
};

export const parseSessionStorageValue = (key: string): { [key: string]: any } => {
	const storageValue = sessionStorage.getItem(key);
	if (storageValue == null) return initialFormValue;

	let storageState = JSON.parse(storageValue);
	storageState.date = storageState.date == null ? null : parse(storageState.date);
	return storageState;
};

export const state = {
	form: parseSessionStorageValue('sampleForm')
};

export const mutations = {
	changeFormState(state, obj) {
		state.form = { ...state.form, ...obj };
		sessionStorage.setItem('sampleForm', JSON.stringify(state.form));
	}
};
