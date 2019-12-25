import { mount } from '@vue/test-utils'
import MustUi from '@/components/MustUi.vue'

describe('issue #23', () => {
  const buttonId = '#btnFootnote'
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(MustUi)
  })

  test.each`
    id   | beforeText         | afterText
    ${1} | ${'特殊文字なし'}  | ${'\\footnote{特殊文字なし}'}
    ${2} | ${'特殊文字あり#'} | ${'\\footnote{特殊文字あり\\#}'}
    ${3} | ${'特殊$文字あり'} | ${'\\footnote{特殊\\$文字あり}'}
    ${4} | ${'特殊\\文字あり'} | ${'\\footnote{特殊\\textbackslash 文字あり}'}
  `('$id: $beforeText → $afterText', ({ id, beforeText, afterText }) => {
    wrapper.setData({ mustArea: beforeText })
    wrapper.find(buttonId).trigger('click')
    expect(wrapper.vm.mustArea).toBe(afterText)
  })
})
