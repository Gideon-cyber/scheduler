module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        "red-purple": "#ee0571",
      },
    },
    screens: {
      tablet: { max: "1024px" },
      // => @media (max-width: 1024px)
      mobile: { max: "767px" },
      //  => @media (max-width: 767px)
    },
  },
  plugins: [],
};
