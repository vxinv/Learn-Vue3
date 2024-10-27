<template>
  <div>
    <!-- 方式一：父组件注册一些自定义的attribute直接传数据，子组件通过props接受 -->
    <!-- <show-message title="hhaha" content="dfls"></show-message> -->
    <!-- 方式二：父组件注册一些自定义的attribute传递data中的数据，如数组、对象等类型，子组件通过props接受 -->
    <ShowMessage :title="title" :content="content"></ShowMessage>
    <ShowMessage/>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        title: "标题",
        content: {
          name: '姓名',
          age: 19
        }
      }
    }
    
  }
</script>
<style scoped>
</style>