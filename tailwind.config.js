/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'autism-blue': '#E3F2FD',
        'autism-green': '#E8F5E8',
        'autism-purple': '#F3E5F5',
        'autism-teal': '#E0F2F1',
        'autism-amber': '#FFF8E1',
        'soft-gray': '#F8F9FA',
      },
      fontFamily: {
        dyslexic: ['OpenDyslexic','Arial','sans-serif'],
        clear: ['Inter','system-ui','sans-serif'],
      },
      animation: {
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'soft-pulse': 'softPulse 3s ease-in-out infinite',
      },
      keyframes: {
        gentleBounce: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        softPulse: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      }
    }
  },
  plugins: [],
};
