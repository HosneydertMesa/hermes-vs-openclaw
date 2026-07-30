/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d8d8df',
          300: '#b6b6c0',
          400: '#8d8d9b',
          500: '#6f6f7e',
          600: '#595966',
          700: '#484854',
          800: '#3d3d47',
          900: '#34343c',
          950: '#1d1d22',
          1000: '#0a0a0d',
        },
        accent: {
          50: '#f3f0ff',
          100: '#e9e2ff',
          200: '#d4c4ff',
          300: '#b497ff',
          400: '#9263ff',
          500: '#7a3aff',
          600: '#6a1ff5',
          700: '#5a16dc',
          800: '#4a14b3',
          900: '#3e1492',
          950: '#26095c',
        },
        signal: {
          green: '#22c55e',
          amber: '#f59e0b',
          red: '#ef4444',
        },
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,10,13,0) 0%, rgba(10,10,13,1) 90%), radial-gradient(ellipse at top, rgba(122,58,255,0.18) 0%, rgba(10,10,13,0) 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-accent': '0 0 0 1px rgba(122,58,255,0.2), 0 20px 50px -12px rgba(122,58,255,0.35)',
        'glow-soft': '0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -20px rgba(122,58,255,0.4)',
      },
    },
  },
  plugins: [],
};
