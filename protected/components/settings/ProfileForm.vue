<template>
  <div class="relative">
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div>
        <label for="full_name" class="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="full_name"
          v-model="form.full_name"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          disabled
          class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
        <p class="mt-1 text-sm text-gray-500">Email cannot be changed.</p>
      </div>

      <div>
        <label for="avatar_url" class="block text-sm font-medium text-gray-700">Avatar URL</label>
        <input
          id="avatar_url"
          v-model="form.avatar_url"
          type="url"
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
          :disabled="loading"
          class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <template v-if="loading">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Saving...
          </template>
          <template v-else>
            Save Changes
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

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const loading = ref(false)
const error = ref<string | null>(null)

const notification = reactive({
  show: false,
  type: 'success' as 'success' | 'error',
  title: '',
  message: ''
})

const form = reactive({
  full_name: user.value?.user_metadata?.full_name || '',
  email: user.value?.email || '',
  avatar_url: user.value?.user_metadata?.avatar_url || ''
})

const resetForm = () => {
  form.full_name = user.value?.user_metadata?.full_name || ''
  form.avatar_url = user.value?.user_metadata?.avatar_url || ''
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
  try {
    loading.value = true
    error.value = null

    // Update auth metadata
    const { error: updateUserError } = await supabase.auth.updateUser({
      data: {
        full_name: form.full_name,
        avatar_url: form.avatar_url
      }
    })

    if (updateUserError) throw updateUserError

    // Update users table
    const { error: updateError } = await supabase
      .from('users')
      .update({
        full_name: form.full_name,
        avatar_url: form.avatar_url,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.value?.id)

    if (updateError) throw updateError

    showNotification('success', 'Profile updated successfully')
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
    error.value = errorMessage
    showNotification('error', 'Failed to update profile', errorMessage)
    console.error('Error updating profile:', err)
  } finally {
    loading.value = false
  }
}
</script> 