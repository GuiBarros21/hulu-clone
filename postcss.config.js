module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}", "./components/**/*.{js,tx,jsx,tsx}"],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
