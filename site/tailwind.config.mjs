/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b8c2',
          400: '#8e8e9c',
          500: '#6b6b78',
          600: '#52525d',
          700: '#3f3f47',
          800: '#26262c',
          900: '#141417',
          950: '#0a0a0c',
        },
        accent: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2ff',
          300: '#8eb3ff',
          400: '#5d8cff',
          500: '#3a6bff',
          600: '#2a4ff0',
          700: '#243fcc',
          800: '#2236a3',
          900: '#1f2f80',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Inter Display',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.025em',
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 7.2vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2rem, 5.4vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.625rem, 4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.375rem, 2.8vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px -20px rgba(58,107,255,0.35)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -40px rgba(0,0,0,0.6)',
        'soft': '0 10px 40px -10px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at top, rgba(58,107,255,0.18), transparent 60%)',
      },
      backgroundSize: {
        'grid-lg': '64px 64px',
      },
      animation: {
        'aurora': 'aurora 18s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 16s linear infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};