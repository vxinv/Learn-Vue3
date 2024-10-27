<template>
  <div class="app-container">
    <div class="sidebar">
      <h2>Vue3 学习导航</h2>
      <nav>
        <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="nav-item"
        >
          {{ route.name }}
        </router-link>
      </nav>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const routes = router.options.routes

    return {
      routes
    }
  }
}
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar h2 {
  margin-bottom: 20px;
  color: #333;
}

.nav-item {
  display: block;
  padding: 10px;
  margin: 5px 0;
  color: #666;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-item:hover {
  background-color: #e0e0e0;
}

.router-link-active {
  background-color: #42b983;
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>