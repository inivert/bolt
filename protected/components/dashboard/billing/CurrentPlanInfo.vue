<template>
  <div class="bg-white">
    <div class="border rounded-lg p-4">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-lg font-semibold text-gray-900">Professional Plan</h4>
          <p class="text-sm text-gray-500">Your plan renews on January 1, 2024</p>
        </div>
        <div class="text-right">
          <p class="text-2xl font-bold text-gray-900">$29</p>
          <p class="text-sm text-gray-500">per month</p>
        </div>
      </div>
      
      <div class="mt-4">
        <h5 class="text-sm font-medium text-gray-900">Plan Features:</h5>
        <ul class="mt-2 space-y-2">
          <li class="flex items-center text-sm text-gray-600">
            <CheckIcon class="h-5 w-5 text-green-500 mr-2" />
            Unlimited Projects
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <CheckIcon class="h-5 w-5 text-green-500 mr-2" />
            Priority Support
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <CheckIcon class="h-5 w-5 text-green-500 mr-2" />
            Custom Domain
          </li>
        </ul>
      </div>

      <div class="mt-4 pt-4 border-t">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <CreditCardIcon class="h-5 w-5 text-gray-400 mr-2" />
            <span class="text-sm text-gray-600">Visa ending in 4242</span>
          </div>
          <button class="text-sm text-primary hover:text-primary-600">
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, CreditCardIcon } from '@heroicons/vue/24/solid'
</script> 