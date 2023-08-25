<script setup lang="ts">
import { useStore } from '@/stores/store'
import type { ITicket } from '@/types'
import { ref } from 'vue'
import draggable from 'vuedraggable'
import TicketModal from './TicketModal.vue'

const props = defineProps<{
  columnIndex: number
  title: string
  tickets: ITicket[]
}>()

const store = useStore()
const listItems = ref(props.tickets)
const showModal = ref(false)
const selectedTicket = ref({} as ITicket)
const selectedTicketIndex = ref(0)

const handleOpen = (ticket: ITicket, index: number) => {
  selectedTicket.value = { ...ticket }
  selectedTicketIndex.value = index
  showModal.value = true
}

const handleClose = () => {
  showModal.value = false
}

const handleSave = () => {
  store.editTicket(props.columnIndex, selectedTicketIndex.value, selectedTicket.value)
  handleClose()
}

const handleChange = () => {
  store.updateColumnTickets(props.columnIndex, listItems.value)
}

const handleDelete = () => {
  store.deleteTicket(props.columnIndex, selectedTicketIndex.value)
  handleClose()
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
      item-key="id"
    >
      <template #item="{ element, index }">
        <div class="draggable-card">
          <button class="edit-button" @click="handleOpen(element, index)">...</button>
          <p class="title">{{ element.title }}</p>
        </div>
      </template>
    </draggable>
  </div>
  <Teleport to="body">
    <ticket-modal
      id="edit-ticket-modal"
      :show="showModal"
      :disable-save="!selectedTicket.title"
      @close="handleClose"
      @save="handleSave"
      @delete="handleDelete"
    >
      <template #header>
        <h3>Edit ticket</h3>
      </template>
      <template #body>
        <label for="title">Title:</label>
        <input required id="title" v-model="selectedTicket.title" class="form-input" />

        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="selectedTicket.description"
          placeholder="You can add an optional description here."
          class="form-input"
          rows="10"
        />
      </template>
    </ticket-modal>
  </Teleport>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-top: 8px;
}

.column {
  background-color: var(--lightgreen);
  border-radius: 4px;
  text-align: center;
  width: 250px;
}

.draggable-column {
  padding: 8px 16px;
}

.draggable-card {
  background-color: var(--lightyellow);
  border: 1px solid var(--border);
  box-shadow: 2px 2px 2px grey;
  cursor: grab;
  border-radius: 4px;
  margin: 8px 0;
  padding: 32px 16px;
  position: relative;
  width: 100%;
}

.edit-button {
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 6px;
  right: 6px;

  &:hover {
    color: var(--green);
  }
}

.ghost {
  background-color: var(--lightgreen-2);
}

.title {
  font-weight: bold;
}
</style>
