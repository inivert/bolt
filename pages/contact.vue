<template>
  <div class="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          id="subject"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: Implement form submission
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
