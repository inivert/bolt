<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <!-- Logo/Brand Section -->
      <div class="text-center animate-fade-in">
        <h2 class="mt-6 text-4xl font-extrabold text-gray-900 mb-2">
          Reset Password
        </h2>
        <p class="text-sm text-gray-600 mb-8">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </div>

      <!-- Reset Password Form -->
      <div class="bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-slide-up">
        <form class="space-y-6" @submit.prevent="handlePasswordReset">
          <!-- Email Input -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="relative">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                required
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300"
                placeholder="Enter your email"
              >
            </div>
          </div>

          <!-- Success Message -->
          <div v-if="success" class="text-green-500 text-sm animate-fade-in">
            {{ success }}
          </div>

          <!-- Error Message -->
          <div v-if="error" class="text-red-500 text-sm animate-fade-in">
            {{ error }}
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent
                     text-sm font-semibold rounded-xl text-white bg-primary-600
                     transition-all duration-200 ease-in-out transform
                     hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-primary-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </span>
              {{ loading ? 'Sending...' : 'Send Reset Instructions' }}
            </button>
          </div>
        </form>

        <!-- Back to Login Link -->
        <div class="text-center mt-6">
          <NuxtLink to="/login" class="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200">
            Back to Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSupabaseClient } from '#imports'

definePageMeta({
  layout: 'default',
  middleware: ['guest'],
  name: 'forgot-password'
})

const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')
const supabase = useSupabaseClient()

const handlePasswordReset = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = ''

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.value, {
      redirectTo: `${window.location.origin}/update-password`
    })

    if (resetError) throw resetError

    success.value = 'Password reset instructions have been sent to your email'
    email.value = '' // Clear the form
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred'
    error.value = errorMessage
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
