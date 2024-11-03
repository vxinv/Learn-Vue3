<template>
  <div style="background: #dce9ea">
    <h2>{{message}}</h2>
    <button @click="changeMessage">修改本组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 1
      }
    },
    methods: {
      changeMessage() {
        this.message++
      }
    },
    beforeCreate() {
      console.log("beforcreated");
    },
    created() {
      console.log(("created"));
    },
    beforeMount() {
      console.log("beforeMount");
    },
    mounted() {
      console.log("mounted");
    },
    beforeUnmount() {
      console.log("beforeUnmount");
    },
    unmount() {
      console.log("unmount");
    },
    beforeUpdate() {
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },

  }
</script>

<style scoped>

</style>