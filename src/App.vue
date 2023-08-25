<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="wrapper">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style scoped>
h1 {
  color: var(--green);
}

.wrapper {
  display: flex;
}
</style>
