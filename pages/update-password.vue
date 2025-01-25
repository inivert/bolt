<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <!-- Logo/Brand Section -->
      <div class="text-center animate-fade-in">
        <h2 class="mt-6 text-4xl font-extrabold text-gray-900 mb-2">
          Set New Password
        </h2>
        <p class="text-sm text-gray-600 mb-8">
          Please enter your new password
        </p>
      </div>

      <!-- Update Password Form -->
      <div class="bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-slide-up">
        <!-- Password Requirements -->
        <div class="text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
          <h3 class="font-medium mb-2">Password Requirements:</h3>
          <ul class="list-disc list-inside space-y-1">
            <li :class="{ 'text-green-600': password.length >= 8 }">At least 8 characters</li>
            <li :class="{ 'text-green-600': /[A-Z]/.test(password) }">One uppercase letter</li>
            <li :class="{ 'text-green-600': /[a-z]/.test(password) }">One lowercase letter</li>
            <li :class="{ 'text-green-600': /\d/.test(password) }">One number</li>
            <li :class="{ 'text-green-600': /[@$!%*?&]/.test(password) }">One special character (@$!%*?&)</li>
          </ul>
        </div>

        <form class="space-y-6" @submit.prevent="handlePasswordUpdate">
          <!-- Password Input -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                required
                autocomplete="new-password"
                spellcheck="false"
                autocapitalize="none"
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300 pr-10"
                placeholder="Enter your new password"
                minlength="8"
              >
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Icon
                  :name="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'"
                  class="h-5 w-5 text-gray-400 hover:text-gray-500"
                />
              </button>
            </div>
            <!-- Password Strength Indicator -->
            <div class="mt-1">
              <div class="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full transition-all duration-300"
                  :class="passwordStrengthClass"
                  :style="{ width: `${passwordStrength}%` }"
                ></div>
              </div>
              <p class="text-xs text-gray-500 mt-1">Password strength: {{ passwordStrengthText }}</p>
            </div>
          </div>

          <!-- Confirm Password Input -->
          <div class="space-y-2">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                name="confirmPassword"
                required
                autocomplete="new-password"
                spellcheck="false"
                autocapitalize="none"
                class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl
                       placeholder-gray-400 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       hover:border-primary-300 pr-10"
                placeholder="Confirm your new password"
                minlength="8"
              >
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Icon
                  :name="showConfirmPassword ? 'heroicons:eye-slash' : 'heroicons:eye'"
                  class="h-5 w-5 text-gray-400 hover:text-gray-500"
                />
              </button>
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
              :disabled="loading || !isValid"
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
              {{ loading ? 'Updating...' : 'Update Password' }}
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
import { ref, computed } from 'vue'
import { useSupabaseClient, useRouter } from '#imports'

definePageMeta({
  layout: 'default',
  middleware: ['guest'],
  name: 'update-password'
})

const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const router = useRouter()
const supabase = useSupabaseClient()

const validatePassword = (pass: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(pass)
}

// Password strength calculation
const calculatePasswordStrength = (pass: string): number => {
  if (!pass) return 0
  let strength = 0
  
  // Length check
  if (pass.length >= 8) strength += 20
  if (pass.length >= 12) strength += 10
  
  // Character type checks
  if (/[A-Z]/.test(pass)) strength += 20
  if (/[a-z]/.test(pass)) strength += 20
  if (/\d/.test(pass)) strength += 20
  if (/[@$!%*?&]/.test(pass)) strength += 10
  
  return Math.min(strength, 100)
}

const passwordStrength = computed(() => calculatePasswordStrength(password.value))

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength === 0) return 'None'
  if (strength < 40) return 'Weak'
  if (strength < 70) return 'Medium'
  if (strength < 90) return 'Strong'
  return 'Very Strong'
})

const passwordStrengthClass = computed(() => {
  const strength = passwordStrength.value
  if (strength < 40) return 'bg-red-500'
  if (strength < 70) return 'bg-yellow-500'
  if (strength < 90) return 'bg-green-500'
  return 'bg-green-600'
})

const isValid = computed(() => {
  return password.value.length >= 8 && 
         password.value === confirmPassword.value &&
         validatePassword(password.value)
})

const handlePasswordUpdate = async () => {
  if (!isValid.value) {
    error.value = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character (@$!%*?&)'
    return
  }

  try {
    loading.value = true
    error.value = ''
    success.value = ''

    // Clear any sensitive data from console
    console.clear()

    const { error: updateError } = await supabase.auth.updateUser({
      password: password.value
    })

    if (updateError) throw updateError

    success.value = 'Password updated successfully'
    
    // Clear sensitive data
    password.value = ''
    confirmPassword.value = ''
    
    // Redirect to login after a short delay
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred'
    error.value = errorMessage
  } finally {
    loading.value = false
  }
}

// Clean up sensitive data when component is unmounted
onUnmounted(() => {
  password.value = ''
  confirmPassword.value = ''
  console.clear()
})
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