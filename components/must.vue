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
    clickEscapeSpecialChar() {
      this.mustArea = '\\#'
    }
  }
}
</script>
