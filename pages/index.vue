<template>
  <div class="container">
    <div>
      <Must />
    </div>
  </div>
</template>

<script>
import Must from '~/components/must.vue'

export default {
  components: {
    Must
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
