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
  `('$id: $elementIdが表示されている', ({ id, elementId }) => {
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
    test.each`
      id    | preText            | postText
      ${1}  | ${'#'}             | ${'\\#'}
      ${2}  | ${'$'}             | ${'\\$'}
      ${3}  | ${'%'}             | ${'\\%'}
      ${4}  | ${'&'}             | ${'\\&'}
      ${5}  | ${'~'}             | ${'\\textasciitilde'}
      ${6}  | ${'_'}             | ${'\\_'}
      ${7}  | ${'^'}             | ${'\\textasciicircum'}
      ${8}  | ${'\\'}            | ${'\\textbackslash'}
      ${9}  | ${'{'}             | ${'\\{'}
      ${10} | ${'}'}             | ${'\\}'}
      ${11} | ${'##'}            | ${'\\#\\#'}
      ${12} | ${'$$'}            | ${'\\$\\$'}
      ${13} | ${'%%%'}           | ${'\\%\\%\\%'}
      ${14} | ${'&&&'}           | ${'\\&\\&\\&'}
      ${15} | ${'~_'}            | ${'\\textasciitilde \\_'}
      ${16} | ${'^\\'}           | ${'\\textasciicircum \\textbackslash'}
      ${17} | ${'{}#'}           | ${'\\{\\}\\#'}
      ${18} | ${'#$%'}           | ${'\\#\\$\\%'}
      ${19} | ${'$abc'}          | ${'\\$abc'}
      ${20} | ${'%xyz'}          | ${'\\%xyz'}
      ${21} | ${'12345&'}        | ${'12345\\&'}
      ${22} | ${'67890~'}        | ${'67890\\textasciitilde'}
      ${23} | ${'あいう_えお'}   | ${'あいう\\_えお'}
      ${24} | ${'かき^くけこ'}   | ${'かき\\textasciicircum くけこ'}
      ${25} | ${'一\\二#三四五'} | ${'一\\textbackslash 二\\#三四五'}
      ${26} | ${'六七$八九%十'}  | ${'六七\\$八九\\%十'}
      ${27} | ${'あいうえお'}    | ${'あいうえお'}
      ${28} | ${'abcdefghijklm'} | ${'abcdefghijklm'}
      ${29} | ${'0123456789'}    | ${'0123456789'}
      ${30} | ${'a\nb'}          | ${'a\nb'}
      ${31} | ${'あいう\nabc\n'} | ${'あいう\nabc'}
      ${32} | ${'abc#\nxyz&\n'}  | ${'abc\\#\nxyz\\&'}
      ${33} | ${'\n$#&\nあいう'} | ${'\\$\\#\\&\nあいう'}
    `('escapeLatex: $id $preText -> $postText', ({ id, preText, postText }) => {
      store.replaceState({ formattedText: preText })
      action = 'escapeLatex'
      const state = store.state
      testedAction({ commit, state })
      expect(store.getters.formattedText).toBe(postText)
    })
  })
})

// TODO: ストアのテストを追加する。
