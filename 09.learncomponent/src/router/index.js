import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/01',
        name: '01.组件的拆分和联系',
        component: () => import('../01.组件的拆分和嵌套/App.vue')
    },
    {
        path: '/02',
        name: '02.组件的css作用域',
        component: () => import('../02.组件的css作用域/App.vue')
    },
    {
        path: '/03',
        name: '03.父子组件通讯',
        component: () => import('../03.父子组件通讯/App.vue')
    },
    {
        path: '/04',
        name: '04.子组件传父组件',
        component: () => import('../04.子组件传父组件/App.vue')
    },
    {
        path: '/05',
        name: '05.非父子组件通信',
        component: () => import('../05.非父子组件通信/App.vue')
    },
    {
        path: '/06',
        name: '06.事件总线的使用',
        component: () => import('../06.事件总线的使用/App.vue')
    },
    {
        path: '/07',
        name: '07.插槽的基本使用',
        component: () => import('../07.插槽的基本使用/App.vue')
    },
    {
        path: '/08',
        name: '08.具名插槽的使用',
        component: () => import('../08.具名插槽的使用/App.vue')
    },
    {
        path: '/09',
        name: '09.作用域插槽的使用',
        component: () => import('../09.作用域插槽的使用/App.vue')
    },
    {
        path: '/10',
        name: '10.动态组件的使用',
        component: () => import('../10.动态组件的使用/App.vue')
    },
    {
        path: '/11',
        name: '11.异步组件的使用',
        component: () => import('../11.异步组件的使用/App.vue')
    },
    {
        path: '/12',
        name: '12.引用元素和组件',
        component: () => import('../12.引用元素和组件/App.vue')
    },
    {
        path: '/13',
        name: '13.组件的生命周期',
        component: () => import('../13.组件的生命周期/App.vue')
    },
    {
        path: '/14',
        name: '14.组件v-model',
        component: () => import('../14.组件v-model/App.vue')
    },
    {
        path: '/15',
        name: '15.动画的基本使用',
        component: () => import('../15.动画的基本使用/App.vue')
    },
    {
        path: '/16',
        name: '16.结合第三方使用动画',
        component: () => import('../16.结合第三方库使用动画/App.vue')
    }

    // ... 其他路由配置
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router