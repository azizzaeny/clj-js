
function notEmpty(coll) {
  return coll.length > 0 ? coll : null;
}

function empty(coll) {
  return coll.length === 0;
}


function contains(coll, key){
  if (coll instanceof Map || coll instanceof Set) {
    return coll.has(key);
  } else if (Array.isArray(coll)) {
    return coll.includes(key);
  } else {
    return Object.prototype.hasOwnProperty.call(coll, key);
  }
};

/*
contains({ a: 1, b: 2 }, 'a'); // true
contains(new Set([1, 2, 3]), 4); // false
*/

function isZero(x) {
  return x === 0;
}

function isPos(x) {
  return x > 0;
}

function isNeg(x) {
  return x < 0;
}

function isEven(x) {
  return x % 2 === 0;
}

function isOdd(x) {
  return x % 2 !== 0;
}

function isInt(x) {
  return Number.isInteger(x);
}

function isTrue(x) {
  return x === true;
}

function isFalse(x) {
  return x === false;
}

function isInstanceOf(x, type) {
  return x instanceof type;
}

function isNil(x) {
  return x === null;
}

function isSome(x) {
  return x != null;
}

function isFn(value) {
  return typeof value === 'function';
}

function isIncludes(coll, value) {
  return coll.includes(value);
}

function isBlank(value) {
  return typeof value === 'string' && value.trim() === '';
}

function isArray(value) {
  return Array.isArray(value);
}

function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isString(value) {
  return typeof value === 'string';
}

function isIdentical(x, y) {
  return x === y;
}

function isColl(value) {
  return typeof value === 'object' && value !== null;
}

/*
  isFn(() => {}); // true
isIncludes([1, 2, 3], 2); // true
isBlank(''); // true
isArray([1, 2, 3]); // true
isNumber(42); // true
isObject({ a: 1, b: 2 }); // true
isString('hello'); // true
isIdentical(2, 2); // true
isColl({}); // true
*/

function isSubset(set1, set2) {
  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }
  return true;
}

function isSuperset(set1, set2) {
  for (let item of set2) {
    if (!set1.has(item)) {
      return false;
    }
  }
  return true;
}

function isDistinct(arr) {
  return arr.length === new Set(arr).size;
}

function isEmptyArray(arr) {
  return arr.length === 0;
}

function isEmptySet(set) {
  return set.size === 0;
}

function isEveryEven(arr) {
  return arr.every(num => num % 2 === 0);
}

function isNotEveryEven(arr) {
  return arr.some(num => num % 2 !== 0);
}

function isNotAnyEven(arr) {
  return !arr.some(num => num % 2 === 0);
}

function isDeepEqual(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isDeepEqual(a[i], b[i])) return false;
    }
    return true;
  } else if (typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (const key of aKeys) {
      if (!isDeepEqual(a[key], b[key])) return false;
    }
    return true;
  } else {
    return a === b;
  }
}

/*
const a = { a: [1, 2, { b: 'c' }], d: { e: [3, 4] } };
const b = { a: [1, 2, { b: 'c' }], d: { e: [3, 4] } };
const c = { a: [1, 2, { b: 'd' }], d: { e: [3, 4] } };

console.log(isDeepEqual(a, b)); // true
console.log(isDeepEqual(a, c)); // false
*/

function eq(a, b) {
  return a === b;
}

function eqv(a, b) {
  return a == b;
}

function neq(a, b) {
  return a !== b;
}

function gt(a, b) {
  return a > b;
}

function lt(a, b) {
  return a < b;
}

function gte(a, b) {
  return a >= b;
}

function lte(a, b) {
  return a <= b;
}

/*
 eq(2, 2); // true
eq(2, '2'); // false

eqv(2, 2); // true
eqv(2, '2'); // true

neq(2, 2); // false
neq(2, '2'); // true

gt(2, 1); // true
gt(1, 2); // false

lt(2, 1); // false
lt(1, 2); // true

gte(2, 1); // true
gte(2, 2); // true
gte(1, 2); // false

lte(2, 1); // false
lte(2, 2); // true
lte(1, 2); // true
*/
module.exports ={
  contains, empty, notEmpty,
  isZero,
  isPos,
  isNeg,
  isEven,
  isOdd,
  isNumber,
  isInt,
  isTrue,
  isFalse,
  isInstanceOf,
  isNil,
  isSome,
  isFn,
  isIncludes,
  isBlank,
  isArray,
  isObject,
  isString,
  isIdentical,
  isColl,
  isSubset,
  isSuperset,
  isDistinct,
  isEmptyArray,
  isEmptySet,
  isEveryEven,
  isNotEveryEven,
  isNotAnyEven,
  isDeepEqual,
  eq,
  eqv,
  neq,
  gt,
  lt,
  lte,
  gte  
}
