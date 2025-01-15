/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': "#3C5564",
      'globalBg': "#70259B",
      'footerBg': "#430964",
      'pinkBorder': "#D100C9",
      'white': "#ffffff",
      'darkGrey': "##7E939C",
      'xlLightGrey': "#F3F7FA",
      'down-app': "rgba(255, 255, 255, 0.6)"
      
    },
    extend: {

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interRegular: ['InterRegular', 'sans-serif'],
      },
      boxShadow: {
        'text': '0 4px 6px rgba(0, 0, 0, 0.1)', 
      },
    },
  },
  plugins: [],
}
