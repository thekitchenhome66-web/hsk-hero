/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bamboo: '#7CB342',
        'bamboo-dark': '#558B2F',
        gold: '#FFC107',
        'gold-dark': '#FFA000',
        cream: '#FFF8E1',
        'mao-red': '#F44336',
      },
    },
  },
  plugins: [],
};
