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
    id   | beforeText | afterText
    ${1} | ${'*'}     | ${'\\*'}
  `(
    '$id: 特殊文字1文字: $beforeText -> $afterText',
    ({ id, beforeEach, afterText }) => {
      wrapper.setData({ mustArea: '*' })
      wrapper.find(buttonId).trigger('click')
      expect(wrapper.vm.mustArea).toBe('\\*')
    }
  )
})
