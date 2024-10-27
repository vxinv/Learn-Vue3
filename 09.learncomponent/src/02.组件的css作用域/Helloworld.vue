<template>
  <div>
    不加div可能css样式会被污染
    <h2>hello world的样式</h2>
  </div>
  <h2>hello world的样式</h2>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>