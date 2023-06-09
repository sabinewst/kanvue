<script setup lang="ts">
import { useStore } from "@/stores/store";
import type { ITicket } from "@/types";
import { ref } from "vue";
import draggable from "vuedraggable";

const props = defineProps<{
  columnIndex: number
  title: string
  tickets: ITicket[]
}>()

const { updateColumn } = useStore()
const listItems = ref(props.tickets)

const handleChange = () => {
  updateColumn(props.columnIndex, listItems.value)
}
</script>

<template>
  <div class="column">
    <h2>{{ title }}</h2>
    <draggable
      class="draggable-column"
      ghost-class="ghost"
      v-model="listItems"
      group="tickets"
      @change="handleChange"
      itemKey="name"
    >
      <template #item="{ element }">
        <div class="draggable-card">{{ element.title }}</div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1rem;
  margin-top: 8px;
}

.column {
  background-color: #f1f1f1;
  border-radius: 4px;
  text-align: center;
  width: 200px;
}

.draggable-column {
  padding: 8px 16px;
}

.draggable-card {
  background-color: white;
  border: 1px solid rgb(182, 182, 182);
  box-shadow: 2px 2px 2px grey;
  border-radius: 4px;
  margin: 8px 0;
  padding: 16px;
  width: 100%;
}

.ghost {
  background-color: rgb(219, 241, 247);
}
</style>
