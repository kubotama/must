export const state = () => ({
  resultText: ''
})

export const mutations = {
  set: (state, { text }) => (state.resultText = text)
}

export const getters = {
  resultText: (state) => state.resultText
}
