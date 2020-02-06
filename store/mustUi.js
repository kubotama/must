export const state = () => ({
  formattedText: ''
})

export const mutations = {
  updateText: (state, { text }) => (state.formattedText = text)
}

export const getters = {
  formattedText: (state) => state.formattedText
}

export const actions = {
  updateText({ commit, state }, text) {
    commit('updateText', { text })
  }
}
