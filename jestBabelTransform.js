const babelJest = require('babel-jest');
const path = require('path');
const fs = require('fs');
babelPath = path.resolve(__dirname, '.babelrc');
module.exports = babelJest.createTransformer(JSON.parse(fs.readFileSync(babelPath)));