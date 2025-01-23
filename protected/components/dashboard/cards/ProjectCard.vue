<template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <div class="p-5">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
          <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <button
            class="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100"
            @click="$emit('edit')"
          >
            <span class="sr-only">Edit</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            class="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100"
            @click="$emit('delete')"
          >
            <span class="sr-only">Delete</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center space-x-2">
            <span class="text-gray-500">Created:</span>
            <span class="font-medium">{{ formatDate(createdAt) }}</span>
          </div>
          <div
            :class="[
              'px-2 py-1 rounded-full text-xs font-medium',
              statusClasses[status]
            ]"
          >
            {{ status }}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-5 py-3">
      <div class="text-sm">
        <NuxtLink
          :to="'/dashboard/projects/' + id"
          class="font-medium text-primary hover:text-primary-600"
        >
          View details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string
  title: string
  description: string
  status: 'active' | 'completed' | 'archived'
  createdAt: string
}

defineProps<Props>()

defineEmits<{
  (e: 'edit'): void
  (e: 'delete'): void
}>()

const statusClasses = {
  active: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  archived: 'bg-gray-100 text-gray-800'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script> 