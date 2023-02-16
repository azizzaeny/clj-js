var object = require('./src/object');
var array = require('./src/array');
var fn = require('./src/function');
var str = require('./src/string');

module.exports = Object.assign({}, object, array, fn, str);
