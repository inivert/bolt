<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav class="container mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            Nexcode
          </NuxtLink>
          <div class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/features" class="text-gray-600 hover:text-primary font-medium transition-colors duration-200">
              Features
            </NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-600 hover:text-primary font-medium transition-colors duration-200">
              Pricing
            </NuxtLink>
            <NuxtLink to="/how-it-works" class="text-gray-600 hover:text-primary font-medium transition-colors duration-200">
              How it Works
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <ClientOnly>
            <template v-if="user">
              <NuxtLink to="/dashboard" class="text-gray-600 hover:text-primary font-medium transition-colors duration-200">
                Dashboard
              </NuxtLink>
              <div class="h-6 w-px bg-gray-200" />
              <button
                @click="handleSignOut"
                :disabled="isSigningOut"
                class="text-gray-600 hover:text-primary font-medium transition-colors duration-200 flex items-center disabled:opacity-50"
              >
                <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {{ isSigningOut ? 'Signing out...' : 'Sign Out' }}
              </button>
            </template>
            <template v-else>
              <NuxtLink to="/login" class="text-gray-600 hover:text-primary font-medium transition-colors duration-200">
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/register"
                class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Get Started
              </NuxtLink>
            </template>
          </ClientOnly>
        </div>
      </nav>
    </header>

    <main class="min-h-screen pt-16">
      <slot />
    </main>

    <footer class="bg-white border-t border-gray-100 mt-20">
      <div class="container mx-auto px-4">
        <div class="bg-gray-50/50 rounded-2xl p-12 shadow-sm backdrop-blur-sm">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="space-y-4">
              <h3 class="text-xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                Nexcode
              </h3>
              <p class="text-gray-600">
                Transform your prompts into masterpieces
              </p>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-gray-900">
                Product
              </h4>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/features" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    Features
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/pricing" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    Pricing
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/how-it-works" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    How it Works
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-gray-900">
                Company
              </h4>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/about" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    About
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    Blog
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    Contact
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-gray-900">
                Legal
              </h4>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/privacy" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    Privacy
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/terms" class="text-gray-600 hover:text-primary transition-colors duration-200">
                    Terms
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {{ new Date().getFullYear() }} Nexcode. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AuthError } from '@supabase/supabase-js'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { useRouter } from '#imports'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()

const isSigningOut = ref(false)

async function handleSignOut() {
  isSigningOut.value = true
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    await router.push('/login')
  } catch (error) {
    const signOutError = error as AuthError
    console.error('Error signing out:', signOutError.message)
  } finally {
    isSigningOut.value = false
  }
}
</script>
