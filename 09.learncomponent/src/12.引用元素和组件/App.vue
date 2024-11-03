<template>
  <div>
    <h2 ref="haha">ref引用</h2>
    <button @click="btnClick">获取引用的组件</button>
    <nav-bar ref="navBar"></nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"

export default {
  components: {
    NavBar
  },
  data() {
    return {
      names: ['abc', 'csb']
    }
  },
  methods: {
    btnClick() {
      console.log(this.$refs.haha);
      console.log(this.$refs.navBar.message);
      this.$refs.navBar.sayHello();
      this.$refs.navBar.$props
    }
  }
}
</script>

<style scoped>

</style>