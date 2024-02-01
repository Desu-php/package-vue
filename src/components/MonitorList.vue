<script setup lang="ts">

import MonitorTable from "./MonitorTable.vue";
import MonitorForm from "./MonitorForm.vue";
import {Component, ref} from "vue";

const form = ref<Component>()
function edit(id: number) {
  form.value.edit(id)
}
</script>

<template>
<div>
  <div class="align-right">
    <monitor-form ref="form" />
  </div>
  <monitor-table @edit="edit" />
</div>
</template>

<style scoped>
.align-right{
  display: flex;
  justify-content: right;
  margin-bottom: 10px;
}
</style>