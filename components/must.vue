<template>
  <div>
    <el-input
      id="mustArea"
      ref="mustArea"
      v-model="mustArea"
      :rows="10"
      class="must-text-area"
      type="textarea"
      placeholder="変換する文字列を入力してください"
    >
    </el-input>
    <el-row>
      <span class="language-label">LaTeX:</span>
      <el-button id="escapeSpecialChar" v-on:click="clickEscapeSpecialChar"
        >特殊文字の変換</el-button
      >
    </el-row>
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
  mounted() {
    this.focusMustArea()
  },
  methods: {
    focusMustArea() {
      this.$refs.mustArea.focus()
    },
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
      this.focusMustArea()
    }
  }
}
</script>

<style scoped>
.must-text-area {
  margin-bottom: 20pt;
  border: 2px black solid;
}

.language-label {
  margin-right: 15px;
}
</style>
