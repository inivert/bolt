<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="$emit('close')" />

      <!-- Modal panel -->
      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Edit User
            </h3>
            <div class="mt-6 space-y-6">
              <!-- Full Name -->
              <div>
                <label for="full_name" class="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div class="mt-1">
                  <input
                    id="full_name"
                    v-model="formData.full_name"
                    type="text"
                    class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
              </div>

              <!-- Role -->
              <div>
                <label for="role" class="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <div class="mt-1">
                  <select
                    id="role"
                    v-model="formData.role"
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <!-- Status -->
              <div>
                <div class="flex items-center">
                  <button
                    type="button"
                    :class="[
                      formData.is_active
                        ? 'bg-primary-600'
                        : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                    ]"
                    role="switch"
                    aria-checked="false"
                    @click="formData.is_active = !formData.is_active"
                  >
                    <span
                      aria-hidden="true"
                      :class="[
                        formData.is_active ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      ]"
                    />
                  </button>
                  <span class="ml-3">
                    <span class="text-sm font-medium text-gray-900">Active Status</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="save"
          >
            Save Changes
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:w-auto sm:text-sm"
            @click="$emit('close')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

const formData = ref({
  id: '',
  full_name: '',
  email: '',
  role: 'user',
  is_active: true
})

onMounted(() => {
  formData.value = { ...props.user }
})

const save = () => {
  emit('save', formData.value)
}
</script> 