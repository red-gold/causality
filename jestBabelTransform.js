const babelJest = require('babel-jest');
const path = require('path');
const fs = require('fs');
const babelPath = path.resolve(__dirname, '.babelrc');
const definedBabel = JSON.parse(fs.readFileSync(babelPath));
module.exports = babelJest.createTransformer(definedBabel);