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
      <el-button id="btnChapter" @click="clickChapter">chapter</el-button>
      <el-button-group>
        <el-button id="btnSection" @click="clickSection">section</el-button>
        <el-button>subsection</el-button>
        <el-button>subsubsection</el-button>
        <el-button>paragraph</el-button>
        <el-button>subparagraph</el-button>
      </el-button-group>
      <el-button>href</el-button>
      <el-button id="btnFootnote" @click="clickFootnote">脚注</el-button>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Input from 'element-ui'

Vue.use(Input)

export default {
  name: 'MustUi',
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
    nlToSpace(text) {
      text = text.replace(/\n+/g, ' ')
      return text
    },
    clickEscapeSpecialChar() {
      this.mustArea = this.escapeSpecialChar(this.mustArea)
      this.focusMustArea()
    },
    clickFootnote() {
      this.mustArea =
        '\\footnote{' +
        this.nlToSpace(this.escapeSpecialChar(this.mustArea)) +
        '}'
      this.focusMustArea()
    },
    clickChapter() {
      this.mustArea =
        '\\chapter{' +
        this.nlToSpace(this.escapeSpecialChar(this.mustArea)) +
        '}'
      this.focusMustArea()
    },
    clickSection() {
      this.mustArea =
        '\\section{' +
        this.nlToSpace(this.escapeSpecialChar(this.mustArea)) +
        '}'
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
