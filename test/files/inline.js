var exec = require('browserify-exec');
var echo = exec('printf 1');
console.log(echo);
