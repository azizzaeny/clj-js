
function subs(str, start, end) {
  return str.substring(start, end);
}

// Example usage:
// subs("hello world", 0, 5); // "hello"

function splitLines(str) {
  return str.split("\n");
}

// Example usage:
// splitLines("hello\nworld"); // ["hello", "world"]

function replace(str, pattern, replacement) {
  return str.replace(new RegExp(pattern, "g"), replacement);
}

// Example usage:
// replace("hello world", "o", "a"); // "hella warld"

function replaceFirst(str, pattern, replacement) {
  return str.replace(pattern, replacement);
}

// Example usage:
//replaceFirst("hello world", "o", "a"); // "hella world"

function join(arr, separator) {
  return arr.join(separator);
}

// Example usage:
//join(["hello", "world"], " "); // "hello world"

function escape(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Example usage:
//escape("hello.world"); // "hello\.world"

function rePattern(pattern) {
  return new RegExp(pattern);
}

// Example usage:
//rePattern("hello.*"); // /hello.*/

function reMatches(str, pattern) {
  var regex = new RegExp(pattern, "g");
  var matches = [];
  var match;

  while ((match = regex.exec(str)) !== null) {
    matches.push(match[0]);
  }

  return matches;
}

// Example usage:
// reMatches("hello world", "l+"); // ["ll"]

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
//capitalize("hello world"); // "Hello world"

function lowerCase(str) {
  return str.toLowerCase();
}

// Example usage:
// lowerCase("HELLO WORLD"); // "hello world"

function upperCase(str) {
  return str.toUpperCase();
}

// Example usage:
// upperCase("hello world"); // "HELLO WORLD"


function trim(str) {
  return str.trim();
}

// Example usage:
// trim("   hello world   "); // "hello world"

function trimNewline(str) {
  return str.replace(/^[\n\r]+|[\n\r]+$/g, '');
}

function trimL(str) {
  return str.replace(/^\s+/, '');
}

function trimR(str) {
  return str.replace(/\s+$/, '');
}

function char(n) {
  return String.fromCharCode(n);
}


module.exports = {
  split,
  subs,
  splitLines,
  replace,
  replaceFirst,
  join,
  escape,
  rePattern,
  reMatches,
  capitalize,
  lowerCase,
  upperCase,
  trim,
  trimNewline,
  trimL,
  trimR,
  char,  
}
