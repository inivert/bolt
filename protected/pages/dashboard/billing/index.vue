<template>
  <div class="min-h-[80vh] bg-gradient-to-b from-gray-50/50 to-white/80">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent">
          Billing & Subscription
        </h1>
        <p class="mt-2 text-sm text-gray-600">
          Manage your subscription, payment methods, and billing history
        </p>
      </div>
      
      <div class="space-y-6">
        <!-- Current Plan -->
        <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
          <div class="bg-gradient-to-r from-white to-primary-50/30 px-6 py-4 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900">Current Plan</h3>
            <p class="mt-1 text-sm text-gray-500">
              View and manage your current subscription plan
            </p>
          </div>
          <div class="px-6 py-5">
            <CurrentPlanInfo />
          </div>
        </div>

        <!-- Payment Method -->
        <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
          <div class="bg-gradient-to-r from-white to-primary-50/30 px-6 py-4 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900">Payment Method</h3>
            <p class="mt-1 text-sm text-gray-500">
              Securely manage your payment information
            </p>
          </div>
          <div class="px-6 py-5">
            <PaymentMethodForm />
          </div>
        </div>

        <!-- Billing History -->
        <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
          <div class="bg-gradient-to-r from-white to-primary-50/30 px-6 py-4 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900">Billing History</h3>
            <p class="mt-1 text-sm text-gray-500">
              View your past transactions and download invoices
            </p>
          </div>
          <div class="px-6 py-5">
            <BillingHistory />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CurrentPlanInfo from '~/protected/components/dashboard/billing/CurrentPlanInfo.vue'
import PaymentMethodForm from '~/protected/components/dashboard/billing/PaymentMethodForm.vue'
import BillingHistory from '~/protected/components/dashboard/billing/BillingHistory.vue'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})
</script> 