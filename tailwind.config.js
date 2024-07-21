// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#001f3f',
        mediumBlue: '#0055a4',
        lightBlue: '#007acc',
        accentYellow: '#fbb034',
        darkGray: '#1a1a1a',
        lightGray: '#2b2b2b',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

