import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // Modern tech-focused color palette with feminine accents
        primary: {
          DEFAULT: '#FFD700', // Vivid yellow for primary actions
          hover: '#FFE44D',
          muted: '#998200', // Muted yellow for subtle elements
        },
        accent: {
          pink: '#FFD6E5', // Soft pastel pink
          mint: '#98FFE0', // Fresh mint green
          blue: '#89CFF0', // Savoia blue
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          DEFAULT: '#171717', // Dark background
          surface: '#1E1E1E', // Slightly lighter surface
          card: '#242424', // Card background
        },
        code: {
          pink: '#FF79C6', // Coding theme pink
          purple: '#BD93F9', // Coding theme purple
          green: '#50FA7B', // Coding theme green
          yellow: '#F1FA8C', // Coding theme yellow
        },
      },
      fontFamily: {
        // Inter for base text, Space Grotesk for headings
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Modern type scale
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.16', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 215, 0, 0.15)', // Yellow glow effect
        'glow-sm': '0 0 10px rgba(255, 215, 0, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(255, 215, 0, 0.1)',
        'md-1': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md-2': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'md-3': '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        sm: '0.375rem', // 6px
        md: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
        '2xl': '1.25rem', // 20px
        full: '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
    function ({ addComponents, theme }) {
      addComponents({
        '.btn-elevated': {
          backgroundColor: theme('colors.neutral.800'),
          color: theme('colors.primary'),
          height: '40px',
          padding: '0 24px',
          fontSize: theme('fontSize.sm[0]'),
          lineHeight: theme('fontSize.sm[1]'),
          fontWeight: '500',
          letterSpacing: '0.02em',
          borderRadius: theme('borderRadius.full'),
          boxShadow: theme('boxShadow.md-1'),
          border: `1px solid ${theme('colors.primary')}`,
          transition: 'all 0.2s ease-in-out',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            boxShadow: theme('boxShadow.glow'),
            transform: 'translateY(-1px)',
            backgroundColor: theme('colors.neutral.700'),
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        '.btn-elevated-with-icon': {
          paddingLeft: '16px',
          paddingRight: '24px',
          gap: '8px',
          '& svg, & .icon': {
            width: '18px',
            height: '18px',
          },
        },
        '.glass-card': {
          backgroundColor: 'rgba(30, 30, 30, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 215, 0, 0.1)',
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.glow-sm'),
        },
        '.hover-glow': {
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: theme('boxShadow.glow'),
          },
        },
        '.heading-gradient': {
          background: 'linear-gradient(135deg, #FFD700 0%, #FFE44D 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      })
    },
  ],
}
