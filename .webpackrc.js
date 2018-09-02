const path = require('path');
const proxyUrl = {
  target: 'http://aaaaaa',
  changeOrigin: true,
  pathRewrite: { '^/': '' },
}
const config = {
  entry: 'src/index.ts',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      },
      'antd'
    ],
    [
      'import',
      {
        libraryName: 'loadsh',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash'
    ]
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    globleConfig: path.resolve(__dirname, 'src/common/config')
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
  //extraResolveExtensions:['', '.ts', '.tsx', '.js'],
  devtool: 'false',
  disableDynamicImport: false,
  publicPath: '/',
  outputPath: './dist',
  hash: true,
  proxy: {
    '/usrApi': proxyUrl,
  }
};

export default config;
