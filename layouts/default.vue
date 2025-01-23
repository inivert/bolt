<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <header class="fixed w-full top-0 z-50 bg-gradient-to-r from-white/90 to-primary-100/30 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
      <nav class="container mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity">
            <img src="/images/logo.svg" alt="Nexcode Logo" class="h-12 w-auto" />
          </NuxtLink>
          <div class="hidden md:flex items-center space-x-6">
            <NuxtLink
              v-for="(link, index) in navLinks"
              :key="index"
              :to="link.to"
              class="relative text-dark hover:text-primary-500 font-medium transition-colors duration-200 group"
            >
              {{ link.text }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <ClientOnly>
            <template v-if="user">
              <NuxtLink to="/dashboard" class="text-dark hover:text-primary-500 font-medium transition-colors duration-200">
                Dashboard
              </NuxtLink>
              <div class="h-6 w-px bg-gray-200" />
              <button
                :disabled="isSigningOut"
                class="text-dark hover:text-primary-500 font-medium transition-colors duration-200 flex items-center disabled:opacity-50"
                @click="handleSignOut"
              >
                <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {{ isSigningOut ? 'Signing out...' : 'Sign Out' }}
              </button>
            </template>
            <template v-else>
              <NuxtLink to="/login" class="text-dark hover:text-primary-500 font-medium transition-colors duration-200">
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/register"
                class="px-6 py-2 bg-gradient-primary text-white rounded-full hover:opacity-90 transition-opacity duration-200 font-medium shadow-sm hover:shadow-md"
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

    <footer class="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 mt-20">
      <!-- Main Footer -->
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-br from-white/80 to-gray-50/90 rounded-2xl p-8 md:p-12 shadow-lg backdrop-blur-sm">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <!-- Brand Section -->
            <div class="space-y-6">
              <div class="space-y-4">
                <h3 class="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                  Nexcode
                </h3>
                <p class="text-gray-600">
                  Transform your prompts into masterpieces
                </p>
              </div>
              <!-- Social Links -->
              <div class="flex gap-4">
                <a href="#" aria-label="Twitter" class="text-gray-600 hover:text-primary transition-colors duration-200 transform hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" class="text-gray-600 hover:text-primary transition-colors duration-200 transform hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="GitHub" class="text-gray-600 hover:text-primary transition-colors duration-200 transform hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <!-- Product Links -->
            <div>
              <h4 class="font-semibold mb-6 text-gray-900 text-lg">
                Product
              </h4>
              <ul class="space-y-3">
                <li>
                  <NuxtLink
                    to="/features"
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Features
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/pricing" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Pricing
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/how-it-works" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Our Process
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Company Links -->
            <div>
              <h4 class="font-semibold mb-6 text-gray-900 text-lg">
                Company
              </h4>
              <ul class="space-y-3">
                <li>
                  <NuxtLink 
                    to="/about" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    About
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/blog" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Blog
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/contact" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Contact
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Legal Links -->
            <div>
              <h4 class="font-semibold mb-6 text-gray-900 text-lg">
                Legal
              </h4>
              <ul class="space-y-3">
                <li>
                  <NuxtLink 
                    to="/privacy" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Privacy Policy
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink 
                    to="/terms" 
                    class="relative text-gray-600 hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    Terms of Service
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-12 pt-8 border-t border-gray-200 text-center">
            <p class="text-gray-600 text-sm">
              &copy; {{ new Date().getFullYear() }} Nexcode. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { to: '/how-it-works', text: 'Our Process' },
  { to: '/consultation', text: 'Consultation' }
]
import type { AuthError } from '@supabase/supabase-js'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { useRouter } from '#imports'

definePageMeta({
  layout: 'default'
})

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
