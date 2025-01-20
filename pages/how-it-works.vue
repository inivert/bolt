<template>
  <div class="pt-20">
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
            How Nexcode Works
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Transform your basic prompts into powerful, context-aware instructions in just a few steps.
          </p>
        </div>

        <div class="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <!-- Step 1 -->
          <div class="relative">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
              1
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900">Input Your Prompt</h3>
            <p class="text-gray-600">
              Start by entering your basic prompt or uploading a reference image of the design you want to achieve.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">
              2
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900">AI Enhancement</h3>
            <p class="text-gray-600">
              Our AI analyzes your input and enhances it with context-aware instructions and best practices.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
              3
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900">Get Results</h3>
            <p class="text-gray-600">
              Receive your enhanced prompt along with markdown files containing detailed instructions for your AI assistant.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="mt-20">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900">
              See It in Action
            </h2>
            <p class="mt-4 text-lg text-gray-600">
              Watch how Nexcode transforms your basic prompts into comprehensive development instructions.
            </p>
          </div>

          <!-- MacBook Frame with Animation -->
          <div class="mt-12">
            <div class="mx-auto max-w-4xl">
              <!-- MacBook Frame -->
              <div class="relative mx-auto w-full max-w-[800px]">
                <div class="relative rounded-t-2xl bg-[#1a1a1a] p-4 pb-0">
                  <!-- MacBook Top Bar -->
                  <div class="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-lg bg-[#1a1a1a] px-4 pb-1 pt-0">
                    <div class="h-2 w-2 rounded-full bg-[#666]"></div>
                  </div>
                  <!-- Screen Content -->
                  <div class="relative rounded-lg bg-white p-6">
                    <div class="space-y-8">
                      <!-- Step 1: Initial Input -->
                      <div class="step-animation opacity-0">
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">Step 1: User Input</h3>
                        <div class="rounded-lg bg-gray-50 p-4">
                          <p class="typing-text-1 font-mono text-sm text-gray-600"></p>
                          <div class="mt-2 fade-in-delay">
                            <span class="inline-block rounded bg-gray-200 px-2 py-1 text-xs text-gray-700">
                              <span class="typing-cursor">|</span> Reference Image Uploaded
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Step 2: Nexcode Optimization -->
                      <div class="step-animation opacity-0">
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">Step 2: Nexcode Enhancement</h3>
                        <div class="rounded-lg bg-primary/5 p-4">
                          <p class="typing-text-2 font-mono text-sm text-gray-600 whitespace-pre-line"></p>
                        </div>
                      </div>

                      <!-- Step 3: Technology Selection -->
                      <div class="step-animation opacity-0">
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">Step 3: Technology Stack</h3>
                        <div class="flex flex-wrap gap-2">
                          <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Next.js</span>
                          <span class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">TypeScript</span>
                          <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Tailwind CSS</span>
                          <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">Supabase</span>
                        </div>
                      </div>

                      <!-- Step 4: Generated Files -->
                      <div class="step-animation opacity-0">
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">Step 4: Generated Files</h3>
                        <div class="space-y-2">
                          <div class="rounded-lg border border-gray-200 p-2">
                            <p class="font-mono text-sm text-gray-600">📄 project-structure.md</p>
                            <p class="text-xs text-gray-500 mt-1">Detailed project architecture and folder structure</p>
                          </div>
                          <div class="rounded-lg border border-gray-200 p-2">
                            <p class="font-mono text-sm text-gray-600">📄 development-flow.md</p>
                            <p class="text-xs text-gray-500 mt-1">Step-by-step development flow chart process and guidelines</p>
                          </div>
                          <div class="rounded-lg border border-gray-200 p-2">
                            <p class="font-mono text-sm text-gray-600">📄 ai-instructions.md</p>
                            <p class="text-xs text-gray-500 mt-1">Optimized prompts for AI pair programming</p>
                          </div>
                          <div class="rounded-lg border border-gray-200 p-2">
                            <p class="font-mono text-sm text-gray-600">📄 user-instructions.md</p>
                            <p class="text-xs text-gray-500 mt-1">Clear instructions for implementing the solution</p>
                          </div>
                        </div>
                      </div>

                      <!-- Step 5: Final Step -->
                      <div class="step-animation opacity-0">
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">Step 5: Ready for Development</h3>
                        <div class="rounded-lg bg-green-50 p-4">
                          <p class="text-sm text-green-800">
                            ✨ All set! Share these files with your AI assistant and start coding!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- MacBook Bottom -->
                <div class="h-[20px] rounded-b-2xl bg-[#1a1a1a]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Typing animation function
const typeText = (element: HTMLElement, text: string, speed: number = 50) => {
  let index = 0
  const typing = setInterval(() => {
    element.textContent = text.slice(0, index)
    index++
    if (index > text.length) {
      clearInterval(typing)
    }
  }, speed)
}

// Initialize typing animations
onMounted(() => {
  const text1 = "Create a modern e-commerce website"
  const text2 = `Create a responsive e-commerce platform with:
- Modern UI components
- Product filtering system
- Shopping cart functionality
- Checkout process
- Mobile-first approach`

  setTimeout(() => {
    const element1 = document.querySelector('.typing-text-1')
    if (element1) typeText(element1 as HTMLElement, text1, 70)
  }, 2000)

  setTimeout(() => {
    const element2 = document.querySelector('.typing-text-2')
    if (element2) typeText(element2 as HTMLElement, text2, 50)
  }, 5000)
})
</script>

<style scoped>
.step-animation {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

.step-animation:nth-child(1) { --delay: 1s; }
.step-animation:nth-child(2) { --delay: 4s; }
.step-animation:nth-child(3) { --delay: 8s; }
.step-animation:nth-child(4) { --delay: 10s; }
.step-animation:nth-child(5) { --delay: 12s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-delay {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 3.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.typing-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

/* Enhance transitions */
.rounded-lg {
  transition: all 0.3s ease;
}

.rounded-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style> 