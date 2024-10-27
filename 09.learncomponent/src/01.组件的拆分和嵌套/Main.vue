<template>
  <div class="header">
    <h1>banner</h1>
    <MainBanner/>
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
    </ul>
  </div>
</template>

<script>
import MainBanner from "@/01.组件的拆分和嵌套/MainBanner.vue";

export default {
  components: {MainBanner}

}
</script>

<style scoped>

</style>