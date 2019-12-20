<template>
  <div>
    <el-input
      id="mustArea"
      ref="mustArea"
      v-model="mustArea"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    >
    </el-input>
    <el-button id="escapeSpecialChar" v-on:click="clickEscapeSpecialChar"
      >特殊文字の変換</el-button
    >
  </div>
</template>

<script>
import Vue from 'vue'
import Input from 'element-ui'

Vue.use(Input)

export default {
  data() {
    return {
      mustArea: ''
    }
  },
  methods: {
    escapeSpecialChar(text) {
      text = text.replace(/\\/g, '\\textbackslash ')
      // eslint-disable-next-line no-useless-escape
      text = text.replace(/#/g, '\\#')
      text = text.replace(/\$/g, '\\$')
      text = text.replace(/%/g, '\\%')
      text = text.replace(/&/g, '\\&')
      text = text.replace(/~/g, '\\textasciitilde ')
      text = text.replace(/_/g, '\\_')
      text = text.replace(/\^/g, '\\textasciicircum ')
      text = text.replace(/{/g, '\\{')
      text = text.replace(/}/g, '\\}')

      text = text.trim()
      return text
    },
    clickEscapeSpecialChar() {
      this.mustArea = this.escapeSpecialChar(this.mustArea)
    }
  }
}
</script>
