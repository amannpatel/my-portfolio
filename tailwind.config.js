/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eceef7',
          200: '#d4d8ea',
          300: '#a9b0d0',
          400: '#7480ac',
          500: '#4d5985',
          600: '#333c60',
          700: '#1f2545',
          800: '#131735',
          900: '#0a0d24',
          950: '#05061a',
        },
        accent: {
          violet: '#7c5cff',
          indigo: '#5c78ff',
          cyan: '#22d3ee',
          rose: '#f472b6',
          amber: '#f5b544',
        },
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -3%, 0) scale(1.08)' },
        },
        'aurora-drift-2': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1.05)' },
          '50%': { transform: 'translate3d(-5%, 4%, 0) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'aurora-1': 'aurora-drift 18s ease-in-out infinite',
        'aurora-2': 'aurora-drift-2 22s ease-in-out infinite',
        shimmer: 'shimmer 5s linear infinite',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 60px -10px rgba(34,211,238,0.35)',
        card: '0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
