import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as mustUi from '~/store/mustUi'
import MustUi from '@/components/MustUi.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let action
const testedAction = (context = {}, payload = {}) => {
  return mustUi.actions[action](context, payload)
}

// 画面の要素の存在を確認
describe('MustUi.vue', () => {
  let storeMock
  let store
  let wrapper
  beforeEach(() => {
    storeMock = {
      namespaced: true,
      getters: {
        formattedText: () => ''
      }
    }
    store = new Vuex.Store({
      modules: {
        mustUi: storeMock
      }
    })
    wrapper = null
    wrapper = shallowMount(MustUi, { store, localVue })
  })

  test.each`
    id   | elementId
    ${1} | ${'#btnEscapeLatex'}
    ${2} | ${'#inputText'}
    ${3} | ${'#formattedText'}
  `('$id: $elementIdが表示されていることを確認', ({ id, elementId }) => {
    expect(wrapper.find(elementId).isVisible()).toBeTruthy()
  })
})

describe('store/mustUi.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(mustUi)
  })

  describe('getters', () => {
    test('formattedText', () => {
      store.replaceState({ formattedText: 'abc' })
      expect(store.getters.formattedText).toBe('abc')
    })
  })

  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })
    test('updateTest', () => {
      expect(store.getters.formattedText).toBe('')
      action = 'updateText'
      testedAction({ commit }, 'xyz')
      expect(store.getters.formattedText).toBe('xyz')
    })
  })
})

// TODO: ストアのテストを追加する。
