<template>
  <div>
    <!-- Search and Filter -->
    <div class="mb-6 flex items-center justify-between">
      <div class="flex-1 max-w-sm">
        <label for="search" class="sr-only">Search users</label>
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
            placeholder="Search users..."
          >
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <select
          v-model="roleFilter"
          class="block w-full pl-3 pr-10 py-2 text-base border border-gray-200 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>

    <!-- Users Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Sign In
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in filteredUsers" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    v-if="user.avatar_url"
                    :src="user.avatar_url"
                    :alt="user.full_name"
                    class="h-10 w-10 rounded-full"
                  >
                  <div v-else class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span class="text-primary-600 font-medium text-sm">
                      {{ getUserInitials(user.full_name) }}
                    </span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ user.full_name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ user.email }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  user.role === 'admin'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-gray-100 text-gray-800',
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                ]"
              >
                {{ user.role }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  user.is_active
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                ]"
              >
                {{ user.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(user.last_sign_in) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="editUser(user)"
                class="text-primary-600 hover:text-primary-900 mr-4"
              >
                Edit
              </button>
              <button
                @click="deleteUser(user)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit User Modal -->
    <EditUserModal
      v-if="showEditModal"
      :user="selectedUser"
      @close="showEditModal = false"
      @save="saveUser"
    />

    <!-- Delete Confirmation Modal -->
    <DeleteConfirmationModal
      v-if="showDeleteModal"
      :user="selectedUser"
      @close="showDeleteModal = false"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSupabaseClient } from '#imports'
import type { Database } from '~/types/database.types'

const supabase = useSupabaseClient<Database>()
const searchQuery = ref('')
const roleFilter = ref('')
const users = ref([])
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const selectedUser = ref(null)

// Fetch users
const fetchUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching users:', error)
    return
  }

  users.value = data
}

// Filter users based on search and role
const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = 
      user.full_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesRole = !roleFilter.value || user.role === roleFilter.value

    return matchesSearch && matchesRole
  })
})

// User actions
const editUser = (user) => {
  selectedUser.value = user
  showEditModal.value = true
}

const deleteUser = (user) => {
  selectedUser.value = user
  showDeleteModal.value = true
}

const saveUser = async (userData) => {
  const { error } = await supabase
    .from('users')
    .update(userData)
    .eq('id', userData.id)

  if (error) {
    console.error('Error updating user:', error)
    return
  }

  showEditModal.value = false
  await fetchUsers()
}

const confirmDelete = async () => {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', selectedUser.value.id)

  if (error) {
    console.error('Error deleting user:', error)
    return
  }

  showDeleteModal.value = false
  await fetchUsers()
}

// Utility functions
const getUserInitials = (name: string) => {
  if (!name) return ''
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

const formatDate = (date: string) => {
  if (!date) return 'Never'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Initial fetch
fetchUsers()
</script> 