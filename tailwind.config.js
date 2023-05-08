
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url('../src/assets/image/banner.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

