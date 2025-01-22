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
              <!-- Tech Stack Configuration -->
              <Disclosure v-slot="{ open }" as="div" class="border border-gray-200 rounded-xl" defaultOpen>
                <DisclosureButton class="flex w-full justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
                  <div class="flex items-center">
                    <CodeBracketIcon class="h-5 w-5 text-primary-500 mr-2" />
                    <span class="text-lg font-medium text-gray-900">Tech Stack Configuration</span>
                  </div>
                  <ChevronUpIcon
                    :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 text-gray-500']"
                  />
                </DisclosureButton>
                <DisclosurePanel class="px-4 py-4 space-y-6">
                  <!-- Frontend Framework -->
                  <Listbox v-model="formData.frontendStack">
                    <div class="space-y-2">
                      <ListboxLabel class="block text-sm font-medium text-gray-900">
                        Frontend Framework
                      </ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200">
                          <span class="block truncate">
                            {{ formData.frontendStack ? frontendStacks.find(s => s.value === formData.frontendStack)?.label : 'Select a framework' }}
                          </span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption
                              v-for="stack in frontendStacks"
                              :key="stack.value"
                              :value="stack.value"
                              v-slot="{ active, selected }"
                            >
                              <li :class="[
                                active ? 'bg-primary-50 text-primary-900' : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-10 pr-4'
                              ]">
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                  {{ stack.label }}
                                  <span class="ml-2 text-sm text-gray-500">{{ stack.versions }}</span>
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </div>
                  </Listbox>

                  <!-- UI Library -->
                  <Listbox v-model="formData.uiLibrary">
                    <div class="space-y-2">
                      <ListboxLabel class="block text-sm font-medium text-gray-900">
                        UI Library
                      </ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200">
                          <span class="block truncate">
                            {{ formData.uiLibrary ? uiLibraries.find(l => l.value === formData.uiLibrary)?.label : 'Select a UI library' }}
                          </span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption
                              v-for="library in uiLibraries"
                              :key="library.value"
                              :value="library.value"
                              v-slot="{ active, selected }"
                            >
                              <li :class="[
                                active ? 'bg-primary-50 text-primary-900' : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-10 pr-4'
                              ]">
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                  {{ library.label }}
                                  <span class="ml-2 text-sm text-gray-500">{{ library.versions }}</span>
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </div>
                  </Listbox>

                  <!-- Backend Stack -->
                  <Listbox v-model="formData.backendStack">
                    <div class="space-y-2">
                      <ListboxLabel class="block text-sm font-medium text-gray-900">
                        Backend Framework
                      </ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200">
                          <span class="block truncate">
                            {{ formData.backendStack ? backendStacks.find(s => s.value === formData.backendStack)?.label : 'Select a backend' }}
                          </span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption
                              v-for="stack in backendStacks"
                              :key="stack.value"
                              :value="stack.value"
                              v-slot="{ active, selected }"
                            >
                              <li :class="[
                                active ? 'bg-primary-50 text-primary-900' : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-10 pr-4'
                              ]">
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                  {{ stack.label }}
                                  <span class="ml-2 text-sm text-gray-500">{{ stack.versions }}</span>
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </div>
                  </Listbox>

                  <!-- Cloud Provider -->
                  <Listbox v-model="formData.backendProvider">
                    <div class="space-y-2">
                      <ListboxLabel class="block text-sm font-medium text-gray-900">
                        Cloud Provider
                      </ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200">
                          <span class="block truncate">
                            {{ formData.backendProvider ? backendProviders.find(p => p.value === formData.backendProvider)?.label : 'Select a provider' }}
                          </span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption
                              v-for="provider in backendProviders"
                              :key="provider.value"
                              :value="provider.value"
                              v-slot="{ active, selected }"
                            >
                              <li :class="[
                                active ? 'bg-primary-50 text-primary-900' : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-10 pr-4'
                              ]">
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                  {{ provider.label }}
                                  <span class="ml-2 text-sm text-gray-500">{{ provider.description }}</span>
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </div>
                  </Listbox>

                  <!-- Build Tools -->
                  <Listbox v-model="formData.buildTool">
                    <div class="space-y-2">
                      <ListboxLabel class="block text-sm font-medium text-gray-900">
                        Build Tool
                      </ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200">
                          <span class="block truncate">
                            {{ formData.buildTool ? buildTools.find(t => t.value === formData.buildTool)?.label : 'Select a build tool' }}
                          </span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption
                              v-for="tool in buildTools"
                              :key="tool.value"
                              :value="tool.value"
                              v-slot="{ active, selected }"
                            >
                              <li :class="[
                                active ? 'bg-primary-50 text-primary-900' : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-10 pr-4'
                              ]">
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                  {{ tool.label }}
                                  <span class="ml-2 text-sm text-gray-500">{{ tool.versions }}</span>
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </div>
                  </Listbox>

                  <!-- Package Manager -->
                  <Listbox v-model="formData.packageManager">
                    <div class="space-y-2">
                      <ListboxLabel class="block text-sm font-medium text-gray-900">
                        Package Manager
                      </ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200">
                          <span class="block truncate">
                            {{ formData.packageManager ? packageManagers.find(m => m.value === formData.packageManager)?.label : 'Select a package manager' }}
                          </span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption
                              v-for="manager in packageManagers"
                              :key="manager.value"
                              :value="manager.value"
                              v-slot="{ active, selected }"
                            >
                              <li :class="[
                                active ? 'bg-primary-50 text-primary-900' : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-10 pr-4'
                              ]">
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                  {{ manager.label }}
                                  <span class="ml-2 text-sm text-gray-500">{{ manager.versions }}</span>
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </div>
                  </Listbox>
                </DisclosurePanel>
              </Disclosure>

              <!-- AI Prompt Section -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <label for="prompt" class="block text-lg font-medium text-gray-900">
                    AI Prompt
                    <span class="text-sm ml-2 text-gray-500">(Minimum 50 characters)</span>
                  </label>
                  <span class="text-sm text-gray-500">
                    {{ formData.prompt?.length || 0 }}/2000
                  </span>
                </div>
                
                <div class="relative group">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/50 to-primary-50/20 rounded-xl shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
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
                      <span v-if="(formData.prompt?.length || 0) < 50" class="text-xs text-red-500">
                        Minimum 50 characters required
                      </span>
                      <span v-else-if="formData.prompt?.length >= 1800" class="text-xs text-yellow-500">
                        Approaching character limit
                      </span>
                      <span v-else class="text-xs text-gray-500">
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
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  XMarkIcon,
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
</script>
