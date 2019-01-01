module.exports = {
  setupFiles: [
    require.resolve('./tests/shim.js'),
    require.resolve('./tests/setup.js'),
  ],
  transform: {
    '\\.js?$': require.resolve('./tests/transformers/jsTransformer'),
    '\\.ts?$': require.resolve('./tests/transformers/tsTransformer'),
  },
  testMatch: ['**/?(*.)(spec|test|e2e).(j|t)s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupTestFrameworkScriptFile: require.resolve('./tests/jasmine'),
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),
  },
  globals: {
    'ts-jest': {
      useBabelrc: true,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'containers/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    './src/assets/*.*'
  ],
};
