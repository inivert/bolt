<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
    <!-- Background gradient circles -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 transform">
      <div class="h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl"></div>
    </div>
    <div class="absolute top-1/4 right-0 -translate-x-1/2 transform">
      <div class="h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl"></div>
    </div>
    <div class="absolute bottom-0 left-0 transform">
      <div class="h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl"></div>
    </div>
    
    <div class="container relative mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Transform AI Prompts Instantly
          </div>
          <h1 class="mt-6 animate-fade-in text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Turn Basic Prompts Into
            <span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Development Magic
            </span>
          </h1>
          <p class="mt-6 animate-slide-up text-lg text-gray-600">
            Nexcode transforms your simple prompts into powerful, context-aware instructions. Perfect for AI coding assistants like Cursor, Bolt, and more. Pay only for what you use.
          </p>
          <div class="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <button class="group inline-flex items-center rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-primary/25">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="group inline-flex items-center rounded-full border-2 border-primary/10 bg-white/50 px-8 py-3 text-lg font-semibold text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              See How It Works
            </button>
          </div>
          
          <!-- Trust Badges -->
          <div class="mt-12 rounded-2xl bg-white/40 p-6 backdrop-blur-sm lg:max-w-2xl">
            <p class="text-sm font-semibold text-gray-500">Trusted by developers using:</p>
            <div class="mt-4 flex flex-wrap items-center gap-6">
              <div class="flex items-center space-x-2 rounded-lg bg-primary/5 px-4 py-2 text-primary transition-all hover:bg-primary/10">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="font-medium">Cursor</span>
              </div>
              <div class="flex items-center space-x-2 rounded-lg bg-secondary/5 px-4 py-2 text-secondary transition-all hover:bg-secondary/10">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span class="font-medium">Bolt</span>
              </div>
              <div class="flex items-center space-x-2 rounded-lg bg-accent/5 px-4 py-2 text-accent transition-all hover:bg-accent/10">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <span class="font-medium">Windsurf</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative lg:ml-8">
          <div class="animate-float relative mx-auto max-w-[500px]">
            <div class="relative rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-sm">
              <div class="space-y-4 rounded-xl bg-gradient-to-br from-gray-50 to-white p-6">
                <div class="flex items-center space-x-2">
                  <div class="h-3 w-3 rounded-full bg-red-400"></div>
                  <div class="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div class="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div class="space-y-3">
                  <div class="h-4 w-3/4 rounded-full bg-primary/10"></div>
                  <div class="h-4 w-full rounded-full bg-secondary/10"></div>
                  <div class="h-4 w-2/3 rounded-full bg-accent/10"></div>
                </div>
                <div class="flex items-center justify-between rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-4">
                  <div class="space-y-2">
                    <div class="h-2 w-24 rounded-full bg-primary/20"></div>
                    <div class="h-2 w-16 rounded-full bg-secondary/20"></div>
                  </div>
                  <div class="h-8 w-8 rounded-full bg-accent/20"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -right-4 top-1/4 animate-float" style="animation-delay: 1s;">
            <div class="rounded-xl bg-gradient-to-br from-primary to-secondary p-3 shadow-lg">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div class="absolute -left-4 bottom-1/4 animate-float" style="animation-delay: 2s;">
            <div class="rounded-xl bg-gradient-to-br from-secondary to-accent p-3 shadow-lg">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component logic here
</script> 