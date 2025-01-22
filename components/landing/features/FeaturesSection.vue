<template>
  <section id="features" ref="target" class="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:120px_120px] opacity-[0.02] animate-[patternMove_60s_linear_infinite]"></div>
    
    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          Supercharge Your AI Development
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Transform basic prompts into powerful, context-aware instructions that deliver exceptional results with your favorite AI coding assistants.
        </p>
      </div>

      <!-- Features Grid -->
      <div v-auto-animate class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="group relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl border border-gray-100 hover:border-primary-100"
          :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          :style="{ transitionDelay: `${feature.id * 100}ms` }"
        >
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-50/50 to-secondary-50/50 opacity-0 transition-all group-hover:opacity-100 backdrop-blur-sm"></div>
          <div class="relative">
            <div class="mb-4 inline-flex rounded-lg p-3 transition-all transform group-hover:scale-110" :class="getColorClasses(feature.color)">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {{ feature.title }}
              </span>
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

// SVG path constants
const FEATURE_ICONS = {
  PROMPT_ENHANCEMENT: 'M13 10V3L4 14h7v7l9-11h-7z',
  VISUAL_ANALYSIS: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  FLEXIBLE_CREDITS: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  SEAMLESS_INTEGRATION: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  RICH_DOCUMENTATION: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  TIME_SAVING: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
}

const features = ref([
  {
    id: 1,
    title: 'Smart Prompt Enhancement',
    description: 'Our AI analyzes your basic prompts and enhances them with context-aware instructions, making them more effective for AI coding assistants.',
    icon: FEATURE_ICONS.PROMPT_ENHANCEMENT,
    color: 'primary'
  },
  {
    id: 2,
    title: 'Visual Reference Analysis',
    description: 'Upload screenshots or designs, and we\'ll analyze them to generate detailed prompts that capture the essence of your desired UI/UX.',
    icon: FEATURE_ICONS.VISUAL_ANALYSIS,
    color: 'secondary'
  },
  {
    id: 3,
    title: 'Flexible Credits',
    description: 'Pay only for what you use with our credit-based system. Perfect for both occasional users and power users.',
    icon: FEATURE_ICONS.FLEXIBLE_CREDITS,
    color: 'accent'
  },
  {
    id: 4,
    title: 'Seamless Integration',
    description: 'Works perfectly with popular AI coding assistants like Cursor, Nexcode, and Windsurf for a smooth development experience.',
    icon: FEATURE_ICONS.SEAMLESS_INTEGRATION,
    color: 'primary'
  },
  {
    id: 5,
    title: 'Rich Documentation',
    description: 'Generate detailed markdown files with clear instructions for AI assistants to follow, ensuring consistent results.',
    icon: FEATURE_ICONS.RICH_DOCUMENTATION,
    color: 'secondary'
  },
  {
    id: 6,
    title: 'Time-Saving',
    description: 'Save hours of development time by getting perfectly crafted prompts that deliver results on the first try.',
    icon: FEATURE_ICONS.TIME_SAVING,
    color: 'accent'
  }
])

const target = ref(null)
const isVisible = ref(false)

// Use intersection observer to trigger animation when section is in view
useIntersectionObserver(target, ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
  if (isIntersecting) {
    isVisible.value = true
  }
})

// Function to get color classes
const getColorClasses = (color: string) => ({
  'text-primary bg-primary-50': color === 'primary',
  'text-secondary bg-secondary-50': color === 'secondary',
  'text-accent bg-accent-50': color === 'accent'
})
</script> 