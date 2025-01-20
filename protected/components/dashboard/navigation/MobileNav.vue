<template>
  <div class="lg:hidden">
    <!-- Mobile menu button -->
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
      @click="$emit('toggle-menu')"
    >
      <span class="sr-only">Open menu</span>
      <svg 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16" 
        />
      </svg>
    </button>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-40">
        <!-- Overlay -->
        <div 
          class="fixed inset-0 bg-black bg-opacity-25" 
          @click="$emit('close-menu')"
        />

        <!-- Menu panel -->
        <div class="relative flex flex-col w-full max-w-xs pb-12 bg-white shadow-xl">
          <div class="px-4 pt-5 pb-2 flex">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 -m-2 rounded-md text-gray-400 hover:text-gray-500"
              @click="$emit('close-menu')"
            >
              <span class="sr-only">Close menu</span>
              <svg 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          <!-- Mobile navigation items -->
          <div class="px-4 py-6">
            <div class="flow-root">
              <div class="-my-6 divide-y divide-gray-200">
                <div class="py-6 space-y-1">
                  <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.name"
                    :to="item.to"
                    :class="[
                      isCurrentRoute(item.to)
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-4 py-2 text-base font-medium rounded-md'
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

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

function isCurrentRoute(path: string) {
  return route.path === path
}
</script> 