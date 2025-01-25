<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Desktop sidebar -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div class="flex-1 flex flex-col min-h-0 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-lg backdrop-blur-sm">
        <!-- Sidebar header -->
        <div class="flex items-center h-16 px-4 border-b border-gray-200 bg-gradient-to-r from-white to-primary-100/30">
          <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent">
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
                ? 'bg-gradient-to-r from-primary/20 to-primary-600/10 text-primary'
                : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:text-gray-900',
              'group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200'
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                isCurrentRoute(item.to) ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 h-5 w-5 transition-colors duration-200'
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- User menu (desktop) -->
        <div class="border-t border-gray-200 p-3 bg-gradient-to-r from-white/90 to-primary-100/30">
          <UserMenu />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="lg:pl-64 flex flex-col min-h-screen">
      <!-- Top header -->
      <header class="sticky top-0 z-10 bg-gradient-to-r from-white/90 to-primary-100/30 backdrop-blur-md border-b border-gray-200 lg:hidden">
        <div class="px-4">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent">
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
import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import type { Database } from '~/types/database.types'
import MobileNav from '~/protected/components/dashboard/navigation/MobileNav.vue'
import DashboardIcon from '~/protected/components/dashboard/icons/DashboardIcon.vue'
import WebsiteIcon from '~/protected/components/dashboard/icons/WebsiteIcon.vue'
import SupportIcon from '~/protected/components/dashboard/icons/SupportIcon.vue'
import BillingIcon from '~/protected/components/dashboard/icons/BillingIcon.vue'
import AdminIcon from '~/protected/components/dashboard/icons/AdminIcon.vue'
import UsersIcon from '~/protected/components/dashboard/icons/UsersIcon.vue'
import EarningsIcon from '~/protected/components/dashboard/icons/EarningsIcon.vue'
import InvitationsIcon from '~/protected/components/dashboard/icons/InvitationsIcon.vue'

const route = useRoute()
const isSidebarOpen = ref(false)
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()

// User role state
const userRole = ref<'admin' | 'user' | null>(null)

// Fetch user role
const fetchUserRole = async () => {
  if (!user.value) return

  try {
    // First try to get role from user metadata
    const role = user.value.user_metadata?.role

    if (role) {
      userRole.value = role as 'admin' | 'user'
      return
    }

    // If no role in metadata, check database
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.value.id)
      .maybeSingle()

    if (error) {
      console.error('Error fetching user role:', error)
      userRole.value = 'user' // Default to user on error
      return
    }

    if (data) {
      userRole.value = data.role as 'admin' | 'user'
      
      // Update user metadata for future checks
      await supabase.auth.updateUser({
        data: { role: data.role }
      })
    } else {
      userRole.value = 'user'
    }
  } catch (e) {
    console.error('Error in fetchUserRole:', e)
    userRole.value = 'user'
  }
}

// Navigation items with icons
const navigationItems = computed(() => {
  // Admin navigation items
  if (userRole.value === 'admin') {
    return [
      {
        name: 'Dashboard',
        to: '/dashboard/admin',
        icon: DashboardIcon
      },
      {
        name: 'Earnings',
        to: '/dashboard/admin/earnings',
        icon: EarningsIcon
      },
      {
        name: 'Users',
        to: '/dashboard/admin/users',
        icon: UsersIcon
      },
      {
        name: 'Invitations',
        to: '/dashboard/admin/invitations',
        icon: InvitationsIcon
      },
      {
        name: 'User Dashboard',
        to: '/dashboard',
        icon: WebsiteIcon
      }
    ]
  }

  // User navigation items
  return [
    {
      name: 'Dashboard',
      to: '/dashboard',
      icon: DashboardIcon
    },
    {
      name: 'Website Overview',
      to: '/dashboard/website-overview',
      icon: WebsiteIcon
    },
    {
      name: 'Billing',
      to: '/dashboard/billing',
      icon: BillingIcon
    },
    {
      name: 'Support',
      to: '/dashboard/support',
      icon: SupportIcon
    }
  ]
})

// Check if route is current
function isCurrentRoute(path: string) {
  return route.path === path
}

// Close sidebar on route change on mobile
watch(route, () => {
  isSidebarOpen.value = false
})

// Fetch user role on mount
onMounted(() => {
  fetchUserRole()
})

// Watch for user changes
watch(user, () => {
  fetchUserRole()
})
</script>
