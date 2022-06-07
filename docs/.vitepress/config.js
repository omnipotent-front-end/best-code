const nav = require("./configs/nav");
const sidebar = require("./configs/sidebar").default;

export default {
  base: "/best-code/",
  lang: "zh-CN",
  title: "编码技巧",
  description: "编码技巧集合",
  themeConfig: {
    nav,
    sidebar
  },
};
