<template>
  <div class="pt-20">
    <FeaturesSection />
  </div>
</template>

<script setup lang="ts">
import FeaturesSection from '~/components/landing/features/FeaturesSection.vue'

definePageMeta({
  layout: 'default',
  middleware: []
})
</script>
