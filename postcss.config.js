const isProduction = import.meta.env.MODE === 'production'

export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction ? { cssnano: { preset: 'default' } } : {}),
  },
}
