<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Mobile navigation -->
    <MobileNav 
      :is-open="isSidebarOpen"
      :navigation-items="navigationItems"
      @toggle-menu="isSidebarOpen = !isSidebarOpen"
      @close-menu="isSidebarOpen = false"
    />

    <!-- Desktop sidebar -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div class="flex-1 flex flex-col min-h-0 bg-white shadow-lg">
        <!-- Sidebar header -->
        <div class="flex items-center h-16 px-4 border-b border-gray-200">
          <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
            Nexcode
          </NuxtLink>
        </div>

        <!-- Sidebar content -->
        <nav class="flex-1 px-3 py-4 space-y-0.5">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.to"
            :class="[
              isCurrentRoute(item.to)
                ? 'bg-primary/20 text-primary'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
              'group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200'
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                isCurrentRoute(item.to) ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 h-5 w-5'
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- User menu (desktop) -->
        <div class="border-t border-gray-200 p-3">
          <UserMenu />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="lg:pl-64 flex flex-col min-h-screen">
      <!-- Top header -->
      <header class="sticky top-0 z-10 bg-white border-b border-gray-200 lg:hidden">
        <div class="px-4">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                Nexcode
              </NuxtLink>
            </div>
            <div class="flex items-center gap-4">
              <NuxtLink 
                to="/" 
                class="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
              >
                Exit to Home
              </NuxtLink>
              <MobileNav 
                :is-open="isSidebarOpen"
                :navigation-items="navigationItems"
                @toggle-menu="isSidebarOpen = !isSidebarOpen"
                @close-menu="isSidebarOpen = false"
              />
            </div>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import MobileNav from '~/protected/components/dashboard/navigation/MobileNav.vue'
import DashboardIcon from '~/protected/components/dashboard/icons/DashboardIcon.vue'
import ProjectsIcon from '~/protected/components/dashboard/icons/ProjectsIcon.vue'
import GenerateIcon from '~/protected/components/dashboard/icons/GenerateIcon.vue'

const route = useRoute()
const isSidebarOpen = ref(false)

// Navigation items with icons
const navigationItems = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: DashboardIcon
  },
  {
    name: 'Projects',
    to: '/dashboard/projects',
    icon: ProjectsIcon
  },
  {
    name: 'Generate',
    to: '/dashboard/generate',
    icon: GenerateIcon
  },
]

// Check if route is current
function isCurrentRoute(path: string) {
  return route.path === path
}

// Close sidebar on route change on mobile
watch(route, () => {
  isSidebarOpen.value = false
})
</script>
