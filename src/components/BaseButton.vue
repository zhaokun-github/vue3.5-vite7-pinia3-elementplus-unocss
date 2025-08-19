<template>
  <button :class="['base-btn', type]" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'default' | 'danger',
  disabled?: boolean
}>()
</script>

<style scoped>
.base-btn {
  padding: 8px 20px;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.base-btn.primary {
  background: linear-gradient(90deg, #42a5f5 0%, #00eaff 100%);
  color: #fff;
}
.base-btn.default {
  background: #f5f5f5;
  color: #333;
}
.base-btn.danger {
  background: #f44336;
  color: #fff;
}
.base-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>