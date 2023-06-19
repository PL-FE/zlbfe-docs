
const webpack = require('webpack');
const path = require('path');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}
module.exports =  {
    resolve: {
      alias: {
        // vue: 'vue/dist/vue.js',
        '@': resolve('./'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({ // TODO: 可以删除？
        CONFIG: JSON.stringify({}),
      }),
    ],
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
        {
          test: /\.css$/,
          use: ['style-loader'],
        },
      ],
    },
  }