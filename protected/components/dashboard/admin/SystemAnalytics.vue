<!-- 
  SystemAnalytics.vue - Admin dashboard analytics component
  Displays system-wide metrics and analytics using charts and data visualizations
-->
<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        System Analytics
      </h2>
      <div class="flex items-center space-x-4">
        <select
          v-model="timeRange"
          class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
        <button
          @click="refreshData"
          class="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
        >
          <Icon name="ph:arrows-clockwise" class="mr-2 h-4 w-4" />
          Refresh
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="stat in stats"
        :key="stat.name"
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="flex items-center">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-lg"
            :class="stat.iconBg"
          >
            <Icon :name="stat.icon" class="h-6 w-6 text-white" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              {{ stat.name }}
            </p>
            <p class="text-2xl font-semibold text-gray-900 dark:text-white">
              {{ stat.value }}
            </p>
            <p
              class="mt-1 text-sm"
              :class="stat.change >= 0 ? 'text-green-600' : 'text-red-600'"
            >
              {{ stat.change >= 0 ? '+' : '' }}{{ stat.change }}%
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <!-- User Activity Chart -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          User Activity
        </h3>
        <!-- Chart placeholder - Replace with your preferred chart library -->
        <div class="h-80 w-full">
          <!-- Add chart component here -->
        </div>
      </div>

      <!-- System Performance Chart -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          System Performance
        </h3>
        <!-- Chart placeholder - Replace with your preferred chart library -->
        <div class="h-80 w-full">
          <!-- Add chart component here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const timeRange = ref('7d')

const stats = ref([
  {
    name: 'Total Users',
    value: '1,234',
    change: 12.5,
    icon: 'ph:users',
    iconBg: 'bg-primary-600',
  },
  {
    name: 'Active Sessions',
    value: '423',
    change: 8.2,
    icon: 'ph:activity',
    iconBg: 'bg-green-600',
  },
  {
    name: 'Response Time',
    value: '124ms',
    change: -3.1,
    icon: 'ph:timer',
    iconBg: 'bg-yellow-600',
  },
  {
    name: 'Error Rate',
    value: '0.12%',
    change: -5.4,
    icon: 'ph:warning',
    iconBg: 'bg-red-600',
  },
])

const refreshData = () => {
  // TODO: Implement data refresh logic
  console.log('Refreshing data for timeRange:', timeRange.value)
}
</script> 