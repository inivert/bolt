<template>
  <div class="fixed right-4 top-4 z-50">
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="show" 
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-[#1C2128] shadow-lg"
        role="alert"
        aria-live="assertive"
        @mouseenter="pauseTimer"
        @mouseleave="resumeTimer"
      >
        <div class="p-4">
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0">
              <CheckCircleIcon v-if="type === 'success'" class="h-6 w-6 text-green-400" aria-hidden="true" />
              <XCircleIcon v-else-if="type === 'error'" class="h-6 w-6 text-red-400" aria-hidden="true" />
              <ExclamationTriangleIcon v-else-if="type === 'warning'" class="h-6 w-6 text-yellow-400" aria-hidden="true" />
              <InformationCircleIcon v-else-if="type === 'info'" class="h-6 w-6 text-blue-400" aria-hidden="true" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white">
                {{ title }}
              </p>
              <p v-if="message" class="mt-1 text-sm text-gray-400">{{ message }}</p>
            </div>
            <button
              type="button"
              class="flex-shrink-0 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1C2128]"
              @click="handleClose"
            >
              <span class="sr-only">Close notification</span>
              <XMarkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div 
            v-if="progress" 
            class="mt-3 h-0.5 w-full bg-gray-700"
          >
            <div 
              class="h-0.5 transition-all duration-75"
              :class="{
                'bg-green-400': type === 'success',
                'bg-red-400': type === 'error',
                'bg-yellow-400': type === 'warning',
                'bg-blue-400': type === 'info'
              }"
              :style="{ width: `${progress}%` }"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  XMarkIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon 
} from '@heroicons/vue/24/outline'

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface Props {
  show: boolean
  type: NotificationType
  title: string
  message: string
  duration?: number
  playSound?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
  duration: 5000,
  playSound: true
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:show', value: boolean): void
}>()

const progress = ref(100)
let timer: ReturnType<typeof setTimeout> | null = null
let progressInterval: ReturnType<typeof setTimeout> | null = null

const playNotificationSound = () => {
  if (!props.playSound) return
  
  const audio = new Audio()
  switch (props.type) {
    case 'success':
      audio.src = '/sounds/success.mp3'
      break
    case 'error':
      audio.src = '/sounds/error.mp3'
      break
    case 'warning':
      audio.src = '/sounds/warning.mp3'
      break
    case 'info':
      audio.src = '/sounds/info.mp3'
      break
  }
  audio.play().catch(() => {
    // Ignore errors if sound can't be played
  })
}

const startTimer = () => {
  if (props.duration <= 0) return
  
  clearTimer()
  timer = setTimeout(() => {
    handleClose()
  }, props.duration)

  // Update progress bar
  const startTime = Date.now()
  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    progress.value = Math.max(0, 100 - (elapsed / props.duration) * 100)
    
    if (progress.value > 0) {
      progressInterval = setTimeout(updateProgress, 10)
    }
  }
  updateProgress()
}

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (progressInterval) {
    clearTimeout(progressInterval)
    progressInterval = null
  }
}

const pauseTimer = () => {
  clearTimer()
}

const resumeTimer = () => {
  if (props.show) {
    startTimer()
  }
}

const handleClose = () => {
  clearTimer()
  emit('update:show', false)
  emit('close')
}

watch(() => props.show, (newValue) => {
  if (newValue) {
    progress.value = 100
    startTimer()
    playNotificationSound()
  } else {
    clearTimer()
  }
})

onMounted(() => {
  if (props.show) {
    startTimer()
    playNotificationSound()
  }
})

onBeforeUnmount(() => {
  clearTimer()
})
</script> 