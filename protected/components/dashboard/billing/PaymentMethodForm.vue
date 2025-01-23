<template>
  <div>
    <!-- Current Payment Methods -->
    <div class="space-y-4">
      <div v-for="method in paymentMethods" :key="method.id" class="flex items-center justify-between p-4 border rounded-lg">
        <div class="flex items-center space-x-3">
          <CreditCardIcon class="h-6 w-6 text-gray-400" />
          <div>
            <p class="text-sm font-medium text-gray-900">{{ method.cardBrand }} •••• {{ method.last4 }}</p>
            <p class="text-xs text-gray-500">Expires {{ method.expMonth }}/{{ method.expYear }}</p>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <span v-if="method.isDefault" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Default
          </span>
          <button 
            class="text-sm text-gray-600 hover:text-gray-900"
            @click="removePaymentMethod(method.id)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Add New Payment Method -->
    <button
      class="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      @click="showAddPaymentForm = true"
    >
      <PlusIcon class="h-5 w-5 mr-2 text-gray-400" />
      Add Payment Method
    </button>

    <!-- Add Payment Method Modal -->
    <TransitionRoot appear :show="showAddPaymentForm" as="template">
      <Dialog as="div" class="relative z-10" @close="showAddPaymentForm = false">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  Add Payment Method
                </DialogTitle>

                <form @submit.prevent="addPaymentMethod" class="mt-4 space-y-4">
                  <div>
                    <label for="cardNumber" class="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      v-model="newCard.number"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>

                  <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                      <label for="expiry" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        id="expiry"
                        v-model="newCard.expiry"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                      <input
                        type="text"
                        id="cvc"
                        v-model="newCard.cvc"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div class="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      @click="showAddPaymentForm = false"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CreditCardIcon, PlusIcon } from '@heroicons/vue/24/outline'

const showAddPaymentForm = ref(false)

const paymentMethods = ref([
  {
    id: '1',
    cardBrand: 'Visa',
    last4: '4242',
    expMonth: '12',
    expYear: '24',
    isDefault: true
  }
])

const newCard = ref({
  number: '',
  expiry: '',
  cvc: ''
})

const removePaymentMethod = (id: string) => {
  // TODO: Implement payment method removal
  console.log('Remove payment method:', id)
}

const addPaymentMethod = () => {
  // TODO: Implement payment method addition
  console.log('Add payment method:', newCard.value)
  showAddPaymentForm.value = false
  newCard.value = { number: '', expiry: '', cvc: '' }
}
</script> 