/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
      ],
    },
    autoprefixer: {},
  },
}

export default config
