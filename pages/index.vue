<script setup lang="ts">
import HeroSection from '~/components/landing/hero/HeroSection.vue'
import FeaturesSection from '~/components/landing/features/FeaturesSection.vue'
import PricingSection from '~/components/landing/pricing/PricingSection.vue'

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
  </div>
</template>
