<template>
  <header class="sticky top-0 z-40 bg-white border-b border-gray-200">
    <div class="flex h-16 items-center justify-between px-4">
      <div class="flex items-center space-x-4">
        <button class="lg:hidden text-gray-500 hover:text-gray-600" @click="$emit('toggle-sidebar')">
          <span class="sr-only">Open sidebar</span>
          <!-- Hamburger icon -->
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
      </div>
      
      <div class="flex items-center space-x-4">
        <UserMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()

defineEmits<{
  (e: 'toggle-sidebar'): void
}>()
</script> 