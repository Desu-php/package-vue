<script lang="ts" setup>
import {reactive, ref} from 'vue'

const modal = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function openModal() {
  modal.value = true
}

function closeModal() {
  modal.value = false
}

function edit(id: number) {
  openModal()
}

defineExpose({
  edit
})
</script>
<template>
  <el-button type="success" @click="openModal">
    Добавить
  </el-button>

  <el-dialog v-model="modal" title="Shipping address">
    <el-form :model="form" label-position="top">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"/>
          <el-option label="Zone No.2" value="beijing"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeModal">Cancel</el-button>
        <el-button type="primary" @click="closeModal">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>

</style>
