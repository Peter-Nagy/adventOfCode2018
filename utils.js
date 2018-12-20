var fs = require('fs');

module.exports = (inputFile) => fs.readFileSync(inputFile).toString().split("\n");
