const babelJest = require('babel-jest');
const fs = require('fs');
module.exports = babelJest.createTransformer(JSON.parse(fs.readFileSync('./.babelrc')));