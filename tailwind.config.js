/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#080909',
        panel: '#151616',
        card: '#202121',
        raised: '#292A2A',
        line: '#343535',
        paper: '#F4F3EF',
        mute: '#A6A6A2',
        accent: {
          DEFAULT: '#D96B57',
          hover: '#E57F6C',
          deep: '#B9503E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      borderRadius: {
        panel: '1.5rem',
      },
      boxShadow: {
        lift: '0 24px 60px -24px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
