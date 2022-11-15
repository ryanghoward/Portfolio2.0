module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        about: 'url("/src/assets/text/about.svg")',
        portfolio: 'url("/src/assets/text/portfolio.svg")',
        contact: 'url("/src/assets/text/contact.svg")',
      },
    },
  },
  plugins: [],
};
