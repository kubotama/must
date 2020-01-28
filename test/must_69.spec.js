import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as text from '@/store/text'
import MustUi from '@/components/MustUi.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// let action
// const testedAction = (context = {}, payload = {}) => {
//   return text.actions[action](context, payload)
// }

// 画面の要素の存在を確認
describe('issue #69: vuexへの移行', () => {
  // const buttonId = '#escapeSpecialCharLatex'
  let storeMock
  let store
  let wrapper
  beforeEach(() => {
    storeMock = {
      namespaced: true,
      getters: {
        resultText: () => 'abc'
      }
    }
    store = new Vuex.Store({
      modules: {
        resultText: storeMock
      }
    })
    wrapper = null
    wrapper = shallowMount(MustUi, { store, localVue })
  })

  test.each`
    id   | elementId
    ${1} | ${'#btnEscapeSpecialCharLatex'}
    ${2} | ${'#mustArea'}
    ${3} | ${'#resultText'}
  `('$id: $elementIdが表示されていることを確認', ({ id, elementId }) => {
    expect(wrapper.find(elementId).isVisible()).toBeTruthy()
  })
})

describe('store/text.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(text)
  })

  describe('getters', () => {
    test('テキストの値を取得', () => {
      store.replaceState({ resultText: 'abc' })
      expect(store.getters.resultText).toBe('abc')
    })
  })
})

// TODO: ストアのテストを追加する。
