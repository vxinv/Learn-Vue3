<template>
  <div>
    <h2>app</h2>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./Helloworld.vue"
  export default {
    components: {
      HelloWorld
    }
    
  }
</script>

<style scoped>
h2 {
  color: red;
}
</style>