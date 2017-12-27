export const state = {
  form: sessionStorage.sampleForm
}

export const mutations = {
  changeFormState (state, value) {
    state.form = { ...state.form, value }
  }
}