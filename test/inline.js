var test = require('tap').test;
var browserify = require('browserify');

var vm = require('vm');
var path = require('path');

test('bundle a command', function (t) {
    t.plan(1);

    var b = browserify();
    b.add(__dirname + '/files/inline.js');
    b.transform(path.dirname(__dirname));

    b.bundle(function (err, src) {
        if (err) t.fail(err);
        console.log(src.toString('utf8'))
        vm.runInNewContext(src, { console: { log: log } });
    });

    function log (msg) {
        t.equal(msg, "1");
    }
});
