<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>KanVue</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  border-bottom: 1px solid black;
  margin-bottom: 50px;
}
</style>
