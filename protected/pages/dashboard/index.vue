<template>
  <div class="min-h-[calc(100vh-4rem)]">
    <!-- Mobile view -->
    <div class="lg:hidden">
      <div class="bg-gradient-to-r from-white/90 to-primary-100/30 backdrop-blur-md shadow-sm">
        <div class="px-4 py-5">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-900">Welcome back, {{ userName }}!</h2>
            <UserMenu class="ml-4" />
          </div>
          <p class="mt-1 text-sm text-gray-500">Here's an overview of your website's performance.</p>
        </div>
      </div>

      <!-- Mobile stats -->
      <div class="px-4 py-6 space-y-6">
        <div class="grid grid-cols-1 gap-4">
          <template v-for="card in statsCards" :key="card.title">
            <div class="bg-gradient-to-br from-white to-gray-50/90 rounded-lg p-6 shadow-md backdrop-blur-sm border border-gray-100">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg :class="`h-6 w-6 text-${card.iconColor}-600`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon" />
                  </svg>
                </div>
                <div class="ml-4 flex-1">
                  <h3 class="text-sm font-medium text-gray-900">{{ card.title }}</h3>
                  <div class="mt-1">
                    <p class="text-2xl font-semibold text-gray-900">{{ card.value }}</p>
                  </div>
                  <div v-if="card.change" class="mt-2">
                    <p :class="`text-sm ${card.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`">
                      {{ card.change }}
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="card.footer" class="mt-4 border-t border-gray-100 pt-4">
                <NuxtLink :to="card.footer.link" :class="`text-sm font-medium text-${card.iconColor}-600 hover:text-${card.iconColor}-500 flex items-center gap-1`">
                  {{ card.footer.text }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>

        <!-- Mobile quick actions -->
        <div class="bg-gradient-to-br from-white to-gray-50/90 rounded-lg shadow-md backdrop-blur-sm border border-gray-100">
          <div class="p-4 border-b border-gray-200">
            <h3 class="text-base font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div class="p-4">
            <button
              class="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
              @click="$router.push('/dashboard/website-overview')"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Website Details
            </button>
          </div>
        </div>

        <!-- Mobile recent activity -->
        <div class="bg-gradient-to-br from-white to-gray-50/90 rounded-lg shadow-md backdrop-blur-sm border border-gray-100">
          <div class="p-4 border-b border-gray-200">
            <h3 class="text-base font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div class="divide-y divide-gray-200">
            <div v-if="loading" class="p-4">
              <div class="flex items-center justify-center">
                <svg class="animate-spin h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            </div>
            <div v-else-if="!hasActivity" class="p-4 text-center text-gray-500 text-sm">
              No recent activity
            </div>
            <div v-else class="p-4">
              <!-- Activity items will go here -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop view -->
    <div class="hidden lg:block">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        <!-- Welcome section -->
        <div class="bg-gradient-to-br from-white to-gray-50/90 rounded-lg shadow-md backdrop-blur-sm border border-gray-100 p-6">
          <h2 class="text-2xl font-bold text-gray-900">Welcome back, {{ userName }}!</h2>
          <p class="mt-1 text-sm text-gray-500">Here's an overview of your website's performance.</p>
        </div>

        <!-- Stats grid -->
        <div class="grid grid-cols-3 gap-6">
          <template v-for="card in statsCards" :key="card.title">
            <div class="bg-gradient-to-br from-white to-gray-50/90 rounded-lg p-6 shadow-md backdrop-blur-sm border border-gray-100">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg :class="`h-6 w-6 text-${card.iconColor}-600`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon" />
                  </svg>
                </div>
                <div class="ml-4 flex-1">
                  <h3 class="text-sm font-medium text-gray-900">{{ card.title }}</h3>
                  <div class="mt-1">
                    <p class="text-2xl font-semibold text-gray-900">{{ card.value }}</p>
                  </div>
                  <div v-if="card.change" class="mt-2">
                    <p :class="`text-sm ${card.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`">
                      {{ card.change }}
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="card.footer" class="mt-4 border-t border-gray-100 pt-4">
                <NuxtLink :to="card.footer.link" :class="`text-sm font-medium text-${card.iconColor}-600 hover:text-${card.iconColor}-500 flex items-center gap-1`">
                  {{ card.footer.text }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>

        <div class="grid grid-cols-3 gap-6">
          <!-- Recent activity -->
          <div class="col-span-2 bg-gradient-to-br from-white to-gray-50/90 rounded-lg shadow-md backdrop-blur-sm border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div class="divide-y divide-gray-200">
              <div v-if="loading" class="p-6">
                <div class="flex items-center justify-center">
                  <svg class="animate-spin h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
              </div>
              <div v-else-if="!hasActivity" class="p-6 text-center text-gray-500">
                No recent activity
              </div>
              <div v-else class="p-6">
                <!-- Activity items will go here -->
              </div>
            </div>
          </div>

          <!-- Quick actions -->
          <div class="bg-gradient-to-br from-white to-gray-50/90 rounded-lg shadow-md backdrop-blur-sm border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-lg font-medium text-gray-900">Quick Actions</h3>
            </div>
            <div class="p-6">
              <button
                class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 group"
                @click="$router.push('/dashboard/website-overview')"
              >
                <svg class="mx-auto h-8 w-8 text-gray-400 group-hover:text-primary transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900">View Website Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

interface StatsCard {
  title: string
  value: number
  color: string
  icon: string
  iconColor: string
  change?: string
  changeType?: 'increase' | 'decrease'
  footer?: {
    text: string
    link: string
  }
}

const loading = ref(true)
const totalAnalytics = ref(0)
const activeUsers = ref(0)
const pageViews = ref(0)
const hasActivity = ref(false)
const analyticsChange = ref('0%')
const analyticsChangeType = ref<'increase' | 'decrease'>('increase')

const LOADING_DELAY_MS = 1000

// Stats card configurations for reuse
const statsCards: StatsCard[] = [
  {
    title: 'Website Analytics',
    value: totalAnalytics.value,
    color: 'blue',
    change: analyticsChange.value,
    changeType: analyticsChangeType.value,
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10',
    iconColor: 'blue',
    footer: {
      text: 'View full analytics',
      link: '/dashboard/website-overview'
    }
  },
  {
    title: 'Active Users',
    value: activeUsers.value,
    color: 'green',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    iconColor: 'green'
  },
  {
    title: 'Page Views',
    value: pageViews.value,
    color: 'purple',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    iconColor: 'purple'
  }
]

const userName = computed(() => {
  const fullName = user.value?.user_metadata?.full_name
  const email = user.value?.email
  
  if (fullName) {
    // Get first name for a more personal greeting
    return fullName.split(' ')[0]
  }
  if (email) {
    const username = email.split('@')[0]
    // Capitalize first letter and remove numbers for a more personal feel
    return username.charAt(0).toUpperCase() + username.slice(1).replace(/\d/g, '')
  }
  return 'User'
})

// Simulate loading state
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, LOADING_DELAY_MS)
})
</script>
