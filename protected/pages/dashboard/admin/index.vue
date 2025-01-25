<template>
  <div class="min-h-[80vh] bg-gradient-to-b from-gray-50/50 to-white/80">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p class="mt-2 text-sm text-gray-600">
          Manage users, monitor system activity, and control application settings
        </p>
      </div>
      
      <div class="space-y-6">
        <!-- User Management -->
        <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
          <div class="bg-gradient-to-r from-white to-primary-50/30 px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">User Management</h3>
                <p class="mt-1 text-sm text-gray-500">
                  View and manage user accounts, roles, and permissions
                </p>
              </div>
              <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Add User
              </button>
            </div>
          </div>
          <div class="px-6 py-5">
            <UserManagement />
          </div>
        </div>

        <!-- System Analytics -->
        <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
          <div class="bg-gradient-to-r from-white to-primary-50/30 px-6 py-4 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900">System Analytics</h3>
            <p class="mt-1 text-sm text-gray-500">
              Monitor system performance and user activity
            </p>
          </div>
          <div class="px-6 py-5">
            <SystemAnalytics />
          </div>
        </div>

        <!-- Settings Control -->
        <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
          <div class="bg-gradient-to-r from-white to-primary-50/30 px-6 py-4 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900">Global Settings</h3>
            <p class="mt-1 text-sm text-gray-500">
              Configure system-wide settings and features
            </p>
          </div>
          <div class="px-6 py-5">
            <GlobalSettings />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSupabaseUser } from '#imports'
import { useRouter } from 'vue-router'
import UserManagement from '~/protected/components/dashboard/admin/UserManagement.vue'
import SystemAnalytics from '~/protected/components/dashboard/admin/SystemAnalytics.vue'
import GlobalSettings from '~/protected/components/dashboard/admin/GlobalSettings.vue'

const user = useSupabaseUser()
const router = useRouter()

// Redirect non-admin users
if (user.value?.user_metadata?.role !== 'admin') {
  router.push('/dashboard')
}

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'admin']
})
</script> 