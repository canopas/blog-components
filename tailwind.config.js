/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: "cb-",
  content: ["./src/runtime/**/*.{js,ts,vue,css}"],
  theme: {
    extend: {
      display: ["group-hover"],
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "2440px",
      },
      fontFamily: {
        "source-codepro": ["Source CodePro"],
        "poppins-regular": ["Poppins Regular"],
        "poppins-medium": ["Poppins Medium"],
        "inter-extralight": ["Inter-ExtraLight"],
        "inter-regular": ["Inter-Regular"],
        "inter-medium": ["Inter-Medium"],
        "inter-semibold": ["Inter-SemiBold"],
        "inter-bold": ["Inter-Bold"],
        "comme-light": ["Comme-Light"],
        "comme-regular": ["Comme-Regular"],
        "comme-medium": ["Comme-Medium"],
        "comme-semibold": ["Comme-SemiBold"],
      },
      colors: {
        black: {
          core: "#000000",
          900: "#3d3d3d",
        },
        white: "#ffffff",
        pink: {
          300: "#f2709c",
        },
        orange: {
          300: "#ff835b",
        },
        slate: {
          200: "rgb(226, 226, 226)",
          400: "rgb(141, 138, 138)",
        },
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.9, 0.96, 1, 1)",
      },
      backgroundImage: {
        "gradient-L": "linear-gradient(178deg, #FFFFFF  68%, #f77783 40%);",
        "gradient-U": "linear-gradient(257deg, #FFFFFF  65%, #f77783 68%);",
        "gradient-T": "linear-gradient(540deg, #FFFFFF  30.5%, #f77783 10%);",
        "gradient-background":
          "linear-gradient(to bottom, #FFFFFF , #FDE0E2 23%, #FDE0E2 88%, #FFFFFF 100%);",
      },
    },
  },
  corePlugins: {
    container: false,
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".blog-container": {
          margin: "auto",
          padding: "0 0.75rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1320px",
          },
          "@screen 3xl": {
            maxWidth: "1470px",
          },
        },
      });
    },
  ],
};
