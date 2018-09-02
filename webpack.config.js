/**
 * @description 对roadhog默认配置进行操作
 * @param { Object } config
 */
module.exports = config => {
  config.module.rules.unshift({
    test: /\.yaml$/,
    use: ['json-loader', 'yaml-loader'],
  });

  config.module.rules.forEach(r => {
    if (Array.isArray(r.exclude)) {
      r.exclude.push(/\.yaml$/);
    }
  });

  return config;
};
