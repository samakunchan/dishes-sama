const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  collectCoverage: true, // A retenir pour Jest. Important pour désactiver le coverage automatique
  collectCoverageFrom: ['src/**/*.ts'],
};
