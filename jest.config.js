const paths = require('./config/paths');

var coverageDefaults = {
  branches: 10,
  functions: 10,
  lines: 10,
  statements: 10,
};

module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime', '<rootDir>/config/polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setup.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}', '<rootDir>/src/**/*.(spec|test).{js,jsx,mjs}'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleDirectories: paths.resolveModules,
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    'src/server/routes/**/*.js': coverageDefaults,
    'src/shared/**/*.js': coverageDefaults,
  },
};
