<template>
  <div class="pt-20">
    <section class="py-20 mb-16 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-5xl font-bold text-gray-900 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            How Nexcode Works
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Transform your basic prompts into powerful, context-aware instructions in just a few steps.
          </p>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="How Nexcode Works Steps">
          <!-- Step 1 -->
          <div class="relative group" role="listitem" aria-label="Step 1: Input Your Prompt">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div class="relative">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                1
              </div>
              <h3 class="mb-4 text-2xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Input Your Prompt
                </span>
              </h3>
              <p class="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Start by entering your basic prompt or uploading a reference image of the design you want to achieve.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative group" role="listitem" aria-label="Step 2: AI Enhancement">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-secondary-50 rounded-2xl shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div class="relative">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                2
              </div>
              <h3 class="mb-4 text-2xl font-semibold text-gray-900 group-hover:text-secondary-600 transition-colors duration-300">
                <span class="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                  AI Enhancement
                </span>
              </h3>
              <p class="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Our AI analyzes your input and enhances it with context-aware instructions and best practices.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative group" role="listitem" aria-label="Step 3: Get Results">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-accent-50 rounded-2xl shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-50"></div>
            <div class="relative z-20">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/90 text-2xl font-bold text-black transition-transform duration-300 group-hover:scale-110 shadow-md shadow-accent/50 hover:bg-accent">
                3
              </div>
              <h3 class="mb-4 text-2xl font-semibold text-gray-900 group-hover:text-accent-600 transition-colors duration-300">
                <span class="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                  Get Results
                </span>
              </h3>
              <p class="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Receive your enhanced prompt along with markdown files containing detailed instructions for your AI assistant.
              </p>
            </div>
          </div>
        </div>

        <!-- Example Section -->
        <div class="mt-20 mb-16">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900">
              See It in Action
            </h2>
            <p class="mt-4 text-lg text-gray-600">
              Watch how Nexcode transforms your basic prompts into comprehensive development instructions.
            </p>
          </div>

          <!-- macOS Window Frame -->
          <div class="mt-12">
            <div class="mx-auto max-w-[1200px]">
              <div class="relative mx-auto w-full aspect-[16/9]">
                <div class="relative h-full rounded-2xl bg-[#2D2B3D] p-3 shadow-xl">
                  <!-- Window Controls -->
                  <div class="absolute left-3 top-3 flex space-x-2">
                    <div class="h-3 w-3 rounded-full bg-[#FF5F56]"></div>
                    <div class="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
                    <div class="h-3 w-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  
                  <!-- Content Area -->
                  <div class="mt-6 h-[calc(100%-2rem)] rounded-xl bg-white p-6 relative overflow-hidden">
                    <!-- Content -->
                    <div class="relative h-full grid grid-cols-2 gap-8">
                      <!-- Left Column -->
                      <div class="space-y-6">
                        <!-- Step 1: Initial Input -->
                        <div class="step-animation opacity-0" :class="{ 'opacity-100': animationStep >= 1 || prefersReducedMotion }">
                          <h3 class="mb-2 text-lg font-semibold text-gray-900 flex items-center">
                            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm mr-2">1</span>
                            Initial Prompt
                          </h3>
                          <div class="rounded-lg bg-gray-50 p-4 border border-gray-100 shadow-sm">
                            <p class="font-mono text-sm text-gray-600">Create a modern e-commerce dashboard with real-time analytics</p>
                            <div class="mt-2 flex items-center gap-2">
                              <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                <svg class="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="none"><path d="M7 4v16m0 0l3-3m-3 3l-3-3m12-4V3m0 0l3 3m-3-3l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                Reference Design Added
                              </span>
                              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                                <svg class="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                Requirements Added
                              </span>
                            </div>
                          </div>
                        </div>

                        <!-- Step 2: Enhanced Prompt -->
                        <div class="step-animation opacity-0" :class="{ 'opacity-100': animationStep >= 2 || prefersReducedMotion }">
                          <h3 class="mb-2 text-lg font-semibold text-gray-900 flex items-center">
                            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm mr-2">2</span>
                            Enhanced Prompt
                          </h3>
                          <div class="rounded-lg bg-primary-50/30 p-4 border border-primary-100 shadow-sm space-y-3">
                            <div class="space-y-2">
                              <p class="font-mono text-sm text-gray-800 font-medium">Project Specifications:</p>
                              <ul class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-start">
                                  <span class="mr-2 mt-0.5 text-primary-500">•</span>
                                  <span>Create a responsive admin dashboard with a modern, clean UI following Material Design 3 principles</span>
                                </li>
                                <li class="flex items-start">
                                  <span class="mr-2 mt-0.5 text-primary-500">•</span>
                                  <span>Implement real-time data visualization using Chart.js with custom animations</span>
                                </li>
                                <li class="flex items-start">
                                  <span class="mr-2 mt-0.5 text-primary-500">•</span>
                                  <span>Build interactive data tables with sorting, filtering, and CSV export functionality</span>
                                </li>
                              </ul>
                            </div>
                            <div class="space-y-2">
                              <p class="font-mono text-sm text-gray-800 font-medium">Key Features:</p>
                              <ul class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-start">
                                  <span class="mr-2 mt-0.5 text-primary-500">•</span>
                                  <span>Real-time sales metrics with websocket integration</span>
                                </li>
                                <li class="flex items-start">
                                  <span class="mr-2 mt-0.5 text-primary-500">•</span>
                                  <span>Customer behavior analytics with AI-powered insights</span>
                                </li>
                                <li class="flex items-start">
                                  <span class="mr-2 mt-0.5 text-primary-500">•</span>
                                  <span>Inventory management system with low-stock alerts</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Right Column -->
                      <div class="space-y-6">
                        <!-- Step 3: Technology Stack -->
                        <div class="step-animation opacity-0" :class="{ 'opacity-100': animationStep >= 3 || prefersReducedMotion }">
                          <h3 class="mb-2 text-lg font-semibold text-gray-900 flex items-center">
                            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm mr-2">3</span>
                            Recommended Stack
                          </h3>
                          <div class="grid grid-cols-2 gap-3">
                            <div class="flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">Next.js 14</p>
                                <p class="text-xs text-gray-500">App Router & Server Actions</p>
                              </div>
                            </div>
                            <div class="flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                                <svg class="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">TypeScript</p>
                                <p class="text-xs text-gray-500">Type-Safe Development</p>
                              </div>
                            </div>
                            <div class="flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100">
                                <svg class="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">TailwindCSS</p>
                                <p class="text-xs text-gray-500">Utility-First CSS</p>
                              </div>
                            </div>
                            <div class="flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                                <svg class="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.659z"/>
                                </svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">Supabase</p>
                                <p class="text-xs text-gray-500">Backend & Real-time</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Generated Files -->
                        <div class="step-animation opacity-0" :class="{ 'opacity-100': animationStep >= 4 || prefersReducedMotion }">
                          <h3 class="mb-2 text-lg font-semibold text-gray-900 flex items-center">
                            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm mr-2">4</span>
                            Generated Files
                          </h3>
                          <div class="space-y-2">
                            <div class="group flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-primary-200 transition-colors">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">project-structure.md</p>
                                <p class="text-xs text-gray-500">Detailed architecture & folder structure</p>
                              </div>
                            </div>
                            <div class="group flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-primary-200 transition-colors">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">development-flow.md</p>
                                <p class="text-xs text-gray-500">Step-by-step implementation guide</p>
                              </div>
                            </div>
                            <div class="group flex items-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-primary-200 transition-colors">
                              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 group-hover:bg-green-100">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                              </span>
                              <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">ai-setup.md</p>
                                <p class="text-xs text-gray-500">Instructions to set up AI coder assistant</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface AnimationState {
  text: string
  currentText: string
  isComplete: boolean
}

const prefersReducedMotion = ref(false)
const animationStep = ref(0)
const text1 = ref<AnimationState>({
  text: 'Create a modern e-commerce dashboard with real-time analytics',
  currentText: '',
  isComplete: false
})
const text2 = ref<AnimationState>({
  text: `Create a responsive e-commerce platform with:
- Modern UI components
- Product filtering system
- Shopping cart functionality
- Checkout process
- Mobile-first approach`,
  currentText: '',
  isComplete: false
})

let typingInterval1: ReturnType<typeof setInterval> | null = null
let typingInterval2: ReturnType<typeof setInterval> | null = null

// Check for reduced motion preference
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = mediaQuery.matches

  // If reduced motion is preferred, show content immediately
  if (prefersReducedMotion.value) {
    text1.value.currentText = text1.value.text
    text1.value.isComplete = true
    text2.value.currentText = text2.value.text
    text2.value.isComplete = true
    animationStep.value = 4
    return
  }

  // Start animations with a slight delay
  setTimeout(() => {
    startAnimationSequence()
  }, 500)
})

// Cleanup
onUnmounted(() => {
  if (typingInterval1) clearInterval(typingInterval1)
  if (typingInterval2) clearInterval(typingInterval2)
})

const startAnimationSequence = () => {
  // First step animation
  animationStep.value = 1
  
  // Start typing first text after a delay
  setTimeout(() => {
    startTypingAnimation(text1, () => {
      // After first text is complete, show second step
      setTimeout(() => {
        animationStep.value = 2
        // Start typing second text
        setTimeout(() => {
          startTypingAnimation(text2, () => {
            // After second text is complete, show third step
            setTimeout(() => {
              animationStep.value = 3
              // After a delay, show final step
              setTimeout(() => {
                animationStep.value = 4
              }, 800)
            }, 600)
          })
        }, 400)
      }, 600)
    })
  }, 400)
}

const startTypingAnimation = (textRef: Ref<AnimationState>, onComplete: () => void) => {
  let index = 0
  const interval = setInterval(() => {
    textRef.value.currentText = textRef.value.text.slice(0, index)
    index++
    if (index > textRef.value.text.length) {
      clearInterval(interval)
      textRef.value.isComplete = true
      onComplete()
    }
  }, 30) // Faster typing speed
}
</script>

<style scoped>
/* Base animations - only apply when reduced motion is not preferred */
@media (prefers-reduced-motion: no-preference) {
  .step-animation {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .step-animation.opacity-100 {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger children animations */
  .step-animation:nth-child(1) { transition-delay: 0.2s; }
  .step-animation:nth-child(2) { transition-delay: 0.4s; }
  .step-animation:nth-child(3) { transition-delay: 0.6s; }
  .step-animation:nth-child(4) { transition-delay: 0.8s; }

  /* Smooth hover transitions */
  .group {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .group:hover {
    transform: translateY(-2px);
  }

  /* Status indicator animations */
  .h-2.w-2.rounded-full {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Typing cursor animation */
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .typing-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: currentcolor;
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }
}

/* Reduced motion styles */
@media (prefers-reduced-motion: reduce) {
  .step-animation {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .group:hover {
    transform: none;
  }

  .typing-cursor {
    display: none;
  }
}
</style>
