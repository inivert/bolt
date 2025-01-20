<template>
  <section id="pricing" class="py-20 bg-gray-50" ref="target">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Choose the perfect plan for your needs. Only pay for what you use with our flexible credit system.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div 
        v-auto-animate 
        class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="relative rounded-2xl p-8 transition-all hover:shadow-xl"
          :class="[
            plan.popular ? 'bg-primary' : 'bg-white',
            { 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0 shadow-lg': isVisible }
          ]"
          :style="{ transitionDelay: `${plan.id * 100}ms` }"
        >
          <div 
            v-if="plan.popular" 
            class="absolute -top-4 right-8 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-white"
          >
            Popular
          </div>
          <div class="relative">
            <h3 class="text-xl font-semibold" :class="plan.popular ? 'text-white' : 'text-gray-900'">
              {{ plan.name }}
            </h3>
            <div class="mt-4 flex items-baseline">
              <span class="text-4xl font-bold" :class="plan.popular ? 'text-white' : 'text-gray-900'">
                ${{ plan.price }}
              </span>
              <span class="ml-1" :class="plan.popular ? 'text-white/80' : 'text-gray-600'">/month</span>
            </div>
            <p class="mt-2 text-sm" :class="plan.popular ? 'text-white/80' : 'text-gray-600'">
              {{ plan.description }}
            </p>

            <ul class="mt-8 space-y-4">
              <li 
                v-for="feature in plan.features" 
                :key="feature"
                class="flex items-center"
              >
                <svg class="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3" :class="plan.popular ? 'text-white' : 'text-gray-600'">
                  {{ feature }}
                </span>
              </li>
            </ul>

            <button
              class="mt-8 w-full rounded-full px-6 py-3 transition-colors"
              :class="[
                plan.popular 
                  ? 'bg-white text-primary hover:bg-accent hover:text-white'
                  : 'border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white'
              ]"
              @click="selectPlan(plan.name)"
            >
              {{ plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 text-center">
        <p class="text-gray-600">
          All plans include unlimited access to our documentation and community support.
          <br />Need more credits? Additional credits can be purchased at any time.
        </p>
        <p v-if="selectedPlan" class="mt-4 text-sm font-medium text-primary">
          Selected plan: {{ selectedPlan }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver, useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

const plans = ref([
  {
    id: 1,
    name: 'Starter',
    price: 10,
    description: 'Perfect for getting started',
    features: [
      '100 Credits/month',
      'Basic prompt enhancement',
      'Email support'
    ],
    color: 'primary',
    popular: false
  },
  {
    id: 2,
    name: 'Pro',
    price: 29,
    description: 'Best for growing teams',
    features: [
      '500 Credits/month',
      'Advanced prompt enhancement',
      'Visual reference analysis',
      'Priority support'
    ],
    color: 'primary',
    popular: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 99,
    description: 'For large teams & organizations',
    features: [
      '2000 Credits/month',
      'Custom prompt templates',
      'Team collaboration',
      '24/7 priority support',
      'Custom integrations'
    ],
    color: 'primary',
    popular: false
  }
])

// Use intersection observer for scroll animations
const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true
  }
})

// Store selected plan in local storage
const selectedPlan = useLocalStorage('selected-plan', '')

const selectPlan = (planName: string) => {
  selectedPlan.value = planName
}
</script> 