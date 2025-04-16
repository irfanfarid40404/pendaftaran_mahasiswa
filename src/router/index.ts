import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PendaftaranView from '@/views/PendaftaranView.vue'
import DaftarMahasiswaView from '@/views/DaftarMahasiswaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: PendaftaranView,
    },
    {
      path: '/daftar-mahasiswa',
      name: 'daftar-mahasiswa',
      component: DaftarMahasiswaView,
    },
  ],
})

export default router
