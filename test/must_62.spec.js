import { mount } from '@vue/test-utils'
import MustUi from '@/components/MustUi.vue'

describe('issue #62: Markdownの特殊文字をエスケープ処理', () => {
  const buttonId = '#btnEscapeSpecialCharMd'
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(MustUi)
  })

  test.each`
    id    | beforeText | afterText
    ${1}  | ${'*'}     | ${'\\*'}
    ${2}  | ${'_'}     | ${'\\_'}
    ${3}  | ${'\\'}    | ${'\\\\'}
    ${4}  | ${'`'}     | ${'\\`'}
    ${5}  | ${'#'}     | ${'\\#'}
    ${6}  | ${'+'}     | ${'\\+'}
    ${7}  | ${'-'}     | ${'\\-'}
    ${8}  | ${'.'}     | ${'\\.'}
    ${9}  | ${'!'}     | ${'\\!'}
    ${10} | ${'{'}     | ${'\\{'}
    ${11} | ${'}'}     | ${'\\}'}
    ${12} | ${'['}     | ${'\\['}
    ${13} | ${']'}     | ${'\\]'}
    ${14} | ${'('}     | ${'\\('}
    ${15} | ${')'}     | ${'\\)'}
  `(
    '$id: 特殊文字1文字: $beforeText -> $afterText',
    ({ id, beforeText, afterText }) => {
      wrapper.setData({ mustArea: beforeText })
      wrapper.find(buttonId).trigger('click')
      expect(wrapper.vm.mustArea).toBe(afterText)
    }
  )

  test.each`
    id   | beforeText    | afterText
    ${1} | ${'**'}       | ${'\\*\\*'}
    ${2} | ${'*!'}       | ${'\\*\\!'}
    ${3} | ${'a*'}       | ${'a\\*'}
    ${4} | ${'abc**xyz'} | ${'abc\\*\\*xyz'}
  `(
    '$id: 特殊文字2文字: $beforeText -> $afterText',
    ({ id, beforeText, afterText }) => {
      wrapper.setData({ mustArea: beforeText })
      wrapper.find(buttonId).trigger('click')
      expect(wrapper.vm.mustArea).toBe(afterText)
    }
  )
})
