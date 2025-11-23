/** @type {import('tailwindcss').Config} */
import sharedConfig from '@repo/config/tailwind.config.js';
export default {
  content: [
    sharedConfig,
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

