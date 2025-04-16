<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="home">
    <h1>Sistem Pendaftaran Mahasiswa</h1>
    <div class="button-group">
      <button @click="router.push('/pendaftaran')">Pendaftaran Baru</button>
      <button @click="router.push('/daftar-mahasiswa')">Lihat Daftar Mahasiswa</button>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
