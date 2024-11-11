import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          yellow: {
            50: '#FFF8E1',
            100: '#FFECB3',
            200: '#FFE082',
            300: '#FFD54F',
            400: '#FFCA28',
            500: '#FEDD44', // Main brand yellow
            600: '#FFC107',
            700: '#FFB300',
            800: '#FFA000',
            900: '#FF8F00',
          },
          blue: {
            50: '#E3F2FD',
            100: '#BBDEFB',
            200: '#90CAF9',
            300: '#64B5F6',
            400: '#42A5F5',
            500: '#2196F3', // Main brand blue
            600: '#1E88E5',
            700: '#1976D2',
            800: '#1565C0',
            900: '#0D47A1',
          },
          pink: {
            50: '#FCE4EC',
            100: '#F8BBD0',
            200: '#F48FB1',
            300: '#F06292',
            400: '#EC407A',
            500: '#D37CBF', // Main brand pink
            600: '#D81B60',
            700: '#C2185B',
            800: '#AD1457',
            900: '#880E4F',
          },
        },
        // Neutral Colors
        neutral: {
          background: '#181818', // Dark background
          surface: '#282828', // Surface color
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        heading: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      // Material Design 3 Elevation System
      boxShadow: {
        'md-0': 'none',
        'md-1': '0 1px 2px rgba(0,0,0,0.3)',
        'md-2': '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        'md-3': '0 1px 3px rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
        'md-4': '0 2px 3px rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
        'md-5': '0 4px 4px rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)',
      },
      // Material Design 3 Shape System
      borderRadius: {
        none: '0',
        sm: '4px', // Extra small
        md: '8px', // Small
        lg: '12px', // Medium
        xl: '16px', // Large
        '2xl': '28px', // Extra large
        full: '9999px',
      },
      // Custom spacing for bento box layout
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      // Material Design 3 Motion
      transitionTimingFunction: {
        'md-standard': 'cubic-bezier(0.2, 0, 0, 1)',
        'md-decelerate': 'cubic-bezier(0, 0, 0, 1)',
        'md-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-feminine': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
    // Responsive breakpoints following Material Design 3
    screens: {
      sm: '600px', // Phone
      md: '905px', // Tablet
      lg: '1240px', // Desktop
      xl: '1440px', // Large desktop
    },
  },
  plugins: [
    forms,
    typography,
    // Custom plugin for Material Design 3 state layers
    function ({ addUtilities }) {
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
      addUtilities(newUtilities)
    },
  ],
}
