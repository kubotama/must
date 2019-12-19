import { mount } from '@vue/test-utils'
import Must from '@/components/must.vue'

describe('特殊文字を変換', () => {
  const buttonId = '#escapeSpecialChar'
  let wrapper
  beforeEach(() => {
    wrapper = null
    wrapper = mount(Must)
  })

  test('特殊文字を含む文字列を変換', () => {
    wrapper.setData({ mustArea: '#' })
    wrapper.find(buttonId).trigger('click')
    expect(wrapper.vm.mustArea).toBe('\\#')
  })
})
