import { mount } from '@vue/test-utils'
import MustUi from '@/components/MustUi.vue'

describe('issue #69: vuexへの移行', () => {
  // const buttonId = '#escapeSpecialCharLatex'
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(MustUi, {
      mocks: { $store: { state: { text: { resultText: '' } } } }
    })
  })

  // test.each`
  //   id    | beforeText         | afterText
  //   ${1}  | ${'#'}             | ${'\\#'}
  //   ${2}  | ${'$'}             | ${'\\$'}
  //   ${3}  | ${'%'}             | ${'\\%'}
  //   ${4}  | ${'&'}             | ${'\\&'}
  //   ${5}  | ${'~'}             | ${'\\textasciitilde'}
  //   ${6}  | ${'_'}             | ${'\\_'}
  //   ${7}  | ${'^'}             | ${'\\textasciicircum'}
  //   ${8}  | ${'\\'}            | ${'\\textbackslash'}
  //   ${9}  | ${'{'}             | ${'\\{'}
  //   ${10} | ${'}'}             | ${'\\}'}
  //   ${11} | ${'##'}            | ${'\\#\\#'}
  //   ${12} | ${'$$'}            | ${'\\$\\$'}
  //   ${13} | ${'%%%'}           | ${'\\%\\%\\%'}
  //   ${14} | ${'&&&'}           | ${'\\&\\&\\&'}
  //   ${15} | ${'~_'}            | ${'\\textasciitilde \\_'}
  //   ${16} | ${'^\\'}           | ${'\\textasciicircum \\textbackslash'}
  //   ${17} | ${'{}#'}           | ${'\\{\\}\\#'}
  //   ${18} | ${'#$%'}           | ${'\\#\\$\\%'}
  //   ${19} | ${'$abc'}          | ${'\\$abc'}
  //   ${20} | ${'%xyz'}          | ${'\\%xyz'}
  //   ${21} | ${'12345&'}        | ${'12345\\&'}
  //   ${22} | ${'67890~'}        | ${'67890\\textasciitilde'}
  //   ${23} | ${'あいう_えお'}   | ${'あいう\\_えお'}
  //   ${24} | ${'かき^くけこ'}   | ${'かき\\textasciicircum くけこ'}
  //   ${25} | ${'一\\二#三四五'} | ${'一\\textbackslash 二\\#三四五'}
  //   ${26} | ${'六七$八九%十'}  | ${'六七\\$八九\\%十'}
  //   ${27} | ${'あいうえお'}    | ${'あいうえお'}
  //   ${28} | ${'abcdefghijklm'} | ${'abcdefghijklm'}
  //   ${29} | ${'0123456789'}    | ${'0123456789'}
  //   ${30} | ${'a\nb'}          | ${'a\nb'}
  //   ${31} | ${'あいう\nabc\n'} | ${'あいう\nabc'}
  //   ${32} | ${'abc#\nxyz&\n'}  | ${'abc\\#\nxyz\\&'}
  //   ${33} | ${'\n$#&\nあいう'} | ${'\\$\\#\\&\nあいう'}
  // `('$id: $beforeTextを$afterTextに変換', ({ id, beforeText, afterText }) => {
  //   wrapper.setData({ mustArea: beforeText })
  //   wrapper.find(buttonId).trigger('click')
  //   expect(wrapper.vm.resultText).toBe(afterText)
  // })
  test.each`
    id   | elementId
    ${1} | ${'#btnEscapeSpecialCharLatex'}
    ${2} | ${'#mustArea'}
    ${3} | ${'#resultText'}
  `('$id: $elementIdの存在を確認', ({ id, elementId }) => {
    expect(wrapper.find(elementId)).toBeDefined()
  })
})

// TODO: ストアのテストを追加する。
