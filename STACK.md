# Project Structure and Stack

## Directory Structure
```
.
├── README.md
├── STACK.md
├── app.vue
├── assets
├── components
│   ├── consultation
│   │   ├── ConsultationForm.vue
│   │   └── ConsultationHero.vue
│   ├── landing
│   │   ├── features
│   │   │   └── FeaturesSection.vue
│   │   ├── header
│   │   ├── hero
│   │   │   └── HeroSection.vue
│   │   └── pricing
│   │       └── PricingSection.vue
│   └── ui
├── eslint.config.mjs
├── layouts
│   └── default.vue
├── middleware
│   ├── auth.ts
│   └── guest.ts
├── nuxt.config.ts
├── package.json
├── pages
│   ├── about.vue
│   ├── blog.vue
│   ├── contact.vue
│   ├── features.vue
│   ├── get-started.vue
│   ├── how-it-works.vue
│   ├── index.vue
│   ├── login.vue
│   ├── pricing.vue
│   ├── privacy.vue
│   ├── register.vue
│   └── terms.vue
├── protected
│   ├── components
│   │   ├── dashboard
│   │   │   ├── cards
│   │   │   ├── navigation
│   │   │   └── billing
│   │   └── settings
│   ├── layouts
│   │   └── dashboard.vue
│   └── pages
│       └── dashboard
│           ├── index.vue
│           ├── settings.vue
│           ├── support
│           ├── website-overview.vue
│           └── billing
├── public
│   ├── favicon.ico
│   └── robots.txt
├── server
│   ├── database
│   │   └── migrations
│   └── tsconfig.json
├── supabase
│   ├── config.toml
│   └── migrations
│       └── 20250119215543_create_users_table.sql
├── tailwind.config.ts
├── types
    ├── database.types.ts
    └── pricing.ts
```

### Application Structure
- `protected/`: Contains all authenticated/protected content
  - `components/`: Protected area components
    - `dashboard/`: Dashboard-specific components
    - `settings/`: Settings-specific components
  - `layouts/`: Protected area layouts
    - `dashboard.vue`: Main dashboard layout
  - `pages/`: Protected routes
    - `dashboard/`: Dashboard pages
- `components/`: Public components
- `layouts/`: Public layouts
- `pages/`: Public routes
- `middleware/`: Authentication middleware
- `types/`: TypeScript types and interfaces
- `server/`: Server-side logic and database migrations
- `supabase/`: Supabase configuration and migrations

## Technology Stack

### Core Dependencies
- Nuxt.js v3.15.2
- Vue.js (latest)
- Vue Router (latest)
- Color Mode v0.1.0

### Development Dependencies
- @nuxtjs/tailwindcss v6.13.1
- @nuxtjs/color-mode v3.5.2
- @nuxtjs/supabase v1.4.5
- shadcn-nuxt v0.11.3
- @nuxt/eslint v0.7.5
- @nuxt/icon v1.10.3
- @vueuse/nuxt v12.4.0
- @formkit/auto-animate v0.8.2
- stylelint v16.13.2
- stylelint-config-standard
- stylelint-config-recommended-vue
- @tailwindcss/typography
- @tailwindcss/forms

### Database Schema
- Users Table
  - id (UUID, Primary Key)
  - created_at (Timestamp)
  - email (Text, Unique)
  - full_name (Text, Optional)
  - avatar_url (Text, Optional)
  - updated_at (Timestamp, Optional)
  - last_sign_in (Timestamp, Optional)
  - is_active (Boolean)
  - role (Text: 'user' | 'admin')

### Security Features
- Row Level Security (RLS) enabled
- User-specific data access policies
- Automatic user creation on signup
- Type-safe database interactions

### Package Manager
- pnpm

### Features
- TypeScript Support
- ESLint Configuration
- Stylelint Configuration
- Tailwind CSS Integration
- Color Mode Support
- Supabase Authentication
- Protected Routes
- UI Components with shadcn
- Icon Support
- VueUse Composition Utilities
- Auto-animate Transitions

### Pages Structure
- Landing Pages
  - Home (/)
  - Features (/features)
  - How It Works (/how-it-works)
  - Pricing (/pricing)
  - About (/about)
  - Blog (/blog)
  - Contact (/contact)
  - Consultation (/consultation)
- Dashboard [Protected]
  - Main Dashboard (/dashboard)
  - Settings (/dashboard/settings)
  - Support (/dashboard/support)
  - Website Overview (/dashboard/website-overview)
  - Billing (/dashboard/billing)
- Authentication
  - Login (/login)
  - Register (/register)
  - Get Started (/get-started) [Protected]
- Legal Pages
  - Privacy Policy (/privacy)
  - Terms of Service (/terms)

### Authentication
- Supabase Authentication Integration
- Protected Routes using Middleware
- Login Page with Email/Password
- Registration Page with Email/Password
- Password Recovery Flow
- Social Authentication (Google, Facebook, Twitter)
- Automatic Redirection for Unauthenticated Users
- Guest Middleware for Public Routes 