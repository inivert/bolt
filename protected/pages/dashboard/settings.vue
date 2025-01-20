<template>
  <div>
    <div class="max-w-7xl mx-auto py-6">
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      
      <div class="mt-6 space-y-8">
        <!-- Profile Settings -->
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>Update your account's profile information and email address.</p>
            </div>
            <div class="mt-5">
              <ProfileForm />
            </div>
          </div>
        </div>

        <!-- Password Settings -->
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Update Password</h3>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>Ensure your account is using a long, random password to stay secure.</p>
            </div>
            <div class="mt-5">
              <PasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileForm from '~/protected/components/settings/ProfileForm.vue'
import PasswordForm from '~/protected/components/settings/PasswordForm.vue'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})
</script> 