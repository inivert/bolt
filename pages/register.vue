<script setup lang="ts">
import { ref } from 'vue'
import { useSupabaseClient } from '#imports'

definePageMeta({
  layout: 'default',
  middleware: 'guest'
})

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const loading = ref(false)
const error = ref('')
const supabase = useSupabaseClient()

const handleRegister = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      error.value = 'Passwords do not match'
      return
    }

    loading.value = true
    error.value = ''

    console.log('Attempting registration with:', {
      email: email.value,
      name: name.value
    })

    const { data, error: authError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value,
          role: 'user'
        }
      }
    })

    console.log('Supabase response:', data)

    if (authError) {
      console.error('Supabase auth error:', {
        message: authError.message,
        status: authError.status
      })
      
      // Check for specific database errors
      if (authError.message.includes('Database error')) {
        throw new Error('Registration failed: Database configuration issue. Please contact support.')
      }
      
      throw new Error(`Registration failed: ${authError.message}`)
    }

    if (!data.user) {
      throw new Error('Registration failed: No user data returned')
    }

    // Handle email confirmation requirement
    if (data.user.identities?.length === 0) {
      navigateTo('/verify-email')
      return
    }

    // Redirect to get-started page after successful registration
    navigateTo('/get-started')
  } catch (e) {
    console.error('Registration error:', e)
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred'
    error.value = errorMessage.includes('Registration failed') 
      ? errorMessage
      : 'Registration failed. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <!-- Logo/Brand Section -->
      <div class="text-center animate-fade-in">
        <h2 class="mt-6 text-4xl font-extrabold text-gray-900 mb-2">
          Create Account
        </h2>
        <p class="text-sm text-gray-600 mb-8">
          Join us and start your journey
        </p>
      </div>

      <!-- Registration Form -->
      <div class="bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-slide-up">
        <form class="space-y-6" @submit.prevent="handleRegister">
          <!-- Name Input -->
          <div class="space-y-2">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div class="relative">
              <input
                id="name"
                v-model="name"
                name="name"
                type="text"
                required
                autocomplete="name"
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300"
                placeholder="Enter your full name"
              >
            </div>
          </div>

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
                autocomplete="username"
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300"
                placeholder="Enter your email"
              >
            </div>
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                required
                autocomplete="new-password"
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300"
                placeholder="Create a password"
              >
            </div>
          </div>

          <!-- Confirm Password Input -->
          <div class="space-y-2">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                autocomplete="new-password"
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300"
                placeholder="Confirm your password"
              >
            </div>
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
              {{ loading ? 'Creating account...' : 'Create account' }}
            </button>
          </div>
        </form>

        <!-- Additional Links -->
        <div class="text-center mt-6">
          <p class="text-sm text-gray-600">
            Already have an account?
            <NuxtLink to="/login" class="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200">
              Sign in
            </NuxtLink>
          </p>
        </div>
      </div>

      <!-- Social Registration Options -->
      <div class="mt-8 text-center animate-fade-in">
        <p class="text-sm text-gray-600 mb-4">
          Or register with
        </p>
        <div class="flex justify-center space-x-4">
          <button class="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .5 4.1 1.4l3.1-3.1C17.1 1.7 14.7 1 12 1 7.3 1 3.3 3.9 1.5 8.2l3.7 2.8C6.1 7.9 8.8 5 12 5z" />
              <path fill="#4285F4" d="M23.5 12.2c0-.8-.1-1.7-.2-2.5H12v4.7h6.5c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.6-5 3.6-8.4z" />
              <path fill="#34A853" d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 .7-2.4 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7l-3.7 2.8C4.1 20.2 7.8 23 12 23z" />
              <path fill="#FBBC05" d="M5.6 13.8c-.2-.7-.4-1.5-.4-2.3 0-.8.1-1.6.4-2.3L1.9 6.4C1.1 8.1.5 10 .5 12s.6 3.9 1.4 5.6l3.7-2.8z" />
            </svg>
          </button>
          <button class="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#000000" d="M22.1 12c0-5.5-4.5-10-10-10S2.1 6.5 2.1 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7c4.7-.8 8.4-4.9 8.4-9.9z" />
            </svg>
          </button>
          <button class="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#000000" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

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
