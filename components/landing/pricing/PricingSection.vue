<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center">
        <h2 class="text-4xl font-bold text-dark">
          Simple, <span class="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
        </h2>
        <p class="mt-4 text-lg text-dark/80">
          Start for free, upgrade when you need more. No hidden fees.
        </p>
      </div>
      
      <div class="mt-16 grid gap-8 lg:grid-cols-3">
        <!-- Free Tier -->
        <div class="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-dark">Free</h3>
            <span class="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700">Limited</span>
          </div>
          <p class="mt-4 text-dark/70">Perfect for trying out Nexcode</p>
          <div class="mt-6">
            <span class="text-4xl font-bold text-dark">$0</span>
            <span class="text-dark/60">/month</span>
          </div>
          <ul class="mt-8 space-y-4">
            <li class="flex items-center text-dark/80">
              <CheckIcon class="h-5 w-5 text-primary-500 mr-2" />
              100 prompts/month
            </li>
          </ul>
          <NuxtLink
            to="/register"
            class="mt-8 block w-full rounded-full bg-gradient-primary px-6 py-3 text-center font-semibold text-white transition-all hover:opacity-90"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Pro Tier -->
        <div class="relative rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-8 shadow-md transition-all duration-300 hover:shadow-lg">
          <div class="absolute -top-5 right-8 rounded-full bg-gradient-accent px-4 py-1 text-sm font-semibold text-white shadow-sm">
            Popular
          </div>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-white">Pro</h3>
            <span class="rounded-full bg-white/20 px-3 py-1 text-sm text-white">Unlimited</span>
          </div>
          <p class="mt-4 text-white/80">For professional developers</p>
          <div class="mt-6">
            <span class="text-4xl font-bold text-white">$29</span>
            <span class="text-white/80">/month</span>
          </div>
          <ul class="mt-8 space-y-4">
            <li class="flex items-center text-white/90">
              <CheckIcon class="h-5 w-5 text-white mr-2" />
              Unlimited prompts
            </li>
          </ul>
          <NuxtLink
            to="/register"
            class="mt-8 block w-full rounded-full bg-white px-6 py-3 text-center font-semibold text-primary-500 transition-all hover:bg-white/90"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Enterprise Tier -->
        <div class="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-dark">Enterprise</h3>
            <span class="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700">Custom</span>
          </div>
          <p class="mt-4 text-dark/70">For large teams & organizations</p>
          <div class="mt-6">
            <span class="text-4xl font-bold text-dark">Custom</span>
          </div>
          <ul class="mt-8 space-y-4">
            <li class="flex items-center text-dark/80">
              <CheckIcon class="h-5 w-5 text-primary-500 mr-2" />
              Custom solutions
            </li>
          </ul>
          <NuxtLink
            to="/contact"
            class="mt-8 block w-full rounded-full bg-gradient-primary px-6 py-3 text-center font-semibold text-white transition-all hover:opacity-90"
          >
            Contact Sales
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
</script>
