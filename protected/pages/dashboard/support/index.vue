<template>
  <div class="min-h-[calc(100vh-4rem)] py-8 bg-gray-50/50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Progress bar -->
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700">Progress</span>
          <span class="text-sm font-medium text-primary">{{ formProgress }}%</span>
        </div>
        <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-gradient-to-r from-primary to-primary-600 h-2 rounded-full transition-all duration-300 ease-in-out"
            :style="{ width: `${formProgress}%` }"
          ></div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
        <div class="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <h2 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Support Request</h2>
          <p class="mt-2 text-gray-600">
            We're here to help! Fill out the form below and our support team will get back to you within 24 hours.
          </p>
        </div>

        <!-- Error message with improved styling -->
        <TransitionRoot appear :show="!!error" as="template">
          <div class="relative">
            <div class="p-4 bg-red-50 border-b border-red-100">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <XCircleIcon class="h-5 w-5 text-red-400" />
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">Submission Error</h3>
                  <p class="mt-1 text-sm text-red-700">{{ error }}</p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      class="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                      @click="error = null"
                    >
                      <span class="sr-only">Dismiss</span>
                      <XMarkIcon class="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionRoot>

        <form @submit.prevent="handleSubmit" class="p-6 space-y-8">
          <!-- Basic Information Section -->
          <div class="space-y-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary">
                  <InformationCircleIcon class="h-5 w-5" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Basic Information</h3>
                <p class="text-sm text-gray-500">Start with the basic details of your request</p>
              </div>
            </div>

            <!-- Subject with character count -->
            <div class="relative">
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                maxlength="100"
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-all duration-200"
                :class="{ 'border-red-300': form.subject.length >= 90 }"
                placeholder="Brief description of your issue"
              />
              <span class="absolute right-2 bottom-2 text-xs text-gray-400">
                {{ form.subject.length }}/100
              </span>
            </div>

            <!-- Category with improved select -->
            <div class="relative">
              <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                v-model="form.category"
                required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm appearance-none bg-white transition-all duration-200"
              >
                <option value="" disabled>Select a category</option>
                <option value="technical">🔧 Technical Issue</option>
                <option value="billing">💳 Billing</option>
                <option value="account">👤 Account</option>
                <option value="feature">💡 Feature Request</option>
                <option value="other">❓ Other</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-5">
                <ChevronDownIcon class="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <!-- Priority with custom radio buttons -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <label
                  v-for="priority in ['low', 'medium', 'high', 'urgent']"
                  :key="priority"
                  :class="[
                    'relative flex cursor-pointer rounded-lg border p-4 focus:outline-none transition-all duration-200',
                    form.priority === priority
                      ? 'border-primary-200 bg-primary-50 ring-2 ring-primary'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  ]"
                >
                  <input
                    type="radio"
                    :name="priority"
                    :value="priority"
                    v-model="form.priority"
                    class="sr-only"
                    required
                  />
                  <div class="flex w-full items-center justify-center">
                    <div class="text-sm">
                      <p :class="[
                        'font-medium',
                        form.priority === priority ? 'text-primary-900' : 'text-gray-900'
                      ]">
                        {{ priority.charAt(0).toUpperCase() + priority.slice(1) }}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Description Section -->
          <div class="space-y-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary">
                  <DocumentTextIcon class="h-5 w-5" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Description</h3>
                <p class="text-sm text-gray-500">Provide detailed information about your issue</p>
              </div>
            </div>

            <div class="relative">
              <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                v-model="form.description"
                rows="4"
                required
                maxlength="2000"
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-all duration-200"
                :class="{ 'border-red-300': form.description.length >= 1900 }"
                placeholder="Please provide detailed information about your issue..."
              />
              <span class="absolute right-2 bottom-2 text-xs text-gray-400">
                {{ form.description.length }}/2000
              </span>
              <p class="mt-2 text-sm text-gray-500">
                Include any relevant error messages or steps to reproduce the issue.
              </p>
            </div>
          </div>

          <!-- Attachments Section -->
          <div class="space-y-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary">
                  <PaperClipIcon class="h-5 w-5" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Attachments</h3>
                <p class="text-sm text-gray-500">Add screenshots or relevant files</p>
              </div>
            </div>

            <div
              class="relative group"
              @dragover.prevent
              @drop.prevent="handleFileDrop"
            >
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-all duration-200"
                :class="[
                  isDragging ? 'border-primary bg-primary-50' : 'border-gray-300 hover:border-primary group-hover:bg-gray-50'
                ]"
              >
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary transition-colors duration-200" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                    >
                      <span>Upload files</span>
                      <input
                        id="file-upload"
                        type="file"
                        class="sr-only"
                        @change="handleFileUpload"
                        multiple
                        accept=".png,.jpg,.jpeg,.pdf"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, PDF up to 10MB each</p>
                </div>
              </div>
            </div>

            <!-- File list with animations -->
            <TransitionGroup
              name="list"
              tag="ul"
              class="mt-4 space-y-2"
            >
              <li
                v-for="(file, index) in form.attachments"
                :key="file.name"
                class="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <DocumentIcon class="h-5 w-5 text-gray-400" />
                  <span class="text-sm text-gray-600">{{ file.name }}</span>
                  <span class="text-xs text-gray-400">({{ formatFileSize(file.size) }})</span>
                </div>
                <button
                  type="button"
                  class="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  @click="removeFile(index)"
                >
                  <XMarkIcon class="h-5 w-5" />
                </button>
              </li>
            </TransitionGroup>
          </div>

          <!-- Submit button -->
          <div class="pt-6">
            <button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-base font-medium text-white shadow-lg hover:shadow-xl bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              <span v-if="isSubmitting" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
              <span v-else class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Submit Support Request
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <TransitionRoot appear :show="showSuccessModal" as="template">
      <Dialog as="div" class="relative z-10" @close="closeSuccessModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <CheckIcon class="h-6 w-6 text-green-600" />
                </div>
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 text-center mt-4"
                >
                  Request Submitted Successfully!
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500 text-center">
                    Thank you for submitting your support request. Our team will review it and get back to you within 24 hours.
                  </p>
                </div>

                <div class="mt-4 flex justify-center">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    @click="closeSuccessModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSupabaseUser } from '#imports'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  XCircleIcon,
  XMarkIcon,
  CheckIcon,
  DocumentIcon,
  PaperClipIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

interface SupportForm {
  subject: string
  category: string
  priority: string
  description: string
  attachments: File[]
}

const user = useSupabaseUser()
const form = ref<SupportForm>({
  subject: '',
  category: '',
  priority: '',
  description: '',
  attachments: []
})

const isSubmitting = ref(false)
const error = ref<string | null>(null)
const isDragging = ref(false)
const showSuccessModal = ref(false)

// Computed properties
const formProgress = computed(() => {
  let progress = 0
  if (form.value.subject) progress += 25
  if (form.value.category) progress += 25
  if (form.value.priority) progress += 25
  if (form.value.description) progress += 25
  return progress
})

const isFormValid = computed(() => {
  return (
    form.value.subject.trim() !== '' &&
    form.value.category !== '' &&
    form.value.priority !== '' &&
    form.value.description.trim() !== ''
  )
})

// File handling functions
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function handleFileDrop(event: DragEvent) {
  isDragging.value = false
  const files = event.dataTransfer?.files
  if (files) {
    handleFiles(Array.from(files))
  }
}

function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files) {
    handleFiles(Array.from(input.files))
  }
}

function handleFiles(files: File[]) {
  const validFiles = files.filter(file => {
    const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
    const isValidType = ['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)
    return isValidSize && isValidType
  })
  form.value.attachments.push(...validFiles)
}

function removeFile(index: number) {
  form.value.attachments.splice(index, 1)
}

function closeSuccessModal() {
  showSuccessModal.value = false
  // Reset form
  form.value = {
    subject: '',
    category: '',
    priority: '',
    description: '',
    attachments: []
  }
}

async function handleSubmit() {
  error.value = null
  isSubmitting.value = true
  try {
    // Convert files to base64
    const filePromises = form.value.attachments.map(async (file) => {
      return new Promise<{ data: string; fileName: string; contentType: string; fileSize: number }>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          const base64String = reader.result as string
          const base64Data = base64String.split(',')[1]
          resolve({
            data: base64Data,
            fileName: file.name,
            contentType: file.type,
            fileSize: file.size
          })
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
    })

    const attachmentsData = await Promise.all(filePromises)

    const payload = {
      subject: form.value.subject,
      category: form.value.category,
      priority: form.value.priority,
      description: form.value.description,
      user: {
        id: user.value?.id,
        email: user.value?.email,
        name: user.value?.user_metadata?.full_name
      },
      timestamp: new Date().toISOString(),
      attachments: attachmentsData
    }

    const response = await fetch('/api/webhook/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit support request')
    }
    
    if (result.success) {
      showSuccessModal.value = true
    } else {
      throw new Error(result.error || 'Failed to submit support request')
    }
  } catch (err) {
    console.error('Error submitting support request:', err)
    error.value = err instanceof Error ? err.message : 'An error occurred while submitting your request. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 