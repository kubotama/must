<template>
  <div>
    <el-row>
      <el-input
        id="resultText"
        ref="resultText"
        v-model="resultText"
        rows="10"
        cols="50"
        class="must-text-area"
        type="textarea"
        readonly
      >
      </el-input>
    </el-row>
    <el-row>
      <el-input
        id="mustArea"
        ref="mustArea"
        v-model="mustArea"
        rows="10"
        cols="50"
        class="must-text-area"
        type="textarea"
        placeholder="変換する文字列を入力してください"
      >
      </el-input>
    </el-row>
    <el-row>
      <span class="language-label">LaTeX:</span>
      <el-button
        id="btnEscapeSpecialCharLatex"
        v-on:click="clickescapeSpecialCharLatex"
        >特殊文字の変換</el-button
      >
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Input from 'element-ui'

Vue.use(Input)

export default {
  name: 'MustUi',
  data() {
    return {
      mustArea: ''
    }
  },
  computed: {
    ...mapGetters('text', ['resultText'])
  },
  methods: {
    clickescapeSpecialCharLatex() {
      this.mustArea = this.escapeSpecialCharLatex(this.mustArea)
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
