<script setup lang="ts">
const data = [
  {
    id: 1,
    title: 'red',
    priority: 1,
    launched: '2024-01-18T08:07:11.000000Z',
    last_results: [
      {
        id: 1,
        monitor_type_id: 1,
        failure: 1,
        finished: 1,
        params: [],
      }
    ]
  }
]

const emit = defineEmits(['edit'])

function onEdit(id: number) {
  emit('edit', id)
}
</script>

<template>
    <el-table
        :data="data"
    >
      <el-table-column prop="id" label="ID"/>
      <el-table-column prop="title" label="Title"/>
      <el-table-column prop="priority" label="Priority"/>
      <el-table-column prop="launched" label="Launched"/>
      <el-table-column prop="last_results" label="last result">
        <template #default="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column prop="actions">
        <template #default="scope">
          <el-button text type="warning" @click="onEdit(scope.row.id)">Изменить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="monitor-pagination">
      <el-pagination layout="prev, pager, next" :total="1000" />
    </div>
</template>

<style scoped>
.monitor-pagination{
  display: flex;
  justify-content: right;
  margin-top: 10px;
}
</style>