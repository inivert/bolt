import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { 
    enabled: true,
  },
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    routeRules: {
      '/**': { ssr: false }
    }
  },
  build: {
    transpile: ['vue']
  },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/stylelint-module'
  ],
  app: {
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Nexcode',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/register', '/login', '/confirm', '/reset-password']
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      }
    }
  },
  hooks: {
    'pages:extend'(pages) {
      // Remove any existing dashboard routes
      const filteredPages = pages.filter(page => !page.path?.startsWith('/dashboard'))
      pages.splice(0, pages.length, ...filteredPages)

      // Add protected dashboard routes
      pages.push(
        {
          name: 'dashboard',
          path: '/dashboard',
          file: resolve(__dirname, './protected/pages/dashboard/index.vue')
        },
        {
          name: 'dashboard-projects',
          path: '/dashboard/projects',
          file: resolve(__dirname, './protected/pages/dashboard/projects.vue')
        },
        {
          name: 'dashboard-settings',
          path: '/dashboard/settings',
          file: resolve(__dirname, './protected/pages/dashboard/settings.vue')
        }
      )
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/protected/components',
      pathPrefix: false,
    }
  ],
  dir: {
    pages: 'pages',
    layouts: 'layouts'
  },
  alias: {
    layouts: '~/layouts',
    'layouts-protected': '~/protected/layouts'
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    config: {
      content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'protected/**/*.vue',
        'plugins/**/*.{js,ts}',
        'app.vue'
      ]
    }
  }
})
