import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Main accent color
        accent: {
          light: '#FDB8C8', // Lighter accent
          dark: '#0077ff', // Darker accent
          pink: '#98fb98', // Soft pink accent
        },
        neutral: {
          DEFAULT: '#414141', // Dark neutral
          light: '#fffddd', // Light neutral
          background: '#181818', // Dark background
          surface: '#282828', // Dark surface
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.6rem' }],
        'md-label': ['14px', '20px'],
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md-0': 'none',
        'md-1': '0 1px 2px rgba(0,0,0,0.3)',
        'md-3': '0 3px 6px rgba(0,0,0,0.3)',
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
        'md-lg': '0.375rem',
        full: '9999px',
        20: '20px',
      },
      spacing: {
        18: '4.5rem',
        72: '18rem',
        4.5: '18px',
        10: '40px',
        6: '24px',
        4: '16px',
        2: '8px',
      },
      transitionTimingFunction: {
        'md-standard': 'cubic-bezier(0.2, 0, 0, 1)',
      },
      backgroundImage: {
        'gradient-feminine': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
    },
  },
  plugins: [
    forms,
    typography,
    function ({ addUtilities, addComponents }) {
      const newUtilities = {
        '.hover-state-layer': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'currentColor',
            opacity: 0,
            transition: 'opacity 0.2s ease',
          },
          '&:hover::before': {
            opacity: 0.08,
          },
        },
      }
      // Elevated button styles
      const newComponents = {
        '.btn-elevated': {
          height: '40px', // Container height
          borderRadius: '9999px', // Circular shape
          padding: '0 24px', // Default padding
          fontSize: '14px',
          lineHeight: '20px',
          textAlign: 'center',
          boxShadow: '0 1px 2px rgba(0,0,0,0.3)', // 1dp elevation
          transition: 'box-shadow 0.2s ease',
          '&:hover': {
            boxShadow: '0 3px 6px rgba(0,0,0,0.3)', // 3dp elevation on hover
          },
          '&-with-icon': {
            paddingLeft: '16px', // Left padding with icon
            paddingRight: '24px', // Right padding with icon
            '& > svg': {
              width: '18px', // Icon size
              height: '18px',
              marginRight: '8px', // Padding between elements
            },
            '& > .icon': {
              width: '18px', // Icon size
              height: '18px',
            },
          },
        },
      }
      addUtilities(newUtilities)
      addComponents(newComponents)
    },
  ],
}
