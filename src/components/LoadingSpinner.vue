<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid #e0f7fa;
  border-top: 4px solid #42a5f5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: auto;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>