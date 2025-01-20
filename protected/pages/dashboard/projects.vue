<template>
  <div>
    <div class="max-w-7xl mx-auto py-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">Projects</h1>
        <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          New Project
        </button>
      </div>
      
      <div class="mt-6">
        <!-- Projects list will go here -->
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="p-6 text-center text-gray-500">
            No projects yet. Create your first project to get started.
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