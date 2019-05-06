const babelJest = require('babel-jest');
const path = require('path');
const fs = require('fs');
babelPath = path.resolve(__dirname, '.babelrc');
console.log({babelPath, babel: require(babelPath)});
module.exports = babelJest.createTransformer(JSON.parse(fs.readFileSync(babelPath)));