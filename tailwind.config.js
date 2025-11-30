/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#da56a0', // Main pink - your logo color
          600: '#c53d8c',
          700: '#a12e6f',
          800: '#7f2658',
          900: '#5d1e41',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Main purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Teal accent
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-creative': 'linear-gradient(135deg, #da56a0 0%, #a855f7 50%, #14b8a6 100%)',
        'gradient-pink-purple': 'linear-gradient(135deg, #da56a0 0%, #a855f7 100%)',
        'gradient-purple-teal': 'linear-gradient(135deg, #a855f7 0%, #14b8a6 100%)',
        'gradient-radial': 'radial-gradient(circle, #da56a0 0%, #a855f7 50%, #14b8a6 100%)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      boxShadow: {
        'creative': '0 10px 15px -3px rgba(218, 86, 160, 0.1), 0 4px 6px -2px rgba(218, 86, 160, 0.05)',
        'creative-lg': '0 20px 25px -5px rgba(218, 86, 160, 0.1), 0 10px 10px -5px rgba(218, 86, 160, 0.04)',
        'radiant': '0 0 20px rgba(218, 86, 160, 0.3)',
        'radiant-lg': '0 0 40px rgba(218, 86, 160, 0.4)',
      },
      textShadow: {
        'glow': '0 0 10px rgba(218, 86, 160, 0.5)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-glow': {
          'text-shadow': '0 0 10px rgba(218, 86, 160, 0.5)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      })
    }
  ],
}