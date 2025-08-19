<!-- filepath: e:\cursor项目\vue-alien-signals-app\src\App.vue -->
<template>
  <el-container>
    <el-header>
      <el-menu :default-active="$route.path" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/manage">管理页</el-menu-item>
        <el-menu-item index="/audit">审核页</el-menu-item>
        <el-menu-item index="/visual">可视化</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "App" });
</script>