<template>
  <div>
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

    <!-- Mobile menu, show/hide based on menu state -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute inset-0 z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <!-- Background backdrop -->
        <div
          class="fixed inset-0 bg-gray-600 bg-opacity-75"
          @click="$emit('close-menu')"
        />

        <div class="fixed inset-0 z-50 flex">
          <div class="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5">
            <div class="absolute right-0 top-0 -mr-12 pt-2">
              <button
                type="button"
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="$emit('close-menu')"
              >
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Navigation items -->
            <div class="mt-5 flex flex-grow flex-col">
              <nav class="flex-1 space-y-1 px-2">
                <NuxtLink
                  v-for="item in navigationItems"
                  :key="item.name"
                  :to="item.to"
                  class="group flex items-center rounded-md px-2 py-2 text-base font-medium"
                  :class="[
                    isCurrentRoute(item.to)
                      ? 'bg-primary/20 text-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  ]"
                  @click="$emit('close-menu')"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      isCurrentRoute(item.to) ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-4 h-6 w-6'
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </NuxtLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  navigationItems: Array<{
    name: string
    to: string
    icon: any
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