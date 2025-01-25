<!-- Admin Invitations Management Page -->
<template>
  <div class="p-6">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Invitations</h1>
      <p class="mt-2 text-sm text-gray-600">
        Manage and track user invitations.
      </p>
    </div>

    <!-- Actions -->
    <div class="mb-6 flex justify-between items-center">
      <div class="flex-1 max-w-sm">
        <label for="search" class="sr-only">Search invitations</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            id="search"
            v-model="searchQuery"
            type="search"
            class="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Search invitations..."
          >
        </div>
      </div>
      <button
        type="button"
        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        @click="openInviteModal"
      >
        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        New Invitation
      </button>
    </div>

    <!-- Invitations Table -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sent Date
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expires
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="!invitations.length">
            <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">
              No invitations found
            </td>
          </tr>
          <tr v-for="invitation in filteredInvitations" :key="invitation.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ invitation.email }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  invitation.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : invitation.status === 'accepted'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                ]"
              >
                {{ invitation.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(invitation.created_at) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(invitation.expires_at) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                v-if="invitation.status === 'pending'"
                @click="resendInvitation(invitation)"
                class="text-primary-600 hover:text-primary-900 mr-4"
              >
                Resend
              </button>
              <button
                @click="deleteInvitation(invitation)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  middleware: ['admin'],
  layout: 'dashboard'
})

// Search
const searchQuery = ref('')

// Mock data for now
const invitations = ref([
  {
    id: 1,
    email: 'example@email.com',
    status: 'pending',
    created_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  }
])

// Filtered invitations based on search
const filteredInvitations = computed(() => {
  if (!searchQuery.value) return invitations.value
  
  const query = searchQuery.value.toLowerCase()
  return invitations.value.filter(invitation => 
    invitation.email.toLowerCase().includes(query)
  )
})

// Format date helper
function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}

// Actions
function openInviteModal() {
  // TODO: Implement invite modal
  console.log('Open invite modal')
}

function resendInvitation(invitation: any) {
  // TODO: Implement resend invitation
  console.log('Resend invitation', invitation)
}

function deleteInvitation(invitation: any) {
  // TODO: Implement delete invitation
  console.log('Delete invitation', invitation)
}
</script> 