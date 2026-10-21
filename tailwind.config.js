/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kaka-ochre': '#FAB818',
        'kaka-terracotta': '#C85A32',
        'kaka-terracotta-dark': '#A33C1E',
        'kaka-gold': '#D4AF37',
        'kaka-gold-dark': '#996515',
        'kaka-charcoal': '#1A1412',
        'kaka-cream': '#FDFBF7',
        'kaka-parchment': '#F6EEDB',
        'sattvic-green': '#1E7E34',
        'jain-amber': '#E65100',
      },
      fontFamily: {
        serif: ['Cinzel', 'Marcellus', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(26, 20, 18, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.25)',
        'royal-hover': '0 20px 40px -5px rgba(200, 90, 50, 0.25), 0 0 15px rgba(250, 184, 24, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'vapor': 'vaporRise 4s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        vaporRise: {
          '0%': { transform: 'translateY(0) scale(0.95)', opacity: '0' },
          '50%': { opacity: '0.35' },
          '100%': { transform: 'translateY(-20px) scale(1.05)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
