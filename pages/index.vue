<template>
  <div class="container">
    <MustUi />
  </div>
</template>

<script>
import MustUi from '~/components/MustUi.vue'

export default {
  components: {
    MustUi
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
