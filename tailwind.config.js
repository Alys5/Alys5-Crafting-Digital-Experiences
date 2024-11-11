// tailwind.config.js
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Yellow shades
          yellow: {
            50: '#FFF9C4',
            100: '#FFF59D',
            200: '#FFF176',
            300: '#FFEE58',
            400: '#FFEB3B',
            500: '#FEDD44', // Main Yellow
            600: '#FFC107',
            700: '#FFA000',
            800: '#FF8F00',
            900: '#FF6F00',
          },
          // Blue shades
          blue: {
            50: '#E3F2FD',
            100: '#BBDEFB',
            200: '#90CAF9',
            300: '#64B5F6',
            400: '#42A5F5',
            500: '#2196F3', // Main Blue
            600: '#1E88E5',
            700: '#1976D2',
            800: '#1565C0',
            900: '#0D47A1',
          },
          // Pink shades
          pink: {
            50: '#F8BBD0',
            100: '#F48FB1',
            200: '#F06292',
            300: '#EC407A',
            400: '#E91E63',
            500: '#D37CBF', // Main Pink
            600: '#C2185B',
            700: '#AD1457',
            800: '#880E4F',
            900: '#4E342E',
          },
        },
        // Neutral colors for background and surface
        neutral: {
          background: '#181818',
          surface: '#282828',
        },
        // Social media colors
        social: {
          linkedin: {
            50: '#E2E9EF',
            100: '#C6D3DB',
            200: '#ADC2D4',
            300: '#91A9C8',
            400: '#7993BE',
            500: '#617CA3', // Main LinkedIn blue
            600: '#4A668C',
            700: '#385075',
            800: '#263E5E',
            900: '#142D4C',
          },
          'google-calendar': {
            50: '#F1F8E9',
            100: '#E8F5E9',
            200: '#C6F6D5',
            300: '#A5D6A7',
            400: '#81C784',
            500: '#66BB6A', // Main Google Calendar green
            600: '#4CAF50',
            700: '#43A047',
            800: '#388E3C',
            900: '#2E7D32',
          },
          fiverr: {
            50: '#F2F4F6',
            100: '#E6E8EA',
            200: '#CCD0D5',
            300: '#A3A9AD',
            400: '#8A9196',
            500: '#71797D', // Main Fiverr green (darker)
            600: '#5C6367',
            700: '#4D5257',
            800: '#3E4145',
            900: '#2F3033',
          },
          github: {
            50: '#F3F4F6',
            100: '#E6E8EA',
            200: '#CAD0D6',
            300: '#A3A9AD',
            400: '#8A9197',
            500: '#6E7781', // Main GitHub gray
            600: '#57606A',
            700: '#484F58',
            800: '#393E46',
            900: '#2A2E35',
          },
        },
      },
      // Font family for headings
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
      },
      // Box shadows for elevated buttons
      boxShadow: {
        'md-0': 'none',
        'md-1': '0 1px 2px rgba(0,0,0,0.3)', // Elevated button default (1dp)
        'md-3': '0 3px 6px rgba(0,0,0,0.3)', // Elevated button hover (3dp)
      },
      // Border radius for different elements
      borderRadius: {
        md: '8px',
        lg: '12px',
        'md-lg': '0.375rem',
        full: '9999px', // Circular shape for elevated button
        20: '20px', // Container shape 20dp corner radius
      },
      // Spacing values for padding and margins
      spacing: {
        18: '4.5rem',
        72: '18rem',
        4.5: '18px', // Icon size (18dp)
        10: '40px', // Container height (40dp)
        6: '24px', // Left/right padding
        4: '16px', // Left padding with icon
        2: '8px', // Padding between elements
      },
      // Font size for labels
      fontSize: {
        'md-label': ['14px', '20px'], // Label size 14pt with line height 20pt
      },
      // Transition timing function for animations
      transitionTimingFunction: {
        'md-standard': 'cubic-bezier(0.2, 0, 0, 1)',
      },
      backgroundImage: {
        'gradient-feminine': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
    screens: {
      // Responsive screen sizes
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
    },
  },
  plugins: [
    // Tailwind plugins
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
          },
        },
      }

      addUtilities(newUtilities)
      addComponents(newComponents)
    },
  ],
}
