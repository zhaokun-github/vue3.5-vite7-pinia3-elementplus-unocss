<template>
  <div class="login-bg">
    <div class="login-card">
      <h2 class="login-title">欢迎登录</h2>
      <div class="login-subtitle">广告业务后台系统</div>
      <el-form :model="form" @submit.prevent="onLogin">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-btn"
            @click="onLogin"
            :loading="loading"
            block
            >登 录</el-button
          >
        </el-form-item>
        <div v-if="error" class="login-error">{{ error }}</div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = ref({ username: "", password: "" });
const loading = ref(false);
const error = ref("");

function onLogin() {
  error.value = "";
  loading.value = true;
  setTimeout(() => {
    if (form.value.username === "admin" && form.value.password === "123456") {
      sessionStorage.setItem("isLogin", "true");
      router.replace({ path: "/" });
    } else {
      error.value = "账号或密码错误";
    }
    loading.value = false;
  }, 800);
}
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0f7fa 0%, #f8fbff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-card {
  width: 370px;
  padding: 38px 32px 32px 32px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 40px 0 #b2ebf2cc;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-title {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
  letter-spacing: 2px;
}
.login-subtitle {
  color: #90caf9;
  font-size: 1.1rem;
  margin-bottom: 28px;
  letter-spacing: 1px;
}
.login-btn {
  width: 100%;
  font-size: 1.1rem;
  border-radius: 8px;
  background: linear-gradient(90deg, #42a5f5 0%, #00eaff 100%);
  border: none;
}
.login-btn:hover {
  filter: brightness(1.08);
}
.login-error {
  color: #f44336;
  text-align: center;
  margin-top: 8px;
  font-size: 0.98rem;
}
</style>