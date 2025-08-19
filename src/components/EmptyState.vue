<template>
  <div class="empty-state">
    <img src="https://cdn.jsdelivr.net/gh/element-plus/element-plus@dev/docs/public/images/empty.svg" alt="empty" width="80" />
    <div class="desc"><slot>暂无数据</slot></div>
  </div>
</template>

<style scoped>
.empty-state {
  text-align: center;
  color: #90caf9;
  padding: 24px 0;
}
.desc {
  margin-top: 12px;
  font-size: 1rem;
}
</style>