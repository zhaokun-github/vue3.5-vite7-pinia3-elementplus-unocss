<!-- filepath: e:\cursor项目\vue-alien-signals-app\src\views\Home.vue -->
<template>
  <el-container style="height: 400px; border: 1px solid #eee;">
    <el-aside width="200px">
      <el-menu
        :default-active="activeMenu"
        @select="handleSelect"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">仪表盘</el-menu-item>
        <el-menu-item index="2">用户管理</el-menu-item>
        <el-menu-item index="3">系统设置</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div v-if="activeMenu === '1'">
        <h3>仪表盘</h3>
        <p>这里是仪表盘内容的模拟。</p>
      </div>
      <div v-else-if="activeMenu === '2'">
        <h3>用户管理</h3>
        <p>这里是用户管理内容的模拟。</p>
      </div>
      <div v-else-if="activeMenu === '3'">
        <h3>系统设置</h3>
        <p>这里是系统设置内容的模拟。</p>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const activeMenu = ref('1')
    const handleSelect = (key: string) => {
      activeMenu.value = key
    }
    return { activeMenu, handleSelect }
  }
})
</script>