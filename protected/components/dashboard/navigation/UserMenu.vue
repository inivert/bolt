<template>
  <div class="relative inline-block" ref="menuRef">
    <!-- User menu button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      <!-- Avatar -->
      <div class="relative w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
        <img
          v-if="user?.user_metadata?.avatar_url"
          :src="user.user_metadata.avatar_url"
          :alt="user.email"
          class="w-full h-full object-cover"
        />
        <span 
          v-else
          class="text-sm font-semibold text-primary"
        >
          {{ userInitials }}
        </span>
      </div>

      <!-- User info (desktop only) -->
      <div class="hidden lg:flex flex-col items-start min-w-0">
        <span class="text-sm font-medium text-gray-900 truncate">
          {{ userName }}
        </span>
        <span class="text-xs text-gray-600 truncate">
          {{ user?.email }}
        </span>
      </div>

      <!-- Dropdown arrow -->
      <svg
        class="w-4 h-4 text-gray-600 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-full left-0 mb-1 ml-2 w-64 rounded-lg bg-white shadow-xl ring-1 ring-black/5 focus:outline-none z-[100]"
        :class="[
          'max-h-[calc(100vh-4rem)] overflow-y-auto'
        ]"
      >
        <!-- User info (mobile only) -->
        <div class="lg:hidden px-4 py-3 border-b border-gray-100">
          <p class="text-sm font-medium text-gray-900 truncate">
            {{ userName }}
          </p>
          <p class="text-xs text-gray-600 mt-0.5 truncate">
            {{ user?.email }}
          </p>
        </div>

        <!-- Menu items -->
        <div class="py-1">
          <NuxtLink
            to="/dashboard/settings"
            class="group flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            @click="isOpen = false"
          >
            <svg
              class="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </NuxtLink>

          <button
            @click="handleSignOut"
            class="group flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              class="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()
const menuRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const userName = computed(() => {
  const fullName = user.value?.user_metadata?.full_name
  const email = user.value?.email
  
  if (fullName) return fullName
  if (email) {
    const username = email.split('@')[0]
    // Capitalize first letter and remove numbers for a more personal feel
    return username.charAt(0).toUpperCase() + username.slice(1).replace(/[0-9]/g, '')
  }
  return 'User'
})

const userInitials = computed(() => {
  const name = userName.value
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const handleSignOut = async () => {
  isOpen.value = false
  await supabase.auth.signOut()
  router.push('/login')
}

// Close dropdown when clicking outside
onClickOutside(menuRef, () => {
  isOpen.value = false
})

// Close on escape key
onKeyStroke('Escape', () => {
  isOpen.value = false
})

// Close dropdown on route change
watch(() => router.currentRoute.value.path, () => {
  isOpen.value = false
})
</script>
