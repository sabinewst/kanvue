<script setup lang="ts">
import KanbanColumn from '@/components/KanbanColumn.vue';
import { useStore } from '@/stores/store';

const store = useStore()

</script>

<template>
  <main>
    <div class="board">
      <KanbanColumn
        v-for="(column, index) in store.columns"
        :key="column.id"
        :title="column.title"
        :tickets="column.tickets"
        :column-index="index" />
    </div>
    <button>New ticket</button>
  </main>
</template>

<style scope>
.board {
  display: flex;
  gap: 16px;
}
</style>
