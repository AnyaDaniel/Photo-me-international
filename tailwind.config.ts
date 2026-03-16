import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0b0b0b',
        surface: '#111111',
        line: '#232323',
        brand: '#dc2626',
        brandSoft: '#fecaca',
        ink: '#f7f3ee'
      },
      boxShadow: {
        soft: '0 12px 50px rgba(0,0,0,0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
};
export default config;
