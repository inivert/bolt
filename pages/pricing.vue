<script setup lang="ts">
import PricingSection from '~/components/landing/pricing/PricingSection.vue'

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div>
    <div class="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Pricing Plans
        </h1>
        <p class="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs
        </p>
      </div>
    </div>
    <PricingSection />
  </div>
</template> 