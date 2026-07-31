/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050508',
          900: '#0a0a12',
          800: '#12121c',
          700: '#1b1b28',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        azure: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
        },
        mist: {
          100: '#f4f4f8',
          300: '#c7c7d6',
          500: '#8a8aa3',
          700: '#54546b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(139,92,246,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.16), transparent 40%), radial-gradient(circle at 50% 100%, rgba(34,211,238,0.10), transparent 45%)',
        'signal-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 60%, #22d3ee 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,92,246,0.45)',
        card: '0 8px 30px -10px rgba(0,0,0,0.5)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-30px) scale(1.05)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.4)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
