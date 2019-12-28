import { mount } from '@vue/test-utils'
import MustUi from '@/components/MustUi.vue'

describe('issue #26', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(MustUi)
  })

  test.each`
    id    | buttonId               | beforeText        | afterText
    ${1}  | ${'#btnChapter'}       | ${'特殊文字なし'} | ${'\\chapter{特殊文字なし}'}
    ${2}  | ${'#btnChapter'}       | ${'あいうえお#'}  | ${'\\chapter{あいうえお\\#}'}
    ${3}  | ${'#btnSection'}       | ${'特殊文字なし'} | ${'\\section{特殊文字なし}'}
    ${4}  | ${'#btnSection'}       | ${'$あいうえお'}  | ${'\\section{\\$あいうえお}'}
    ${5}  | ${'#btnSubSection'}    | ${'特殊文字なし'} | ${'\\subsection{特殊文字なし}'}
    ${6}  | ${'#btnSubSection'}    | ${'あ&いうえお'}  | ${'\\subsection{あ\\&いうえお}'}
    ${7}  | ${'#btnSubSubSection'} | ${'特殊文字なし'} | ${'\\subsubsection{特殊文字なし}'}
    ${8}  | ${'#btnSubSubSection'} | ${'あい_うえお'}  | ${'\\subsubsection{あい\\_うえお}'}
    ${9}  | ${'#btnParagraph'}     | ${'特殊文字なし'} | ${'\\paragraph{特殊文字なし}'}
    ${10} | ${'#btnParagraph'}     | ${'あいう^えお'}  | ${'\\paragraph{あいう\\textasciicircum えお}'}
    ${11} | ${'#btnSubParagraph'}  | ${'特殊文字なし'} | ${'\\subparagraph{特殊文字なし}'}
    ${12} | ${'#btnSubParagraph'}  | ${'あいうえ\\お'} | ${'\\subparagraph{あいうえ\\textbackslash お}'}
  `(
    '$id: $beforeText → $afterText',
    ({ id, buttonId, beforeText, afterText }) => {
      wrapper.setData({ mustArea: beforeText })
      wrapper.find(buttonId).trigger('click')
      expect(wrapper.vm.mustArea).toBe(afterText)
    }
  )
})
