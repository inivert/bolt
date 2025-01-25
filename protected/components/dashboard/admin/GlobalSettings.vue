<!-- 
  GlobalSettings.vue - Admin dashboard settings component
  Manages global system configuration and settings
-->
<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        Global Settings
      </h2>
      <button
        @click="saveSettings"
        class="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
      >
        <Icon name="ph:floppy-disk" class="mr-2 h-4 w-4" />
        Save Changes
      </button>
    </div>

    <!-- Settings Sections -->
    <div class="grid grid-cols-1 gap-6">
      <!-- General Settings -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          General Settings
        </h3>
        <div class="space-y-4">
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              System Name
            </label>
            <input
              v-model="settings.systemName"
              type="text"
              class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Support Email
            </label>
            <input
              v-model="settings.supportEmail"
              type="email"
              class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                v-model="settings.maintenanceMode"
                type="checkbox"
                class="peer sr-only"
              />
              <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary-800"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Maintenance Mode
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          Security Settings
        </h3>
        <div class="space-y-4">
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Session Timeout (minutes)
            </label>
            <input
              v-model="settings.sessionTimeout"
              type="number"
              min="5"
              max="1440"
              class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                v-model="settings.twoFactorAuth"
                type="checkbox"
                class="peer sr-only"
              />
              <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary-800"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Require Two-Factor Authentication
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Email Settings -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          Email Settings
        </h3>
        <div class="space-y-4">
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              SMTP Host
            </label>
            <input
              v-model="settings.smtpHost"
              type="text"
              class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              SMTP Port
            </label>
            <input
              v-model="settings.smtpPort"
              type="number"
              class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                v-model="settings.smtpSecure"
                type="checkbox"
                class="peer sr-only"
              />
              <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary-800"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Use SSL/TLS
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const settings = ref({
  systemName: 'NexCode',
  supportEmail: 'support@nexcode.com',
  maintenanceMode: false,
  sessionTimeout: 30,
  twoFactorAuth: true,
  smtpHost: 'smtp.nexcode.com',
  smtpPort: 587,
  smtpSecure: true,
})

const saveSettings = () => {
  // TODO: Implement settings save logic
  console.log('Saving settings:', settings.value)
}
</script> 