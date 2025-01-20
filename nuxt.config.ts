// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate'
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*'],
    },
  }
})