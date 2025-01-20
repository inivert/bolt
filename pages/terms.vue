<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">
      Terms of Service
    </h1>
    <div class="prose max-w-none">
      <p class="text-lg mb-4">
        Last updated: {{ new Date().toLocaleDateString() }}
      </p>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">
          1. Terms
        </h2>
        <p>By accessing this website, you are agreeing to be bound by these terms of service...</p>
      </section>
      <!-- Add more sections here -->
    </div>
  </div>
</template>
