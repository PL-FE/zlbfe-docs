module.exports = {
  theme: "",
  title: "众乐邦前端",
  description: "内部系统及业务系统的组件库文档教程示例代码",
  base: "/",
  port: "8080",
  themeConfig: {
    sidebar: "auto",
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
    // 配置侧边栏部分
    // "/comps/": ["/comps/", "/comps/color-picker.md"],
    sidebar: [
      {
        title: '开始2',   // 必要的
        path: '/comps/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: 'rsk-common',
        children: [ 
          {
            title: 'c',
            path: '/comps/rsk-common/color-picker.md'
          }
         ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: '财税系统',
      },
      {
        title: '众乐邦MS系统',
      },
      {
        title: '众乐邦PC系统',
      },
    ]
  },
  head: [],
  plugins: ["demo-container"], // 配置插件
  markdown: {},
  chainWebpack(config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
