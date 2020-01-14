import { mount } from '@vue/test-utils'
import MustUi from '@/components/MustUi.vue'

// 画面の要素の存在を確認
describe('issue #69: vuexへの移行', () => {
  // const buttonId = '#escapeSpecialCharLatex'
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(MustUi, {
      mocks: { $store: { state: { text: { resultText: '' } } } }
    })
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

// TODO: ストアのテストを追加する。
