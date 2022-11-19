module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        about: 'url("/src/assets/text/about.svg")',
        portfolio: 'url("/src/assets/text/portfolio.svg")',
        services: 'url("/src/assets/text/services.svg")',
        testimonials: 'url("/src/assets/text/testimonials.svg")',
        contact: 'url("/src/assets/text/contact.svg")',
      },
      colors: {
        primary: "#1D3557",
        secondary: "#457B9D",
        tertiary: "#99D9D9",
        accent: {
          DEFAULT: "#F07556",
          hover: "#99D9D9",
          brown: "#1D3557",
          brownHover: "#ECB183",
        },
        paragraph: "#E0FBFC",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
