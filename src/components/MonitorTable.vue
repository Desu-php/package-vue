<script setup lang="ts">
import {ElTable, ElTableColumn, ElButton, ElDialog} from "element-plus"
import {onMounted} from "vue";
import http from "../services/http.ts";
import MonitorForm from "./MonitorForm.vue";

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

// onMounted(() => {
//   http().get('prices')
// })

</script>

<template>
  <div style="height: 100vh">
    <MonitorForm />

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
    </el-table>
  </div>

</template>

<style scoped>
.align-right{
  display: flex;
  justify-content: right;
  margin-bottom: 10px;
}
</style>