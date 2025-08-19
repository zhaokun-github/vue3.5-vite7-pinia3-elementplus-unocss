<!-- filepath: e:\cursor项目\vue-alien-signals-app\src\views\Audit.vue -->
<template>
  <div class="audit-page">
    <h2 class="audit-title">内容审核列表</h2>
    <div style="text-align: right; color: #42a5f5; margin-bottom: 12px">
      已通过数量：{{ auditStore.passedCount }}
    </div>
    <div style="margin-bottom: 16px">
      <button
        @click="auditStore.addOne"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 border-0"
      >
        点我加加
      </button>
      <span style="margin-left: 12px; color: #42b983">
        计数器：{{ auditStore.count }}
      </span>
    </div>
    <div style="display: grid; place-items: center">
      <div>88888</div>
      <span>123</span>
    </div>
    <el-table :data="tableData" stripe border class="audit-table">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag
            :type="
              row.status === '待审核'
                ? 'warning'
                : row.status === '已通过'
                ? 'success'
                : 'danger'
            "
          >
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button size="small" type="success" @click="pass(row)"
            >通过</el-button
          >
          <el-button size="small" type="danger" @click="reject(row)"
            >驳回</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="audit-pagination"
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="5"
      :current-page="1"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import request from "@/utils/request";
import { useAuditStore } from "@/store/index"; // 引入store

const auditStore = useAuditStore(); // 使用store
const tableData = ref<any[]>([]);

async function fetchAuditList() {
  try {
    const res = await request.get("/mock/audit-list");
    tableData.value = res.data || [
      { id: 1, title: "广告内容A", author: "张三", status: "待审核" },
      { id: 2, title: "广告内容B", author: "李四", status: "已通过" },
      { id: 3, title: "广告内容C", author: "王五", status: "待审核" },
      { id: 4, title: "广告内容D", author: "赵六", status: "已驳回" },
      { id: 5, title: "广告内容E", author: "小明", status: "待审核" },
    ];
    // 初始化统计
    auditStore.passedCount = tableData.value.filter(
      (item) => item.status === "已通过"
    ).length;
  } catch {
    tableData.value = [
      { id: 1, title: "广告内容A", author: "张三", status: "待审核" },
      { id: 2, title: "广告内容B", author: "李四", status: "已通过" },
      { id: 3, title: "广告内容C", author: "王五", status: "待审核" },
      { id: 4, title: "广告内容D", author: "赵六", status: "已驳回" },
      { id: 5, title: "广告内容E", author: "小明", status: "待审核" },
    ];
    auditStore.passedCount = tableData.value.filter(
      (item) => item.status === "已通过"
    ).length;
  }
}

onMounted(() => {
  fetchAuditList();
});

function pass(row: any) {
  row.status = "已通过";
  auditStore.increment(); // 通过时统计+1
}
function reject(row: any) {
  row.status = "已驳回";
}
</script>

<style scoped>
.audit-page {
  max-width: 900px;
  margin: 40px auto;
  background: #f8fbff;
  border-radius: 16px;
  box-shadow: 0 4px 24px #e0f7fa55;
  padding: 32px 28px;
}
.audit-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #42a5f5;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: 2px;
}
.audit-table {
  margin-bottom: 24px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.audit-pagination {
  display: flex;
  justify-content: center;
}
</style>