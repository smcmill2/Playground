var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var strFile = buf.toString();

console.log(strFile.split("\n").length - 1);
