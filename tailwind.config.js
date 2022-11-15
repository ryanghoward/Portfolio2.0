module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        about: 'url("/src/assets/text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
    },
  },
  plugins: [],
};
