<script setup lang="ts">
import { ref, reactive } from 'vue';
import KanbanColumn from '@/components/KanbanColumn.vue';
import { useStore } from '@/stores/store';
import TicketModal from '@/components/TicketModal.vue';

const store = useStore()
const showModal = ref(false)
const newTicket = reactive({ title: '', description: ''})

const handleClose = () => {
  showModal.value = false
}

const handleSave = () => {
  handleClose()
  store.addNewTicket({ id: Math.random(), ...newTicket })
  newTicket.title = ''
  newTicket.description = ''
}
</script>

<template>
  <main>
    <div class="board">
      <kanban-column
        v-for="(column, index) in store.columns"
        :key="column.id"
        :title="column.title"
        :tickets="column.tickets"
        :column-index="index" />
    </div>
    <button id="show-modal" class="add-ticket-button" @click="showModal = true">Add new ticket</button>
  </main>

  <Teleport to="body">
    <ticket-modal :id="'new-ticket-modal'" :show="showModal" @close="handleClose" @save="handleSave" :disable-save="!newTicket.title">
      <template #header>
        <h3>Create new ticket</h3>
      </template>
      <template #body>
        <label for="title">Title:</label>
        <input required id="title" v-model="newTicket.title" class="form-input" />

        <label for="description">Description:</label>
        <textarea id="description" v-model="newTicket.description" placeholder="You can add an optional description here." class="form-input" rows="10" />
      </template>
    </ticket-modal>
  </Teleport>
</template>

<style scope>
.add-ticket-button {
  background-color: var(--yellow);
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  font-size: larger;
  margin: 16px 0;
  padding: 12px;

  &:hover {
    background-color: var(--yellow-2);
  }
}


.board {
  display: flex;
  gap: 16px;
}

h3 {
  color: var(--green);
}

label {
  display: block;
  margin-top: 8px;
}

textarea {
  padding: 8px;
}

.form-input {
  margin-bottom: 8px;
  width: 100%;
}
</style>
