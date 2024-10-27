<template>
  <div class="slot">
    <h2>组件开始</h2>
    <slot>
      <i>默认值1</i>
    </slot>
    <slot>
      <i>默认值2</i>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.slot {
  background: #6b778c;
  margin-bottom: 20px;
}
</style>