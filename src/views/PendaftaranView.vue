<script setup lang="ts">
import MahasiswaForm from '@/components/MahasiswaForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="pendaftaran-view">
    <h1>Form Pendaftaran Mahasiswa</h1>
    <MahasiswaForm @success="router.push('/daftar-mahasiswa')" />
    <button @click="router.push('/')" class="back-button">Kembali ke Beranda</button>
  </div>
</template>

<style scoped>
.pendaftaran-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  margin-top: 20px;
  padding: 0.5rem 1rem;
}
</style>
