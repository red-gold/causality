// Jest configuration for api
const jestBase = require('./jest.base.config.js');

module.exports = {
  ...jestBase,    
  "projects": [
    "<rootDir>",
    "<rootDir>/packages/causality-core/jest.config.js",
    "<rootDir>/packages/causality-datasets/jest.config.js",
    "<rootDir>/packages/causality-deployment/jest.config.js",
    "<rootDir>/packages/causality-layer/jest.config.js",
    "<rootDir>/packages/causality-log/jest.config.js",
    "<rootDir>/packages/causality-memcache/jest.config.js",
    "<rootDir>/packages/causality-models/jest.config.js",
    "<rootDir>/packages/causality-optimizers/jest.config.js",
    "<rootDir>/packages/causality-sampling/jest.config.js",
    "<rootDir>/packages/causality-storage/jest.config.js",
    "<rootDir>/packages/causality-utils/jest.config.js"
  ],
  setupFiles: []
};