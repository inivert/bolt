<template>
  <div>
    <div class="max-w-7xl mx-auto py-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">Website Overview</h1>
      </div>
      
      <div class="mt-6">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="p-6 text-center text-gray-500">
            Your website overview and analytics will appear here.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})
</script> 