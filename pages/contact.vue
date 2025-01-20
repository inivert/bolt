<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">
      Contact Us
    </h1>
    <div class="max-w-2xl mx-auto">
      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" type="text" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
        </div>
        <button type="submit" class="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
