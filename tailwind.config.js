const plugin = require("tailwindcss/plugin");
const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");
const aspecRatio = require("@tailwindcss/aspect-ratio");

const customPlugins = plugin(({ addComponents, addUtilities, addVariant }) => {
  addUtilities({
    ".flex-center": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    ".flex-between": {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
    }
  });

  addComponents({
    ".container": {
      width: "100%",
      maxWidth: "1024px",
      padding: "0",
      margin: "0 auto",
    },
  })

  addVariant("under", "& > *");
});

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  plugins: [forms, lineClamp, aspecRatio, customPlugins],
}