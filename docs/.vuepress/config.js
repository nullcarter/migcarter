module.exports = {
  title: "MigCarter",
  description: "just a dev's blog",
  themeConfig: {
    nav: [{ text: "home", link: "/" }, { text: "blog", link: "/blog/" }],
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};