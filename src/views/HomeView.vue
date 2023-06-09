<script setup lang="ts">
import KanbanColumn from '@/components/KanbanColumn.vue';
import { useStore } from '@/stores/store';

const store = useStore()

</script>

<template>
  <main>
    <div class="board">
      <KanbanColumn v-for="(column, index) in store.columns" :title="column.title" :key="column.id" :tickets="column.tickets" :column-index="index"/>
    </div>
  </main>
</template>

<style scope>
.board {
  display: flex;
  gap: 16px;
}
</style>
