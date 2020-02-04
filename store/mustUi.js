export const state = () => ({
  formattedText: ''
})

export const mutations = {
  set: (state, { text }) => (state.formattedText = text)
}

export const getters = {
  formattedText: (state) => state.formattedText
}
