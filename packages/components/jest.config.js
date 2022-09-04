const base = require('../../jest.config.base.js')
const pkg = require('./package.json')

module.exports = {
  ...base,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: ['node_modules/(?!antd)/'],
  testEnvironment: 'jsdom',
  displayName: pkg.name,
}
