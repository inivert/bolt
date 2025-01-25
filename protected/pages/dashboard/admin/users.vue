<!-- Admin Users Management Page -->
<template>
  <div class="p-6">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">User Management</h1>
      <p class="mt-2 text-sm text-gray-600">
        Manage user accounts, roles, and permissions.
      </p>
    </div>

    <UserManagement />
  </div>
</template>

<script setup lang="ts">
import UserManagement from '~/protected/components/dashboard/admin/UserManagement.vue'

definePageMeta({
  middleware: ['admin'],
  layout: 'dashboard'
})
</script> 