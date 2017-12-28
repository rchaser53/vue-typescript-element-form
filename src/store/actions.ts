export const actions = {
  changeFormState: async function ({ commit, dispatch }, value) {
    await dispatch('changeFormStateAsync')
    commit('changeFormState', value)
    console.log(value)
  },
  changeFormStateAsync: async function(context, value) {
    const hoge = await asyncFunction()
    console.log(hoge)
  },
}

const asyncFunction = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('nya-n')
    }, 1000)
  })
}