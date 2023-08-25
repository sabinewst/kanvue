<script lang="ts" setup>
defineProps({
  id: String,
  disableSave: Boolean,
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <div>
              <button
                class="button-save"
                :disabled="disableSave"
                @click="$emit('save')"
              >Save</button>
              <button class="button-close" @click="$emit('close')">Close</button>
            </div>
            <button v-if="id === 'edit-ticket-modal'" class="button-delete" @click="$emit('delete')">Delete</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
button {
  background-color: var(--green);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-right: 8px;
  padding: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: var(--darkgreen);
  }
}

.button-delete {
  background-color: var(--red);

  &:hover:enabled {
    background-color: var(--red-2);
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  position: relative;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
