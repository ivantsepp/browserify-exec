var staticModule = require('static-module');
var execSync = require('child_process').execSync;
var path = require('path');

module.exports = function (file, opts) {

  var vars = {
    __filename: file,
    __dirname: path.dirname(file),
  };

  return staticModule({
    'browserify-exec': function (cmd) {
      return JSON.stringify(execSync(cmd).toString('utf8'));
    }
  }, {vars: vars});
};
