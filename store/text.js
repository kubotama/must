export const state = () => ({
  resultText: ''
})

export const mutations = {
  set(state, text) {
    state.resultText = text
  }
}
