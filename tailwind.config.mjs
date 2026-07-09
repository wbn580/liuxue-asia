/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'serif'],
      },
      colors: {
        ink: '#1A2238',
        teal: '#0E8E8E',
        coral: '#FF6B5E',
        amber: '#F5A623',
        sand: '#FBF7F0',
        jade: '#13A88A',
      },
      animation: {
        pulse2: 'pulse2 1.8s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        heroZoom: 'heroZoom 24s ease-in-out infinite alternate',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.5', transform: 'scale(1.4)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        heroZoom: {
          from: { transform: 'scale(1.04)' },
          to: { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
};
