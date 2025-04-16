<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import type { Mahasiswa } from '@/types/mahasiswa'

const emit = defineEmits(['success'])

const form = ref<Mahasiswa>({
  nim: '',
  nama: '',
  jurusan: 'Informatika',
  semester: 1,
  email: '',
})

const jurusanOptions = ['Informatika', 'Sistem Informasi', 'Teknik Elektro', 'Manajemen']
const isLoading = ref(false)

const submitForm = async () => {
  isLoading.value = true
  try {
    await axios.post('/api/mahasiswa', form.value)
    emit('success')
  } catch (error) {
    alert(`Error: ${error.response?.data?.error || error.message}`)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form-group">
      <label>NIM:</label>
      <input v-model="form.nim" required />
    </div>

    <div class="form-group">
      <label>Nama:</label>
      <input v-model="form.nama" required />
    </div>

    <div class="form-group">
      <label>Jurusan:</label>
      <select v-model="form.jurusan" required>
        <option v-for="jurusan in jurusanOptions" :key="jurusan" :value="jurusan">
          {{ jurusan }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Semester:</label>
      <input type="number" v-model.number="form.semester" min="1" max="14" required />
    </div>

    <div class="form-group">
      <label>Email:</label>
      <input type="email" v-model="form.email" required />
    </div>

    <button type="submit" :disabled="isLoading">
      {{ isLoading ? 'Menyimpan...' : 'Daftar' }}
    </button>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: 15px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  display: grid;
  gap: 5px;
}

button[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
