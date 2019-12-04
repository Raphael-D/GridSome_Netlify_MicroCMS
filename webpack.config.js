const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const confVueBabel = {
    mode: 'development',
    entry: {
      'main': './src/main.js',
      'hoge': './src/js/hoge.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          // Babel のオプションを指定する
          options: {
            presets: [
              // プリセットを指定することで、ES2019 を ES5 に変換
              '@babel/preset-env',
            ]
          }
        },
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      // Webpackで利用するときの設定
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json', '.scss']
    },
    plugins: [
      // Vueを読み込めるようにするため
      new VueLoaderPlugin()
    ]
};
const confSass = {
  mode: 'development',
  entry: {
    common: './src/assets/scss/common.scss',
    style: './src/assets/scss/style.scss',
    ress: './src/assets/scss/ress.scss'
  },
  output: {
    // 全体の設定
    path: path.resolve(__dirname, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            },
          },
          { 
            loader: 'sass-loader',
            options: {
              // url: true,
              sourceMap: true,
              // importLoaders: 2
            }
          }
        ],
      }
    ],
  },
  plugins:[
    // cssの出力先を指定する
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({ filename: './css/[name].css' })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  
}
module.exports = [confSass];
// module.exports = [confVueBabel, confSass];