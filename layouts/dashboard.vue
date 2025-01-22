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

const route = useRoute()
const isSidebarOpen = ref(false)

// SVG path constants
const SVG_PATHS = {
  DASHBOARD: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  PROJECTS: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  GENERATE: 'M15 4.88l-3-3m0 0l-3 3m3-3v13.88m-3.88-3l3 3m0 0l3-3m-3 3V4.88M4.27 19.73L19.73 4.27m0 0L15 4.88m4.73-.61v4.34M4.27 19.73L8.61 19m-4.34.73V15'
}

// Navigation items with icons
const navigationItems = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: defineComponent({
      render: () => h('svg', { 
        class: 'h-5 w-5',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor'
      }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: SVG_PATHS.DASHBOARD
        })
      ])
    })
  },
  {
    name: 'Projects',
    to: '/dashboard/projects',
    icon: defineComponent({
      render: () => h('svg', {
        class: 'h-5 w-5',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor'
      }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: SVG_PATHS.PROJECTS
        })
      ])
    })
  },
  {
    name: 'Generate',
    to: '/dashboard/generate',
    icon: defineComponent({
      render: () => h('svg', {
        class: 'h-5 w-5',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor'
      }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: SVG_PATHS.GENERATE
        })
      ])
    })
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
