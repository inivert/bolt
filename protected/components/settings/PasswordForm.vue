<template>
  <div class="relative">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="current_password" class="block text-sm font-medium text-gray-700">Current Password</label>
        <input
          id="current_password"
          v-model="form.current_password"
          type="password"
          required
          autocomplete="current-password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label for="new_password" class="block text-sm font-medium text-gray-700">New Password</label>
        <input
          id="new_password"
          v-model="form.new_password"
          type="password"
          required
          minlength="8"
          autocomplete="new-password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
        <p class="mt-1 text-sm text-gray-500">Password must be at least 8 characters long.</p>
      </div>

      <div>
        <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          id="confirm_password"
          v-model="form.confirm_password"
          type="password"
          required
          autocomplete="new-password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div class="flex items-center justify-end space-x-4">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          @click="resetForm"
        >
          Cancel
        </button>
        <button
          type="submit"
          :disabled="loading || !isValid"
          class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          <template v-if="loading">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Updating...
          </template>
          <template v-else>
            Update Password
          </template>
        </button>
      </div>
    </form>

    <!-- Notification -->
    <div class="absolute top-0 right-0">
      <Notification
        :show="!!notification.show"
        :type="notification.type"
        :title="notification.title"
        :message="notification.message"
        @close="notification.show = false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Notification from '~/protected/components/common/Notification.vue'

const { supabase } = useSupabaseClient()
const loading = ref(false)
const error = ref<string | null>(null)

const notification = reactive({
  show: false,
  type: 'success' as const,
  title: '',
  message: ''
})

const form = reactive({
  current_password: '',
  new_password: '',
  confirm_password: ''
})

const isValid = computed(() => {
  return (
    form.new_password.length >= 8 &&
    form.new_password === form.confirm_password &&
    form.current_password.length > 0
  )
})

const resetForm = () => {
  form.current_password = ''
  form.new_password = ''
  form.confirm_password = ''
  error.value = null
}

const showNotification = (type: 'success' | 'error', title: string, message = '') => {
  notification.type = type
  notification.title = title
  notification.message = message
  notification.show = true
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    notification.show = false
  }, 5000)
}

const handleSubmit = async () => {
  if (!isValid.value) {
    showNotification('error', 'Invalid form', 'Please check the form requirements')
    return
  }

  try {
    loading.value = true
    error.value = null

    const { error: updateError } = await supabase.auth.updateUser({
      password: form.new_password
    })

    if (updateError) throw updateError

    resetForm()
    showNotification('success', 'Password updated successfully')
  } catch (err: any) {
    error.value = err.message
    showNotification('error', 'Failed to update password', err.message)
    console.error('Error updating password:', err)
  } finally {
    loading.value = false
  }
}
</script> 