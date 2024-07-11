/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{"orange-button":'#ff561e', "green-button":'#068a3f'}
    },
    boxShadow:{
      // navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
      navbar: "0px 10px 8px 0px rgba(0, 0, 0, 0.5), 0 1px 2px -1px rgba(0, 0, 0, 0.5)",
    },
    /** @type {import('tailwindcss').Config} */
    screens: {
      sm: '640px',
      sm: '740px',
      // => @media (min-width: 640px) { ... }

      md:'768px',
      //md:'1240px',
      // => @media (min-width: 768px) { ... }

      lg: '1090px',
      //lg: '1340px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      "2xl": '1536px',

      "2xl": '1580px',

      "2xl": '1580px',
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

