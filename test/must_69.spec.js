import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as mustUi from '~/store/mustUi'
import MustUi from '@/components/MustUi.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// 画面の要素の存在を確認
describe('MustUi.vue', () => {
  let storeMock
  let store
  let wrapper
  beforeEach(() => {
    storeMock = {
      namespaced: true,
      getters: {
        resultText: () => ''
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
    ${1} | ${'#btnEscapeSpecialCharLatex'}
    ${2} | ${'#mustArea'}
    ${3} | ${'#resultText'}
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
    test('テキストの値を取得', () => {
      store.replaceState({ resultText: 'abc' })
      expect(store.getters.resultText).toBe('abc')
    })
  })
})

// TODO: ストアのテストを追加する。
