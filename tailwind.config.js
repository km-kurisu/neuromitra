/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#10b981',
          dark: '#059669',
        },
        slate: {
          DEFAULT: '#64748b',
          dark: '#1e293b',
        },
      },
    },
  },
  plugins: [],
};
