const path = require('path');
module.exports = {
    testEnvironment: 'node',
    "roots": ["./test/"],
    transform: { "^.+\\.js$": path.resolve(__dirname, "./jestBabelTransform.js") }
}   