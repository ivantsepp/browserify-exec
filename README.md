# browserify-exec
browserify inliner for shell commands at build time.

This module is a transform for [browserify](https://github.com/substack/node-browserify) to allow you to execute shell commands at build time and inline the results into your bundle.

## Install

`npm install browserify-exec`

## Example

`example/main.js`:

```javascript
var exec = require('browserify-exec');

var date = exec('date' + ' | xargs echo -n');
var hashObjectForThisFile = exec('git hash-object ' + __filename);

console.log(date);
console.log(hashObjectForThisFile);
```

And in the command line:

`$ browserify -t browserify-exec example/main.js > bundle.js`

You will see this in the bundle:

```javascript
var date = "Fri Mar 18 11:36:36 EDT 2016";
var hashObjectForThisFile = "c1e51983f9fba8ef1ab17b58e868fe77ac6a9dc2\n";
```

Or you can use the API of browserify:

```javascript
var browserify = require('browserify');
var b = browserify('example/main.js');
b.transform('browserify-exec');
b.bundle().pipe(fs.createWriteStream('bundle.js'));
```


## Usage

`browserify-exec` builds on top of [static-module](https://github.com/substack/static-module) so to use it, you first need to require the module by
```javascript
var exec = require('browserify-exec')
```

Then you can use `exec` anywhere by passing in a command line string to execute. The result will be inlined and will replace the `exec` call. You also have access to __filename and __dirname variables in the arguments to `exec`.

## Related

Please also checkout these related transforms:
- [brfs](https://github.com/substack/brfs)
- [browserify-inline](https://github.com/eirikb/browserify-inline)
