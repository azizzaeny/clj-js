// Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
function rand() {
  return Math.random();
}

// Returns a random integer between 0 (inclusive) and the specified maximum (exclusive)
function randInt(max) {
  return Math.floor(Math.random() * max);
}

/*
 // Generate a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = rand();

// Generate a random integer between 0 (inclusive) and 10 (exclusive)
let randomInt = randInt(10);
*/

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function quot(a, b) {
  return Math.floor(a / b);
}

function mod(a, b) {
  return a % b;
}

function rem(a, b) {
  return ((a % b) + b) % b;
}

function incr(num) {
  return num + 1;
}

function decr(num) {
  return num - 1;
}

function max(a, b) {
  return Math.max(a, b);
}

function min(a, b) {
  return Math.min(a, b);
}

function toInt(num) {
  return parseInt(num);
}

function toIntSafe(num) {
  return parseInt(num.toString());
}

module.exports ={
  rand,
  randInt,
  add,
  subtract,
  multiply,
  divide,
  quot,
  mod,
  rem,
  incr,
  decr,
  max,
  min,
  toInt,
  toIntSafe,
}
