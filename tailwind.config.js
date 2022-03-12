module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1440px',
      '2xl' : '1680px',
      '3xl' : '1920px',
    },
    extend: {},

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
