<script setup lang="ts">
import FeaturesSection from '~/components/landing/features/FeaturesSection.vue'

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div>
    <div class="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Our Features
        </h1>
        <p class="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
          Discover all the powerful features that make our platform the perfect choice for your business
        </p>
      </div>
    </div>
    <FeaturesSection />
  </div>
</template> 