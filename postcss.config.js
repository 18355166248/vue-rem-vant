module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75, // 设计稿宽度 / 10
      unitPrecision: 5,
      selectorBlackList: [], // 不转换类名 可以是正则 也可以是字符串
      propList: ['*']
    }
  }
}
