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
  },
  escapeLatex({ commit, state }) {
    let text = state.formattedText
    text = text.replace(/\\/g, '\\textbackslash ')
    text = text.replace(/#/g, '\\#')
    text = text.replace(/\$/g, '\\$')
    text = text.replace(/%/g, '\\%')
    text = text.replace(/&/g, '\\&')
    text = text.replace(/~/g, '\\textasciitilde ')
    text = text.replace(/_/g, '\\_')
    text = text.replace(/\^/g, '\\textasciicircum ')
    text = text.replace(/{/g, '\\{')
    text = text.replace(/}/g, '\\}')

    text = text.trim()
    commit('updateText', { text })
  }
}
