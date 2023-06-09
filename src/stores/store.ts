import type { IColumn, ITicket } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('data', () => {
  const columns = ref<IColumn[]>([
    {
      id: 1,
      title: "To Do",
      tickets: [
        {
          id: 1,
          title: "Implement login page",
          description: "Create a login page for users to access the app"
        },
        {
          id: 2,
          title: "Design landing page",
          description: "Create a visually appealing landing page for the app"
        }
      ]
    },
    {
      id: 2,
      title: "In Progress",
      tickets: [
        {
          id: 3,
          title: "Create database schema",
          description: "Define the database schema for the app"
        },
        {
          id: 4,
          title: "Develop API endpoints",
          description: "Implement API endpoints for the app"
        }
      ]
    },
    {
      id: 3,
      title: "Done",
      tickets: [
        {
          id: 5,
          title: "Test login functionality",
          description: "Verify that users can successfully log in to the app"
        }
      ]
    }
  ])

  function addNewTicket(ticket: ITicket) {
    columns.value[0].tickets.push(ticket)
  }

  function updateColumn(columnIndex: number, tickets: ITicket[]) {
    columns.value[columnIndex].tickets = tickets
  }

  return { columns, addNewTicket, updateColumn }
})