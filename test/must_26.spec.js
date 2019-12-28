import { mount } from '@vue/test-utils'
import MustUi from '@/components/MustUi.vue'

describe('issue #26', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(MustUi)
  })

  test.each`
    id   | buttonId         | beforeText        | afterText
    ${1} | ${'#btnChapter'} | ${'特殊文字なし'} | ${'\\chapter{特殊文字なし}'}
    ${2} | ${'#btnChapter'} | ${'あいうえお#'}  | ${'\\chapter{あいうえお\\#}'}
    ${3} | ${'#btnSection'} | ${'特殊文字なし'} | ${'\\section{特殊文字なし}'}
    ${4} | ${'#btnSection'} | ${'$あいうえお'}  | ${'\\section{\\$あいうえお}'}
  `(
    '$id: $beforeText → $afterText',
    ({ id, buttonId, beforeText, afterText }) => {
      wrapper.setData({ mustArea: beforeText })
      wrapper.find(buttonId).trigger('click')
      expect(wrapper.vm.mustArea).toBe(afterText)
    }
  )
})
