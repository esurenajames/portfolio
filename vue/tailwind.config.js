/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        custom: '-0.075em', // Add your own value
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure you have this plugin installed if you need it
  ],
};
