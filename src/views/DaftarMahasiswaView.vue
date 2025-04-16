<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Mahasiswa } from '@/types/mahasiswa'
import { useRouter } from 'vue-router'

const mahasiswas = ref<Mahasiswa[]>([])
const router = useRouter()

const loadMahasiswa = async () => {
  try {
    const response = await axios.get('/api/mahasiswa')
    mahasiswas.value = response.data
  } catch (error) {
    console.error('Gagal memuat data:', error)
  }
}

onMounted(() => {
  loadMahasiswa()
})
</script>

<template>
  <div class="daftar-view">
    <h1>Daftar Mahasiswa Terdaftar</h1>
    <button @click="router.push('/pendaftaran')" class="add-button">+ Tambah Mahasiswa</button>

    <div v-if="mahasiswas.length === 0" class="empty-state">Belum ada mahasiswa terdaftar</div>

    <table v-else>
      <thead>
        <tr>
          <th>NIM</th>
          <th>Nama</th>
          <th>Jurusan</th>
          <th>Semester</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mhs in mahasiswas" :key="mhs.nim">
          <td>{{ mhs.nim }}</td>
          <td>{{ mhs.nama }}</td>
          <td>{{ mhs.jurusan }}</td>
          <td>{{ mhs.semester }}</td>
          <td>{{ mhs.email }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="router.push('/')" class="back-button">Kembali ke Beranda</button>
  </div>
</template>

<style scoped>
.daftar-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.add-button {
  margin-bottom: 20px;
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
}

.empty-state {
  padding: 2rem;
  text-align: center;
  border: 1px dashed #ccc;
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.back-button {
  margin-top: 20px;
}
</style>
