import { resolve } from 'path'

// Constants for configuration
const COOKIE_MAX_AGE_HOURS = 8
const COOKIE_MAX_AGE_SECONDS = COOKIE_MAX_AGE_HOURS * 60 * 60

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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Transform your prompts into powerful, context-aware instructions with Nexcode' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' }
      ]
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/register', '/login', '/confirm', '/reset-password', '/features', '/pricing', '/how-it-works', '/about', '/blog', '/contact', '/privacy', '/terms', '/consultation']
    },
    cookieOptions: {
      maxAge: COOKIE_MAX_AGE_SECONDS,
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
      const dashboardPages = [
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
        },
        {
          name: 'dashboard-generate',
          path: '/dashboard/generate',
          file: resolve(__dirname, './protected/pages/dashboard/generate/index.vue')
        }
      ]

      pages.push(...dashboardPages)
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
  },
  runtimeConfig: {
    n8nBaseUrl: process.env.N8N_BASE_URL,
    n8nWebhookPath: process.env.N8N_WEBHOOK_PATH,
    public: {
      // ... other public config ...
    }
  },
})
