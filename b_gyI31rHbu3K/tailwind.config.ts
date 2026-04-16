import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        // Provence palette
        lavender: '#9B8FB8',
        'lavender-light': '#D4C5E8',
        'lavender-pale': '#E8E0F0',
        beige: '#D4C4B8',
        'beige-light': '#E8DCCF',
        'beige-pale': '#F5F0E8',
        olive: '#7A8B68',
        'olive-light': '#A8B89E',
        gold: '#C4A563',
        'gold-light': '#E0D4B8',
        cream: '#FBF8F3',
        taupe: '#8B8680',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        serif: 'var(--font-serif)',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        xl: '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-scale': 'fadeInScale 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
