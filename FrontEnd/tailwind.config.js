/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'first' : '#C7B39F',
        'second' : '#eee7e1',
        'third' : '#FAF6F3',
        'orange' : '#FFB169',
        'yellow' : '#FFDE69',
        'pink' : '#FF69BA',
        'blue' : '#69C9FF',
        'green' : '#22DC34',
        'red' : '#FF7269'
      }
    },
  },
  plugins: [],
}

