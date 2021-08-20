const path = require('path');

const rules = [
  {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  },
  // 解决 elemnt-plus 报错问题
  {
    include: /node_modules/,
    test: /\.mjs$/,
    type: 'javascript/auto'
  }
]

module.exports = rules