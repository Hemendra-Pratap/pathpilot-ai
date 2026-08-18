/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        ivory: {
          bg: '#F5F1E8',
          subtle: '#EEE9DE',
          card: '#FBF9F4',
          border: '#D9D2C5',
          text: '#111111',
          body: '#3F3B36',
          muted: '#6B665E',
        },
        sage: {
          50: '#f5f6f4',
          100: '#e7e9e4',
          500: '#66705A',
          600: '#545E49',
          700: '#434B3B',
          dark: '#A4AF91',
        },
        darkivory: {
          bg: '#11110F',
          subtle: '#181714',
          card: '#1D1B18',
          border: '#34312B',
          text: '#F5F1E8',
          muted: '#B7B0A4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
}
