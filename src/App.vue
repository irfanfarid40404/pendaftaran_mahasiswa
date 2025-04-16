<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Beranda</RouterLink>
      <RouterLink to="/pendaftaran">Pendaftaran</RouterLink>
      <RouterLink to="/daftar-mahasiswa">Daftar Mahasiswa</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  margin-bottom: 40px;
}

nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  padding: 0.5rem 1rem;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}

main {
  min-height: 80vh;
}
</style>
