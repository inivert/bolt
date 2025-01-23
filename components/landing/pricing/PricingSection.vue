<template>
  <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
        <p class="text-lg text-gray-600">Choose the plan that's right for you and start building your amazing website today.</p>
      </div>

      <!-- Billing toggle -->
      <div class="flex justify-center mb-12">
        <div class="flex items-center bg-gray-50 rounded-full p-1.5">
          <div class="flex items-center justify-end w-[88px] px-4">
            <span class="text-sm font-medium" :class="!yearlyBilling ? 'text-primary-600' : 'text-gray-500'">Monthly</span>
          </div>
          <button
            class="relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ease-in-out focus:outline-none mx-1"
            role="switch"
            :aria-checked="yearlyBilling"
            aria-label="Toggle yearly billing"
            type="button"
            @click="yearlyBilling = !yearlyBilling"
          >
            <span
              class="pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition-all duration-300 ease-in-out translate-x-0.5"
              :class="yearlyBilling ? 'translate-x-7' : ''"
            />
          </button>
          <div class="flex items-center space-x-1 w-[88px] px-4">
            <span class="text-sm font-medium" :class="yearlyBilling ? 'text-primary-600' : 'text-gray-500'">Yearly</span>
            <span class="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-800">
              -20%
            </span>
          </div>
        </div>
      </div>

      <!-- Pricing cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Free tier -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div class="p-8">
            <h3 class="text-lg font-semibold text-gray-900">Free</h3>
            <p class="mt-2 text-sm text-gray-500">Perfect for trying out Nexcode</p>
            <p class="mt-4">
              <span class="text-4xl font-bold text-gray-900">$0</span>
              <span class="text-sm font-medium text-gray-500">/month</span>
            </p>
          </div>
          <div class="px-8 pb-8">
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">Basic website analytics</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">Basic support</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">Community access</span>
              </li>
            </ul>
            <button
              class="mt-8 w-full py-3 px-4 rounded-lg text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Get started for free
            </button>
          </div>
        </div>

        <!-- Pro tier -->
        <div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg overflow-hidden transform scale-105">
          <div class="p-8">
            <h3 class="text-lg font-semibold text-white">Pro</h3>
            <p class="mt-2 text-primary-100">For professional developers</p>
            <p class="mt-4">
              <span class="text-4xl font-bold text-white">{{ yearlyBilling ? '$29' : '$39' }}</span>
              <span class="text-sm font-medium text-primary-100">/month</span>
            </p>
          </div>
          <div class="px-8 pb-8">
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-white">Advanced website analytics</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-white">Priority support</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-white">Advanced features</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-white">Custom integrations</span>
              </li>
            </ul>
            <button
              class="mt-8 w-full py-3 px-4 rounded-lg text-sm font-medium text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              Get started
            </button>
          </div>
        </div>

        <!-- Enterprise tier -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div class="p-8">
            <h3 class="text-lg font-semibold text-gray-900">Enterprise</h3>
            <p class="mt-2 text-sm text-gray-500">For large teams and organizations</p>
            <p class="mt-4">
              <span class="text-4xl font-bold text-gray-900">Custom</span>
            </p>
          </div>
          <div class="px-8 pb-8">
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">Everything in Pro</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">Dedicated support</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">Custom contracts</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-sm text-gray-700">SLA available</span>
              </li>
            </ul>
            <button
              class="mt-8 w-full py-3 px-4 rounded-lg text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const yearlyBilling = ref(false)
</script>
