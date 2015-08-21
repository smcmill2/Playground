var fs = require('fs');
var fin = process.argv[2];

fs.readFile(fin, function (err, buf) {
  if (err !== 1) {
    console.log(buf.toString().split("\n").length -1);
  }
});
