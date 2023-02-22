const conj = (coll, item) => {
  return [...coll, item];
};

const cons = (item, seq) => {
  return [item, ...seq];
};

const first = (seq) => {
  return seq[0];
};

const nth = (seq, n) => {
  return seq[n];
};

const peek = (stack) => {
  return stack[stack.length - 1];
};

const rest = (seq) => {
  return seq.slice(1);
};

const pop = (stack) => {
  return stack.slice(0, -1);
};

function disj(...args){
  let [coll, key, ...rest] = args;
  if (args.length === 2) {
    return coll.filter((item) => item !== key);
  } else if (args.length === 1) {
    return (key) => disj(coll, key);
  }
  throw new Error('disj function must be called with at least 1 argument');
}

const ffirst = (coll) => {
  return first(coll[0]);
};


function find(pred, coll){
  for (const item of coll) {
    if (pred(item)) {
      return item;
    }
  }
  return undefined;
};


var map = (...args) => {
  let [fn, arr] = args;
  if (args.length === 1) {
    return coll => map(fn, coll);
  }
  return arr.map(fn);
}


var filter = (...args) => {
  let [predicate, arr] = args;
  if (args.length === 1) {
    return coll => filter(predicate, coll);
  }
  return arr.filter(predicate);
}

var reduce = (...args) => {
  let [reducer, initialValue, arr] = args;
  if(args.length === 1){
    return coll => reduce(reducer, null, coll);
  }
  if (args.length === 2) {
    return coll => reduce(reducer, initialValueHolder, coll)
  }
  return arr.reduce(reducer, initialValue)
}

var concat = (...args) => {
  let [arr1, arr2] = args;
  if (args.length === 1) {
    return arr2Holder => concat(arr1, arr2Holder)
  }
  return arr1.concat(arr2)
}

// mapcat
var mapcat = (...args) => {
  let [fn, arr]= args;
  if (args.length === 1) {
    return coll => mapcat(fn, coll);
  }
  return arr.map(fn).reduce((acc, val) => acc.concat(val), [])
}

// flatten
var flatten = arr => {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray) ? flatten(flat) : flat
}

// distinct
var distinct = arr => [...new Set(arr)]

// remove
var remove = (...args) => {
  let [predicate, arr] = args;
  if (args.length === 1) {
    return coll => remove(predicate, coll)
  }
  return arr.filter(val => !predicate(val))
}

// take-nth

var takeNth = (...args) => {
  let [n, arr] = args;
  if (args.length === 1) {
    return coll => takeNth(n, coll)
  }
  return arr.filter((_, i) => i % n === 0);
}

// take
var take = (...args) => {
  let [n, arr] = args;
  if (args.length === 1) {
    return coll => take(n, coll);
  }
  return arr.slice(0, n)
}

// second
var second = ([_, x]) => x

// last
const last = arr => arr[arr.length - 1]

// next
const next = ([_, ...rest]) => rest

// nfirst
const nfirst = (n = 1, arr) => arr.slice(n)

// nnext
const nnext = (n = 1, arr) => arr.slice(-n)

// fnext
const fnext = (fn, arr) => fn(...next(arr))

// take-last
const takeLast = (n, arr) => arr.slice(-n)

// take-while

const takeWhile = (...args) => {
  let [predicate, arr] = args;
  if (args.length === 1) {
    return coll => takeWhile(predicate, coll)
  }
  const index = arr.findIndex(val => !predicate(val))
  return index === -1 ? arr : arr.slice(0, index)
}

// drop
const drop = (n, arr) => arr.slice(n)

// drop-last
const dropLast = (arr) => arr.slice(0, -1)

// drop-first
const dropFirst = (arr) => arr.slice(1)

// nthrest
const nthrest = (...args) => {
  let [n, arr] = args;
  if (args.length === 1) {
    return coll => nthrest(n, coll)
  }
  return arr.filter((_, i) => i >= n)
}

const sort = (...args) => {
  let [arr, comparator = (a, b) => a - b] = args;
  return args.length === 1 ? [...arr].sort() : [...arr].sort(comparator);
}


const sortBy = (...args) => {
  let [fn, arr] = args;
  if (args.length === 1) {
    return arr => [...arr].sort((a, b) => fn(a) - fn(b));
  } else {
    return [...arr].sort((a, b) => fn(a) - fn(b));
  }
};

const mapIndexed = (...args) => {
  let [fn, arr] = args;
  if (args.length === 1) {
    return arr => arr.map((val, idx) => fn(val, idx));
  } else {
    return arr.map((val, idx) => fn(val, idx));
  }
};


const reverse = (...args) => {
  let [arr] = args;
  args.length === 1 ? [...arr].reverse() : arr.reverse();
}

/*
const numbers = [1, 2, 3];
console.log(reverse(numbers)); // [3, 2, 1]
*/

const interleave = (...arrays) => {
  if (arrays.length === 1) {
    return arr => arrays.reduce((acc, arr) => acc.flatMap((val, i) => [val, arr[i]]), arr.shift());
  } else {
    return arrays.reduce((acc, arr) => acc.flatMap((val, i) => [val, arr[i]]), arrays.shift());
  }
};

const interpose = (...args) => {
  let [sep, arr] = args;
  if (args.length === 1) {
    return arr => arr.flatMap((val, i) => i === arr.length - 1 ? val : [val, sep]);
  } else {
    return arr.flatMap((val, i) => i === arr.length - 1 ? val : [val, sep]);
  }
};


const compare = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};


var groupBy = (...args) => {
  let [fn, arr] = args;
  if(args.length === 1){
    return (coll) => groupBy(fn, coll);
  }
  return arr.reduce((acc, curr) => {
    const key = fn(curr);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
};

const partition = (...args) => {
  let [size, arr] = args;
  if(args.length === 1){
    return (coll) => partition(size, coll);
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};


var partitionAll = (...args) => {
  let [size, arr] = args;
  if(args.length === 1){
    return (coll) => partitionAll(size, coll);
  }
  if (!arr || !arr.length) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};


// partition-by

const partitionBy = (...args) => {
  let [fn, coll] = args;
  if(args.length === 1){
    return (coll) => partitionBy(fn, coll);
  }
  const result = [];
  let group = [];
  let prevValue;
  for (const elem of coll) {
    const value = fn(elem);
    if (value === prevValue || prevValue === undefined) {
      group.push(elem);
    } else {
      result.push(group);
      group = [elem];
    }
    prevValue = value;
  }
  if (group.length > 0) {
    result.push(group);
  }
  return result;
};


// split-at
const splitAt = (n, coll) => {
  return [coll.slice(0, n), coll.slice(n)];
};

// split-with
const splitWith = (pred, coll) => {
  const a = [];
  const b = [];
  let inA = true;
  coll.forEach((elem) => {
    if (inA && pred(elem)) {
      a.push(elem);
    } else {
      inA = false;
      b.push(elem);
    }
  });
  return [a, b];
};

// shuffle
const shuffle = (coll) => {
  const result = coll.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// rand-nth
const randNth = (coll) => {
  const i = Math.floor(Math.random() * coll.length);
  return coll[i];
};

// when-first
const whenFirst = (pred, coll, fn) => {
  for (const elem of coll) {
    if (pred(elem)) {
      return fn(elem);
    }
  }
};

function vec(coll) {
  if (!coll) {
    return [];
  }
  if (Array.isArray(coll)) {
    return coll;
  }
  if (typeof coll === 'string') {
    return coll.split('');
  }
  if (typeof coll[Symbol.iterator] === 'function') {
    return Array.from(coll);
  }
  return Object.values(coll);
}

function subvec(coll, start, end) {
  if (!end) {
    end = coll.length;
  }
  if (start < 0 || end < 0) {
    throw new Error('start and end must be non-negative');
  }
  return coll.slice(start, end);
}


// repeat implementation
const repeat = (n, value) => {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = value;
  }
  return result;
};

// range implementation
const range = (start, end, step = 1) => {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};

function keep(pred, coll) {
  return coll.reduce((acc, curr) => {
    const result = pred(curr);
    if (result !== null && result !== undefined) {
      acc.push(result);
    }
    return acc;
  }, []);
}


function keepIndexed(pred, coll) {
  return coll.reduce((acc, curr, idx) => {
    const result = pred(idx, curr);
    if (result !== null && result !== undefined) {
      acc.push(result);
    }
    return acc;
  }, []);
}

function frequencies(coll) {
  const freqMap = new Map();
  for (const el of coll) {
    freqMap.set(el, (freqMap.get(el) || 0) + 1);
  }
  return Object.fromEntries(freqMap);
}

function count(coll) {
  return coll.length;
}

function union(set1, set2) {
  return Array.from(new Set([...set1, ...set2]));
}

function difference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

function intersection(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}

module.exports ={  
  conj,
  cons, 
  first,
  nth,
  peek,
  rest,
  pop,
  disj,
  ffirst,
  find,
  map,
  filter,
  reduce,
  concat,
  mapcat,
  flatten,
  distinct,
  remove,
  takeNth,
  take,
  second,
  last,
  next,
  nfirst,
  nnext,
  fnext,
  takeLast,
  takeWhile,
  drop,
  dropLast,
  dropFirst,
  nthrest,
  sort,
  sortBy,
  mapIndexed,
  reverse,
  interleave,
  interpose,
  compare,
  groupBy,
  partition,
  partitionAll,
  partitionBy,
  splitAt,
  splitWith,
  shuffle,
  randNth,
  whenFirst,
  vec,
  subvec,
  repeat,
  range,
  keep,
  keepIndexed,
  frequencies,
  count,
  union,
  difference,
  intersection  
}
