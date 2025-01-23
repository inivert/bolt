<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 min-h-screen flex items-center">
    <!-- Background gradient circles -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 transform">
      <div class="h-[600px] w-[600px] rounded-full bg-primary-200/30 blur-3xl"></div>
    </div>
    <div class="absolute top-1/4 right-0 -translate-x-1/2 transform">
      <div class="h-[400px] w-[400px] rounded-full bg-secondary-200/30 blur-3xl"></div>
    </div>
    <div class="absolute bottom-0 left-0 transform">
      <div class="h-[300px] w-[300px] rounded-full bg-accent-200/30 blur-3xl"></div>
    </div>
    
    <div class="container relative mx-auto px-4 py-12 md:py-16">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary">
            <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Professional Web Development
          </div>
          <h1 class="text-5xl font-bold text-dark md:text-6xl lg:text-7xl">
            <span class="bg-gradient-primary bg-clip-text text-transparent">Custom Websites</span> for Your
            <span class="bg-gradient-accent bg-clip-text text-transparent">Growing Business</span>
          </h1>
          <p class="mt-6 text-lg text-dark/80 md:text-xl">
            I build beautiful, modern websites that help small businesses grow. Get a professional online presence with ongoing support and maintenance, all for an affordable monthly subscription.
          </p>
          <div class="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <NuxtLink 
              to="/contact"
              class="group inline-flex items-center rounded-full bg-gradient-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-primary-400/25"
            >
              Schedule Consultation
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink 
              to="/portfolio" 
              class="group inline-flex items-center rounded-full border-2 border-primary/10 bg-white/50 px-8 py-3 text-lg font-semibold text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              View Portfolio
            </NuxtLink>
          </div>
          
          <!-- Trust Badges -->
          <div class="mt-12 rounded-2xl bg-white/60 p-6 backdrop-blur-sm lg:max-w-2xl shadow-lg">
            <p class="text-sm font-semibold text-gray-500">Why Businesses Trust Me:</p>
            <div class="mt-4 flex flex-wrap items-center gap-6">
              <div class="flex items-center space-x-2 rounded-lg bg-primary-50 px-4 py-2 text-primary transition-all hover:bg-primary-100">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-medium">Fast Delivery</span>
              </div>
              <div class="flex items-center space-x-2 rounded-lg bg-secondary-50 px-4 py-2 text-secondary transition-all hover:bg-secondary-100">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="font-medium">100% Secure</span>
              </div>
              <div class="flex items-center space-x-2 rounded-lg bg-accent-50 px-4 py-2 text-accent transition-all hover:bg-accent-100">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="font-medium">24/7 Support</span>
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
                <!-- Code Editor Preview -->
                <div class="space-y-3">
                  <div class="h-4 w-3/4 rounded-full bg-primary-100"></div>
                  <div class="h-4 w-full rounded-full bg-secondary-100"></div>
                  <div class="h-4 w-2/3 rounded-full bg-accent-100"></div>
                </div>
                <!-- Website Preview -->
                <div class="flex items-center justify-between rounded-xl bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 p-4">
                  <div class="space-y-2">
                    <div class="h-2 w-24 rounded-full bg-primary-200"></div>
                    <div class="h-2 w-16 rounded-full bg-secondary-200"></div>
                  </div>
                  <div class="h-8 w-8 rounded-full bg-accent-200"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -right-4 top-1/4 animate-float" style="animation-delay: 1s;">
            <div class="rounded-xl bg-gradient-to-br from-primary to-secondary p-3 shadow-lg">
              <svg class="h-6 w-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div class="absolute -left-4 bottom-1/4 animate-float" style="animation-delay: 2s;">
            <div class="rounded-xl bg-gradient-to-br from-secondary to-accent p-3 shadow-lg">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script> 