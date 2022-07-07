import { createApp } from 'vue'
// @ts-ignore
import App from './03.RefAPI的补充/App.vue'

const app = createApp(App);

// 通过app的mixin方法进行全局混入
// app.mixin({
//   data() {
//     return {}
//   },
//   methods: {

//   },
//   created() {
//     console.log("全局混入");
//   }
// })



app.mount('#app')
