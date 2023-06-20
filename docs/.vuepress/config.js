const path = require('path');

function resolve (relatedPath) {
  return path.join(__dirname, relatedPath);
}
module.exports = {
  theme: "",
  title: "众乐邦前端",
  description: "内部系统及业务系统的组件库文档教程示例代码",
  base: "/",
  host: 'test.zlbzb.cn',
  port: "9999",
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
        title: '开始',   // 必要的
        path: '/comps/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: 'rsk-common',
        children: [
          {
            title: '按钮 v-button',
            path: '/comps/rsk-common/button.md'
          },
          {
            title: '表格增加行 v-add-table',
            path: '/comps/rsk-common/add-table.md'
          },
          {
            title: '下拉选择 v-select',
            path: '/comps/rsk-common/select.md'
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

  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' }],
    ['link', { rel: 'stylesheet', href: 'https://static.zlbzb.cn/common/assets/font_1574595_31u8s07swss/iconfont.css' }],
    ['script', { src: 'https://static.zlbzb.cn/common/assets/font_1574595_31u8s07swss/iconfont.js' }],
  ],
  plugins: ["demo-container"], // 配置插件
  markdown: {},
  chainWebpack (config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
  configureWebpack: {
    resolve: {
      alias: {
        // vue: 'vue/dist/vue.js',
        '@': resolve('./'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/, // 匹配JavaScript文件
          exclude: /node_modules(?!.*rsk-common(?!.*node_modules))/,
          use: {
            loader: 'babel-loader', // 使用babel-loader处理
            options: {
              presets: ['@babel/preset-env'] // 使用预设配置，如@babel/preset-env
            }
          }
        },
      ]
    },
  },
};
