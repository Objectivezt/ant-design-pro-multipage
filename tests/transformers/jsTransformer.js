"use strict";

var _babelJest = _interopRequireDefault(require("babel-jest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _babelJest.default.createTransformer({
  presets: [[require.resolve('../env/base.js'), {
    commonjs: true,
    disableTransform: true
  }]],
  plugins: [[require.resolve('babel-plugin-module-resolver'), {
    alias: {
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
      enzyme: require.resolve('enzyme')
    }
  }]]
});

exports.default = _default;
module.exports = exports["default"];
