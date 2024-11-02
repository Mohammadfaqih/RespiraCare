/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#113F67',
        BiruMuda: '#1E6EB3',
        BiruSpan: '#78AAD5C4',
        BiruMedium: '#17568DFC',
        BiruForm: '#17568DFC',
        BiruTable: '#D6EBFD',
        BiruWell: '#0E3087'
      }
    },
  },
  plugins: [],
}