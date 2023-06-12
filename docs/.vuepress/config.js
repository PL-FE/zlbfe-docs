module.exports = {
  theme: "",
  title: "众乐邦前端",
  description: "内部系统及业务系统的组件库文档教程示例代码",
  base: "/",
  port: "8080",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "组件",
        link: "/comps/",
      },
    ],
    sidebar: {
      // 配置侧边栏部分
      "/comps/": ["/comps/", "/comps/color-picker.md"],
    },
  },
  head: [],
  plugins: ["demo-container"], // 配置插件
  markdown: {},
  chainWebpack(config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  }
};
