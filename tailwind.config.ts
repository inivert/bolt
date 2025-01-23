import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

const colors = {
  primary: {
    50: '#FFF5ED',
    100: '#FFE6D4',
    200: '#FAB488',
    300: '#F99460',
    400: '#F6691E',
    500: '#EA5008',
    600: '#EB5716',
    700: '#CB0108',
    800: '#980414',
    900: '#A40A08',
  },
  dark: {
    DEFAULT: '#100C12',
    50: '#2A242F',
    100: '#241F29',
    200: '#1E1A23',
    300: '#19151D',
    400: '#141017',
    500: '#100C12',
    600: '#0B080D',
    700: '#060407',
    800: '#020102',
    900: '#000000',
  },
  secondary: {
    '50': '#fff5f5',
    '100': '#ffe3e3', 
    '200': '#ffc9c9',
    '300': '#ffa7a7',
    '400': '#ff8080',
    '500': '#ff5555',
    '600': '#ff3333',
    '700': '#ff1a1a',
    '800': '#ff0000',
    '900': '#e60000',
    DEFAULT: '#ff3333'
  },
  accent: {
    '50': '#f0fdf4',
    '100': '#dcfce7',
    '200': '#bbf7d0',
    '300': '#86efac',
    '400': '#4ade80',
    '500': '#16a34a',
    '600': '#15803d',
    '700': '#166534',
    '800': '#14532d',
    '900': '#052e16',
    '950': '#031f0d',
  }
}

const animations = {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' }
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' }
  },
  slideUp: {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' }
  },
  patternMove: {
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '120px 120px' }
  }
}

export default {
  darkMode: 'class',
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'protected/**/*.vue',
    'plugins/**/*.{js,ts}',
    'app.vue'
  ],
  theme: {
    extend: {
      colors,
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pattern-move': 'patternMove 60s linear infinite'
      },
      keyframes: animations,
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #F6691E, #EA5008)',
        'gradient-secondary': 'linear-gradient(to right, #FAB488, #F99460)',
        'gradient-accent': 'linear-gradient(to right, #CB0108, #980414)',
      },
    }
  },
  plugins: [
    typography, 
    forms,
    function({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
        },
        '.text-shadow-md': {
          'text-shadow': '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        },
        '.text-shadow-lg': {
          'text-shadow': '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000',
        },
      }
      addUtilities(newUtilities)
    }
  ]
} satisfies Config
