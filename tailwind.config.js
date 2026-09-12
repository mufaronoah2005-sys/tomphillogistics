/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F5FA',
          100: '#E1EBF5',
          200: '#C3D7EB',
          300: '#94B8DC',
          400: '#5C93C9',
          500: '#3371B3',
          600: '#1D4F8F',
          700: '#163E72',
          800: '#0C2340',
          900: '#0A1931',
          950: '#050F1E',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF9E6',
          200: '#FEF0BF',
          300: '#FDE48C',
          400: '#FCD34D',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        brandBlue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0369A1',
          700: '#075985',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(10, 25, 49, 0.12)',
        'premium-hover': '0 25px 50px -12px rgba(10, 25, 49, 0.22)',
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-navy': '0 0 30px rgba(10, 25, 49, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
