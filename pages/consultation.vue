<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Consultation - Nexcode',
  meta: [
    {
      name: 'description',
      content: 'Get expert consultation for your development needs. Transform your ideas into reality with our professional services.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div id="services" class="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-gray-900">
            Expert <span class="bg-gradient-primary bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p class="mt-6 text-xl text-gray-600">
            Transform your ideas into reality with our expert consultation services. We're here to help you navigate the complexities of modern development.
          </p>
        </div>

        <div class="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Web Development -->
          <div class="relative group">
            <div class="absolute -right-3 -top-3 h-24 w-24 overflow-hidden">
              <div class="absolute top-0 right-0 h-4 w-4 transform rotate-45 bg-primary-600"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-white to-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
            <div class="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">Most Popular</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Web Development</h3>
              <p class="mt-4 text-gray-600">
                Modern web applications built with cutting-edge technologies and best practices.
              </p>
            </div>
          </div>

          <!-- API Development -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
            <div class="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-semibold text-gray-900">API Development</h3>
              <p class="mt-4 text-gray-600">
                Robust and scalable API solutions for your business needs.
              </p>
            </div>
          </div>

          <!-- Security Consulting -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
            <div class="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-semibold text-gray-900">Security Consulting</h3>
              <p class="mt-4 text-gray-600">
                Expert security audits and implementation of best security practices.
              </p>
            </div>
          </div>

          <!-- Performance Optimization -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
            <div class="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-semibold text-gray-900">Performance Optimization</h3>
              <p class="mt-4 text-gray-600">
                Improve your application's performance and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="consultation-form" class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900">
            Request a <span class="bg-gradient-primary bg-clip-text text-transparent">Consultation</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  </div>
</template> 