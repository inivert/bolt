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
    prerender: {
      routes: [
        '/',
        '/login',
        '/register',
        '/dashboard',
        '/dashboard/support',
        '/dashboard/website-overview',
        '/dashboard/billing',
        // Add other routes you want to prerender
      ]
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co wss://*.supabase.co;"
        }
      }
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/login': { prerender: true },
    '/register': { prerender: true },
    '/dashboard': { ssr: false },
    '/dashboard/support': { ssr: false },
    '/dashboard/website-overview': { ssr: false },
    '/dashboard/billing': { ssr: false }
  },
  pages: true,
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
      exclude: ['/', '/register', '/login', '/confirm', '/forgot-password', '/update-password', '/features', '/pricing', '/how-it-works', '/about', '/blog', '/contact', '/privacy', '/terms', '/consultation']
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
          name: 'dashboard-settings',
          path: '/dashboard/settings',
          file: resolve(__dirname, './protected/pages/dashboard/settings.vue')
        },
        {
          name: 'dashboard-support',
          path: '/dashboard/support',
          file: resolve(__dirname, './protected/pages/dashboard/support/index.vue')
        },
        {
          name: 'dashboard-website-overview',
          path: '/dashboard/website-overview',
          file: resolve(__dirname, './protected/pages/dashboard/website-overview.vue')
        },
        {
          name: 'dashboard-billing',
          path: '/dashboard/billing',
          file: resolve(__dirname, './protected/pages/dashboard/billing/index.vue')
        },
        {
          name: 'dashboard-admin',
          path: '/dashboard/admin',
          file: resolve(__dirname, './protected/pages/dashboard/admin/index.vue')
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
    pages: resolve(__dirname, './pages'),
    components: resolve(__dirname, './components'),
    layouts: resolve(__dirname, './layouts'),
    public: resolve(__dirname, './public'),
    'protected/pages': resolve(__dirname, './protected/pages'),
    'protected/components': resolve(__dirname, './protected/components')
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
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['suspense'].includes(tag)
    }
  },
})
