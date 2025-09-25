// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'slick-center',
    'opacity-60',
    'opacity-100',
    'blur-sm',
    'blur-none',
    'scale-90',
    'scale-100',
  ],
  theme: {
    extend: {
      colors: {
        'zvest-900': '#0f172a',
        'zvest-700': '#1e3a8a',
        'zvest-50': '#f1f5f9',
        'accent-500': '#06b6d4'
      },
      fontFamily: {
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
