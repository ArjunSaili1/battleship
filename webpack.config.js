const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
   ],
 },
 plugins: [
  // fix "process is not defined" error:
  // (do "npm install process" before running the build)
  new webpack.ProvidePlugin({
    process: 'process/browser',
  }),
]
};