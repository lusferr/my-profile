/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#ccd6f6",
        "primary-300": "#8892b0",
        "primary-500": "#525e79",
        "primary-700": "#112240",
        "primary-800": "#0a192f",
        "secondary-100": "#62fad7",
        "secondary-300": "#1d4753",
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
  plugins: [],
}

