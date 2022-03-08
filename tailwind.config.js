module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      'sm' : '480px',
      'md' : '576px',
      'lg' : '768px',
      'xl' : '1024px',
      '2x1' : '1440px',
      '3xl' : '1680px',
      '4x1' : '1920px',
    },
    extend: {},

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
