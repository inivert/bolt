<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

// Redirect to dashboard
navigateTo('/dashboard')
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-lg text-gray-600">Redirecting to dashboard...</p>
    </div>
  </div>
</template>
