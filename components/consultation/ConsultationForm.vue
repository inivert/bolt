<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

interface ApiError {
  status: string
  message: string
  errors?: Array<{
    code: string
    message: string
    path: string[]
  }>
}

const schema = object({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  company: string(),
  message: string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  phone: string().matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number'),
})

const { handleSubmit, errors, setFieldError, resetForm } = useForm({
  validationSchema: schema,
})

const loading = ref(false)
const success = ref(false)
const errorMessage = ref('')

const onSubmit = handleSubmit(async (values) => {
  try {
    loading.value = true
    errorMessage.value = ''
    
    const response = await fetch('/api/consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    const data = await response.json() as ApiError

    if (data.status === 'success') {
      success.value = true
      resetForm()
    } else {
      if (data.errors) {
        // Handle validation errors from the API
        data.errors.forEach((error) => {
          const fieldName = error.path[0]
          setFieldError(fieldName, error.message)
        })
      }
      errorMessage.value = data.message || 'An error occurred while submitting the form.'
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    errorMessage.value = 'An unexpected error occurred. Please try again.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <div v-if="success" class="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded">
      Thank you for your submission! We'll get back to you soon.
    </div>

    <div v-if="errorMessage" class="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded">
      {{ errorMessage }}
    </div>
    
    <div class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name *</label>
        <input
          id="name"
          type="text"
          name="name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          :class="{ 'border-red-500': errors.name }"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.name }}</p>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email *</label>
        <input
          id="email"
          type="email"
          name="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          :class="{ 'border-red-500': errors.email }"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          :class="{ 'border-red-500': errors.phone }"
        />
        <p v-if="errors.phone" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.phone }}</p>
      </div>

      <div>
        <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.message }}</p>
      </div>

      <div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 dark:focus:ring-offset-gray-800"
        >
          <span v-if="loading">Sending...</span>
          <span v-else>Send Message</span>
        </button>
      </div>
    </div>
  </form>
</template> 