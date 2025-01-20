<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <div :class="[
            color === 'blue' ? 'bg-blue-100' : 
            color === 'green' ? 'bg-green-100' : 
            color === 'purple' ? 'bg-purple-100' : 
            'bg-gray-100',
            'rounded-md p-3'
          ]">
            <slot name="icon" />
          </div>
        </div>
        <div class="ml-5 w-0 flex-1">
          <dl>
            <dt class="text-sm font-medium text-gray-500 truncate">{{ title }}</dt>
            <dd class="flex items-baseline">
              <div class="text-2xl font-semibold" :class="value === '0' || value === 0 ? 'text-gray-500' : 'text-gray-900'">
                {{ value }}
              </div>
              <div v-if="change && value !== '0' && value !== 0" :class="[changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
                <template v-if="changeType === 'increase'">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </template>
                <template v-else>
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </template>
                <span class="ml-1">{{ change }}</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div v-if="$slots.footer" class="bg-gray-50 px-5 py-3">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  color?: string
  change?: string
  changeType?: 'increase' | 'decrease'
}>()
</script>
