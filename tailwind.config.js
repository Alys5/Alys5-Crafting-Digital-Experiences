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
        yellow: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffde81',
          300: '#ffd04f',
          400: '#fbc02d',
          500: '#fedd44',
          600: '#c79100',
          700: '#9e7400',
          800: '#755700',
          900: '#4c3b00',
        },
        background: '#111111',
        surface: '#2d2d2d',
        pink: {
          50: '#f6e1f2',
          100: '#f1c4e2',
          200: '#e8a8d1',
          300: '#e18bbf',
          400: '#d36f9e',
          500: '#d37cbf',
          600: '#c16f99',
          700: '#a6587a',
          800: '#863f5c',
          900: '#6a2e3d',
        },
        mint: {
          50: '#e1f7f3',
          100: '#b3f1e6',
          200: '#80ebd8',
          300: '#4be5ca',
          400: '#26dfbd',
          500: '#00d8b0',
          600: '#00b698',
          700: '#00997f',
          800: '#007766',
          900: '#005e4e',
        },
        blue: {
          50: '#e1eaf8',
          100: '#b3c6f1',
          200: '#80a3e8',
          300: '#4d80df',
          400: '#1a5dc9',
          500: '#003f99',
          600: '#003377',
          700: '#00255f',
          800: '#001948',
          900: '#000e31',
        },
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['Space Grotesk', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        'material-xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'material-sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'material-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'material-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'material-xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        futuristic: '0 15px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-custom': 'linear-gradient(135deg, #fedd44, #00d8b0, #d37cbf)',
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
  plugins: [forms, typography],
}
