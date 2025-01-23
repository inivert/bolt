<template>
  <div class="relative">
    <!-- Mobile menu button -->
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
      @click="$emit('toggle-menu')"
    >
      <span class="sr-only">Open menu</span>
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background backdrop -->
      <div
        class="fixed inset-0 bg-gray-600/75 backdrop-blur-sm"
        @click="$emit('close-menu')"
      />

      <!-- Menu panel -->
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm">
        <div class="flex h-16 items-center justify-between px-6 border-b border-gray-200 bg-gradient-to-r from-white/90 to-primary-100/30">
          <NuxtLink 
            to="/" 
            class="text-2xl font-bold bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent"
            @click="$emit('close-menu')"
          >
            Nexcode
          </NuxtLink>
          <button
            type="button"
            class="rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            @click="$emit('close-menu')"
          >
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="px-6 py-4">
          <nav class="space-y-2">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.to"
              class="group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200"
              :class="[
                isCurrentRoute(item.to)
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-900 hover:bg-gray-50'
              ]"
              @click="$emit('close-menu')"
            >
              <component
                :is="item.icon"
                :class="[
                  isCurrentRoute(item.to) ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500',
                  'h-5 w-5 shrink-0'
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </NuxtLink>
          </nav>

          <div class="mt-6 border-t border-gray-200 pt-4">
            <NuxtLink
              to="/"
              class="flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              @click="$emit('close-menu')"
            >
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Exit to Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  isOpen: boolean
  navigationItems: Array<{
    name: string
    to: string
    icon: Component
  }>
}>()

defineEmits<{
  (e: 'toggle-menu'): void
  (e: 'close-menu'): void
}>()

const route = useRoute()

function isCurrentRoute(path: string) {
  return route.path === path
}
</script> 