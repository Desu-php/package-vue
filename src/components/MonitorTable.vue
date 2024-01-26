<script setup lang="ts">
import {ref} from "vue";
import {ElTable, ElTableColumn} from "element-plus"
import useToken from "../composeables/useOptions.ts";

const loading = ref(false)

const data = [
  {
    id: 1,
    title: 'red',
    priority: 1,
    launched: '2024-01-18T08:07:11.000000Z',
    last_results: [
      {
        id: 1,
        monitor_type_id:1,
        failure: 1,
        finished: 1,
        params: [],
      }
    ]
  }
]

const {getToken} = useToken()

setInterval(() => {
  console.log('token', getToken())
}, 1000)

</script>

<template>
  <el-table
      v-loading="loading"
      :data="data"
  >
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="title" label="Title" />
    <el-table-column prop="priority" label="Priority" />
    <el-table-column prop="launched" label="Launched" />
    <el-table-column prop="last_results" label="last result">
      <template #default="scope">
          {{scope.row.id}}
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>