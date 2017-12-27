export const state = {
  form: sessionStorage.sampleForm || {}
}

export const mutations = {
  changeFormState (state, obj) {
    state.form = { ...state.form, ...obj }
  }
}