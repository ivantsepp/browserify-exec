var exec = require('browserify-exec');

var date = exec('date' + ' | xargs echo -n');
var hashObjectForThisFile = exec('git hash-object ' + __filename);

console.log(date);
console.log(hashObjectForThisFile);
