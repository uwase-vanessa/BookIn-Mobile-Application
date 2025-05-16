/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
     "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       colors:{
        primary: "#F67A1F",
        secondary:"#91CB4B",
        tertiary:"#1656AD",
        light:"#FAC8A2",
        "dark-1":"#1F2029",
        "gray-1":"#C2C3CC",
        "light-orange":"#FCDBC1"
       }
    },
  },
  plugins: [],
}