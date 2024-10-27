// import { createApp } from 'vue'
// // @ts-ignore
// import App from './10.动态组件的使用/App.vue'
//
// import "animate.css"
//
// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "animate.css"

createApp(App).use(router).mount('#app')