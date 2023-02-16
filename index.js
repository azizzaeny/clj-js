var object = require('./src/object');
var array = require('./src/array');
var fn = require('./src/function');
var str = require('./src/string');
var state = require('./src/state');
var check = require('./src/check');
var math = require('./src/math');

module.exports = Object.assign({}, object, array, fn, str, state, check, math);
