const path = require('path');
const proxyUrl = {
  target: 'http://aaaaaa',
  changeOrigin: true,
  pathRewrite: { '^/': '' },
}
export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    globleConfig :path.resolve(__dirname,'src/common/config')
  },
  ignoreMomentLocale: true,
  theme: './src/common/theme.js',
  html: {
    template: './src/index.ejs',
  },
  // copy:[{
  //   from:'./favicon.ico',
  //   to:'./',
  // }],
  devtool: 'true',
  disableDynamicImport: false,
  publicPath: '/',
  outputPath: './dist',
  hash: true,
  proxy: {
    '/usrApi': proxyUrl,
  }
};
