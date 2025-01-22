<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Generate Your Stack</h1>
      <p class="mt-2 text-sm text-gray-600">Configure your ideal tech stack and let our AI generate it for you.</p>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="py-4">
        <div class="bg-white shadow-lg sm:rounded-2xl overflow-hidden">
          <div class="px-4 py-5 sm:p-6">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Quick Presets -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <SparklesIcon class="h-5 w-5 text-primary-500 mr-2" />
                  Quick Start Presets
                </h3>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <button
                    type="button"
                    v-for="preset in presets"
                    :key="preset.name"
                    @click="applyPreset(preset)"
                    :class="[
                      isPresetSelected(preset)
                        ? 'ring-2 ring-primary-500 border-primary-500'
                        : 'border-gray-200 hover:border-primary-500/50',
                      'relative flex flex-col items-start p-4 border-2 rounded-xl focus:outline-none transition-all duration-200 group bg-white hover:shadow-md'
                    ]"
                  >
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>
                    <div class="relative flex items-center justify-between w-full">
                      <span class="text-base font-medium text-gray-900">{{ preset.name }}</span>
                      <div class="flex items-center space-x-2">
                        <span v-if="isPresetSelected(preset)" class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/10">
                          <CheckIcon class="h-4 w-4 text-primary-500" />
                        </span>
                        <preset.icon class="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" />
                      </div>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">{{ preset.description }}</p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span
                        v-for="(tech, index) in preset.technologies"
                        :key="index"
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Custom Configuration -->
              <Disclosure v-slot="{ open }" as="div" class="border border-gray-200 rounded-xl bg-white shadow-sm">
                <DisclosureButton class="flex w-full justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
                  <div class="flex items-center">
                    <WrenchScrewdriverIcon class="h-5 w-5 text-primary-500 mr-2" />
                    <span class="text-lg font-medium text-gray-900">Custom Configuration</span>
                  </div>
                  <ChevronUpIcon
                    :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 text-gray-500']"
                  />
                </DisclosureButton>
                <DisclosurePanel class="px-4 py-4">
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <!-- Frontend Framework -->
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-900 flex items-center">
                        <CodeBracketIcon class="h-4 w-4 text-gray-400 mr-1.5" />
                        Frontend Framework
                      </label>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="stack in frontendStacks"
                          :key="stack.value"
                          type="button"
                          @click="formData.frontendStack = stack.value"
                          :class="[
                            formData.frontendStack === stack.value
                              ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-500 border-transparent'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200',
                            'inline-flex items-center px-2.5 py-1.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-200 hover:shadow-sm'
                          ]"
                        >
                          {{ stack.label }}
                          <span class="ml-1.5 text-xs opacity-60">{{ stack.versions }}</span>
                        </button>
                      </div>
                    </div>

                    <!-- UI Library -->
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-900 flex items-center">
                        <SwatchIcon class="h-4 w-4 text-gray-400 mr-1.5" />
                        UI Library
                      </label>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="library in uiLibraries"
                          :key="library.value"
                          type="button"
                          @click="formData.uiLibrary = library.value"
                          :class="[
                            formData.uiLibrary === library.value
                              ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-500 border-transparent'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200',
                            'inline-flex items-center px-2.5 py-1.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-200 hover:shadow-sm'
                          ]"
                        >
                          {{ library.label }}
                          <span class="ml-1.5 text-xs opacity-60">{{ library.versions }}</span>
                        </button>
                      </div>
                    </div>

                    <!-- Backend Stack -->
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-900 flex items-center">
                        <ServerIcon class="h-4 w-4 text-gray-400 mr-1.5" />
                        Backend Framework
                      </label>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="stack in backendStacks"
                          :key="stack.value"
                          type="button"
                          @click="formData.backendStack = stack.value"
                          :class="[
                            formData.backendStack === stack.value
                              ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-500 border-transparent'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200',
                            'inline-flex items-center px-2.5 py-1.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-200 hover:shadow-sm'
                          ]"
                        >
                          {{ stack.label }}
                          <span class="ml-1.5 text-xs opacity-60">{{ stack.versions }}</span>
                        </button>
                      </div>
                    </div>

                    <!-- Cloud Provider -->
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-900 flex items-center">
                        <CloudIcon class="h-4 w-4 text-gray-400 mr-1.5" />
                        Cloud Provider
                      </label>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="provider in backendProviders"
                          :key="provider.value"
                          type="button"
                          @click="formData.backendProvider = provider.value"
                          :class="[
                            formData.backendProvider === provider.value
                              ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-500 border-transparent'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200',
                            'inline-flex items-center px-2.5 py-1.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-200 hover:shadow-sm'
                          ]"
                        >
                          {{ provider.label }}
                          <span class="ml-1.5 text-xs opacity-60">{{ provider.description }}</span>
                        </button>
                      </div>
                    </div>

                    <!-- Build Tools -->
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-900 flex items-center">
                        <CubeIcon class="h-4 w-4 text-gray-400 mr-1.5" />
                        Build Tool
                      </label>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="tool in buildTools"
                          :key="tool.value"
                          type="button"
                          @click="formData.buildTool = tool.value"
                          :class="[
                            formData.buildTool === tool.value
                              ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-500 border-transparent'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200',
                            'inline-flex items-center px-2.5 py-1.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-200 hover:shadow-sm'
                          ]"
                        >
                          {{ tool.label }}
                          <span class="ml-1.5 text-xs opacity-60">{{ tool.versions }}</span>
                        </button>
                      </div>
                    </div>

                    <!-- Package Manager -->
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-900 flex items-center">
                        <CubeTransparentIcon class="h-4 w-4 text-gray-400 mr-1.5" />
                        Package Manager
                      </label>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="manager in packageManagers"
                          :key="manager.value"
                          type="button"
                          @click="formData.packageManager = manager.value"
                          :class="[
                            formData.packageManager === manager.value
                              ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-500 border-transparent'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200',
                            'inline-flex items-center px-2.5 py-1.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-200 hover:shadow-sm'
                          ]"
                        >
                          {{ manager.label }}
                          <span class="ml-1.5 text-xs opacity-60">{{ manager.versions }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>

              <!-- AI Prompt Section -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <label for="prompt" class="block text-lg font-medium text-gray-900 flex items-center">
                    <SparklesIcon class="h-5 w-5 text-primary-500 mr-2" />
                    AI Prompt
                    <span class="text-sm ml-2 text-gray-500">(Minimum 50 characters)</span>
                  </label>
                  <span :class="[
                    formData.prompt?.length >= 1800 ? 'text-yellow-500' : 'text-gray-500',
                    'text-sm transition-colors duration-200'
                  ]">
                    {{ formData.prompt?.length || 0 }}/2000
                  </span>
                </div>
                
                <div class="relative group">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 rounded-xl shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div class="relative rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all duration-200">
                    <textarea
                      id="prompt"
                      v-model="formData.prompt"
                      rows="6"
                      required
                      minlength="50"
                      maxlength="2000"
                      :disabled="isLoading"
                      class="w-full bg-transparent px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm resize-none"
                      placeholder="Describe what you want to generate..."
                    />
                    <div class="flex items-center justify-between px-4 py-2 border-t border-gray-100 bg-gray-50/50">
                      <span v-if="(formData.prompt?.length || 0) < 50" class="text-xs text-red-500 flex items-center">
                        <ExclamationCircleIcon class="h-4 w-4 mr-1" />
                        Minimum 50 characters required
                      </span>
                      <span v-else-if="formData.prompt?.length >= 1800" class="text-xs text-yellow-500 flex items-center">
                        <ExclamationTriangleIcon class="h-4 w-4 mr-1" />
                        Approaching character limit
                      </span>
                      <span v-else class="text-xs text-gray-500 flex items-center">
                        <PencilIcon class="h-4 w-4 mr-1" />
                        Type your requirements in detail
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end">
                <button
                  type="submit"
                  :disabled="isLoading || (formData.prompt?.length || 0) < 50"
                  class="relative inline-flex items-center px-8 py-3 text-base font-medium rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-sm overflow-hidden group"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="relative flex items-center">
                    <span v-if="isLoading" class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                    <span v-else class="flex items-center">
                      Generate Stack
                      <ArrowRightIcon class="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </button>
              </div>
            </form>

            <!-- Notification -->
            <TransitionRoot
              appear
              :show="showMessage"
              as="div"
            >
              <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <TransitionChild
                    as="div"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <div
                      :class="[
                        'transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6',
                        isError ? 'bg-red-50' : 'bg-green-50'
                      ]"
                    >
                      <div>
                        <div :class="[
                          'mx-auto flex h-12 w-12 items-center justify-center rounded-full',
                          isError ? 'bg-red-100' : 'bg-green-100'
                        ]">
                          <CheckIcon v-if="!isError" class="h-6 w-6 text-green-600" />
                          <XMarkIcon v-else class="h-6 w-6 text-red-600" />
                        </div>
                        <div class="mt-3 text-center sm:mt-5">
                          <h3 class="text-base font-semibold leading-6 text-gray-900">
                            {{ isError ? 'Error' : 'Success' }}
                          </h3>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500">
                              {{ message }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TransitionChild>
                </div>
              </div>
            </TransitionRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import {
  CheckIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  CommandLineIcon,
  CloudIcon,
  CubeIcon,
  SparklesIcon,
  CodeBracketIcon,
  ServerIcon,
  SwatchIcon,
  CubeTransparentIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

interface FormData {
  prompt: string
  frontendStack: string
  uiLibrary: string
  backendStack: string
  backendProvider: string
  buildTool: string
  packageManager: string
}

const formData = ref<FormData>({
  prompt: '',
  frontendStack: '',
  uiLibrary: '',
  backendStack: '',
  backendProvider: '',
  buildTool: '',
  packageManager: ''
})

const frontendStacks = [
  { label: 'React', value: 'react', versions: '18+' },
  { label: 'Vue', value: 'vue', versions: '3+' },
  { label: 'Angular', value: 'angular', versions: '15+' },
  { label: 'Svelte', value: 'svelte', versions: '4+' }
]

const uiLibraries = [
  { label: 'Tailwind CSS', value: 'tailwind', versions: '3.4+' },
  { label: 'Material UI', value: 'material', versions: '5.14+' },
  { label: 'Ant Design', value: 'antd', versions: '5.9+' },
  { label: 'Chakra UI', value: 'chakra', versions: '2.8+' }
]

const backendStacks = [
  { label: 'Node.js', value: 'node', versions: '20+' },
  { label: 'Python', value: 'python', versions: '3.11+' },
  { label: 'Go', value: 'go', versions: '1.22+' },
  { label: 'Rust', value: 'rust', versions: '1.75+' }
]

const backendProviders = [
  { label: 'AWS', value: 'aws', description: 'Amazon Web Services' },
  { label: 'Vercel', value: 'vercel', description: 'Serverless Platform' },
  { label: 'Firebase', value: 'firebase', description: 'Google Firebase' },
  { label: 'DigitalOcean', value: 'digitalocean', description: 'Cloud Infrastructure' },
  { label: 'Netlify', value: 'netlify', description: 'Jamstack Platform' },
  { label: 'Railway', value: 'railway', description: 'Developer-First Hosting' }
]

const buildTools = [
  { label: 'Vite', value: 'vite', versions: '5.0+' },
  { label: 'Webpack', value: 'webpack', versions: '5.89+' },
  { label: 'Turbopack', value: 'turbopack', versions: '1.0+' },
  { label: 'Rspack', value: 'rspack', versions: '0.4+' }
]

const packageManagers = [
  { label: 'npm', value: 'npm', versions: '9.0+' },
  { label: 'pnpm', value: 'pnpm', versions: '8.0+' },
  { label: 'yarn', value: 'yarn', versions: '3.0+' },
  { label: 'bun', value: 'bun', versions: '1.0+' }
]

const presets = [
  {
    name: 'Modern Web App',
    description: 'Full-stack JavaScript with modern tooling',
    icon: CommandLineIcon,
    technologies: ['Vue 3', 'Tailwind CSS', 'Node.js', 'Vercel'],
    config: {
      frontendStack: 'vue',
      uiLibrary: 'tailwind',
      backendStack: 'node',
      backendProvider: 'vercel',
      buildTool: 'vite',
      packageManager: 'pnpm'
    }
  },
  {
    name: 'Enterprise Solution',
    description: 'Robust and scalable architecture',
    icon: CubeIcon,
    technologies: ['React', 'Material UI', 'Node.js', 'AWS'],
    config: {
      frontendStack: 'react',
      uiLibrary: 'material',
      backendStack: 'node',
      backendProvider: 'aws',
      buildTool: 'webpack',
      packageManager: 'yarn'
    }
  },
  {
    name: 'Cloud Native',
    description: 'Serverless and cloud-first approach',
    icon: CloudIcon,
    technologies: ['Vue 3', 'Tailwind CSS', 'Python', 'Firebase'],
    config: {
      frontendStack: 'vue',
      uiLibrary: 'tailwind',
      backendStack: 'python',
      backendProvider: 'firebase',
      buildTool: 'vite',
      packageManager: 'pnpm'
    }
  }
]

const applyPreset = (preset: typeof presets[0]) => {
  formData.value = {
    ...formData.value,
    ...preset.config
  }
}

const isLoading = ref(false)
const showMessage = ref(false)
const isError = ref(false)
const message = ref('')

const handleSubmit = async () => {
  isLoading.value = true
  showMessage.value = false

  try {
    const response = await fetch('/api/webhook/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value)
    })

    const result = await response.json()

    if (!result?.success) {
      throw new Error(result?.error || 'Failed to submit form')
    }

    message.value = 'Your stack configuration has been submitted successfully! Our AI is now processing your request.'
    isError.value = false
    formData.value.prompt = ''
  } catch (error) {
    message.value = error instanceof Error ? error.message : 'An error occurred while submitting your request'
    isError.value = true
  } finally {
    isLoading.value = false
    showMessage.value = true
    setTimeout(() => showMessage.value = false, 5000)
  }
}

const isPresetSelected = computed(() => (preset: typeof presets[0]) => {
  return Object.entries(preset.config).every(([key, value]) => formData.value[key as keyof FormData] === value)
})
</script>
