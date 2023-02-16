const conj = (coll, item) => {
  return [...coll, item];
};

/*
conj([1, 2, 3], 4); // [1, 2, 3, 4]
*/
const cons = (item, seq) => {
  return [item, ...seq];
};
/*
cons(1, [2, 3, 4]); // [1, 2, 3, 4]
*/

const first = (seq) => {
  return seq[0];
};

/*
first([1, 2, 3]); // 1
*/

const nth = (seq, n) => {
  return seq[n];
};
/*
nth([1, 2, 3], 1); // 2
*/
const peek = (stack) => {
  return stack[stack.length - 1];
};

/*
peek([1, 2, 3]); // 3
*/

const rest = (seq) => {
  return seq.slice(1);
};

/*
rest([1, 2, 3]); // [2, 3]

*/
const pop = (stack) => {
  return stack.slice(0, -1);
};

/*
 pop([1, 2, 3]); // [1, 2]
*/

// disj
const disj = (coll, key) => {
  if (arguments.length === 2) {
    return coll.filter((item) => item !== key);
  } else if (arguments.length === 1) {
    return (key) => disj(coll, key);
  }
  throw new Error('disj function must be called with at least 1 argument');
}

/*
const disj = (coll, key) => {
  return coll.filter((item) => item !== key);
};
const disj = (set, key) => {
  const result = new Set(set);
  result.delete(key);
  return result;
};

 disj(["a", "b", "c"], "b"); // ["a", "c"]
*/

const ffirst = (coll) => {
  return first(coll[0]);
};

/*
ffirst([[1, 2, 3], [4, 5, 6]]); // 1
*/

function find(coll, pred){
  for (const item of coll) {
    if (pred(item)) {
      return item;
    }
  }
  return undefined;
};

/*
find([1, 2, 3, 4], x => x % 2 === 0); // 2
*/

const map = (arr, fn) => {
  if (arguments.length === 1) {
    return fnHolder => map(arr, fnHolder)
  }
  return arr.map(fn)
}

/*
const double = map((x) => x * 2);
double([1, 2, 3]); // [2, 4, 6]

const triple = map([1, 2, 3], (x) => x * 3);
triple; // [3, 6, 9]
*/

const filter = (arr, predicate) => {
  if (arguments.length === 1) {
    return predicateHolder => filter(arr, predicateHolder)
  }
  return arr.filter(predicate)
}

/*
const isEven = filter((x) => x % 2 === 0);
isEven([1, 2, 3, 4, 5]); // [2, 4]

const longWords = filter(["apple", "banana", "cherry"], (word) => word.length > 5);
longWords; // ["banana", "cherry"]
*/

const reduce = (arr, reducer, initialValue) => {
  if (arguments.length === 2) {
    return initialValueHolder => reduce(arr, reducer, initialValueHolder)
  }
  return arr.reduce(reducer, initialValue)
}

/*
const sum = reduce((acc, x) => acc + x);
sum([1, 2, 3, 4, 5]); // 15

const product = reduce([1, 2, 3, 4, 5], (acc, x) => acc * x);
product; // 120
*/

// Concatenates two or more arrays
// concat
const concat = (arr1, arr2) => {
  if (arguments.length === 1) {
    return arr2Holder => concat(arr1, arr2Holder)
  }
  return arr1.concat(arr2)
}

// mapcat
const mapcat = (arr, fn) => {
  if (arguments.length === 1) {
    return fnHolder => mapcat(arr, fnHolder)
  }
  return arr.map(fn).reduce((acc, val) => acc.concat(val), [])
}

// flatten
const flatten = arr => {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray) ? flatten(flat) : flat
}

// distinct
const distinct = arr => [...new Set(arr)]

// remove
const remove = (arr, predicate) => {
  if (arguments.length === 1) {
    return predicateHolder => remove(arr, predicateHolder)
  }
  return arr.filter(val => !predicate(val))
}

// take-nth
const takeNth = (arr, n) => {
  if (arguments.length === 1) {
    return nHolder => takeNth(arr, nHolder)
  }
  return arr.filter((_, i) => i % n === 0)
}

// take
const take = (arr, n) => {
  if (arguments.length === 1) {
    return nHolder => take(arr, nHolder)
  }
  return arr.slice(0, n)
}

// second
const second = ([_, x]) => x

// last
const last = arr => arr[arr.length - 1]

// next
const next = ([_, ...rest]) => rest

// nfirst
const nfirst = (arr, n = 1) => arr.slice(n)

// nnext
const nnext = (arr, n = 1) => arr.slice(-n)

// fnext
const fnext = (arr, fn) => fn(...next(arr))

// take-last
const takeLast = (arr, n) => arr.slice(-n)

// take-while
const takeWhile = (arr, predicate) => {
  if (arguments.length === 1) {
    return predicateHolder => takeWhile(arr, predicateHolder)
  }
  const index = arr.findIndex(val => !predicate(val))
  return index === -1 ? arr : arr.slice(0, index)
}

// drop
const drop = (arr, n) => arr.slice(n)

// drop-last
const dropLast = (arr, n = 1) => arr.slice(0, -n)

// drop-first
const dropFirst = (arr, n = 1) => arr.slice(n)

// nthrest
const nthrest = (arr, n) => {
  if (arguments.length === 1) {
    return nHolder => nthrest(arr, nHolder)
  }
  return arr.filter((_, i) => i >= n)
}

/*
// Concatenates two or more arrays
const concat = (...arrays) => [].concat(...arrays);

// Applies a function to each element of an array, and concatenates the results
const mapcat = (fn, coll) => coll.flatMap(fn);

// Flattens an array one level deep
const flatten = (coll) => coll.flat();

// Returns an array with duplicate elements removed
const distinct = (coll) => [...new Set(coll)];

// Removes all elements from an array that satisfy a predicate
const remove = (pred, coll) => coll.filter((x) => !pred(x));

// Returns every nth element of an array
const takeNth = (n, coll) => coll.filter((x, i) => i % n === n - 1);

// Returns the first n elements of an array
const take = (n, coll) => coll.slice(0, n);

// Returns the second element of an array
const second = ([_, x, ...rest]) => x;

// Returns the last element of an array
const last = (coll) => coll[coll.length - 1];

// Returns an array containing all but the first element of a collection
const next = ([_, ...rest]) => rest;

// Returns an array containing all but the first element of a collection
const nfirst = ([x, ...rest]) => rest;

// Returns an array containing all but the first two elements of a collection
const nnext = ([_, x, ...rest]) => rest;

// Returns an array containing all but the first element of a collection
const fnext = (coll) => coll.slice(1);

// Returns the last n elements of an array
const takeLast = (n, coll) => coll.slice(Math.max(coll.length - n, 0));

// Returns the longest prefix of an array for which a predicate is true
const takeWhile = (pred, coll) => {
  const index = coll.findIndex((x) => !pred(x));
  return index === -1 ? coll : coll.slice(0, index);
};

// Returns an array containing all but the first n elements of a collection
const drop = (n, coll) => coll.slice(n);

// Returns an array containing all but the last n elements of a collection
const dropLast = (n, coll) => coll.slice(0, Math.max(coll.length - n, 0));

// Returns an array containing all but the first element of a collection
const dropFirst = ([_, ...rest]) => rest;

// Returns an array containing all but the first n elements of a collection
const nthrest = (n, coll) => coll.slice(n);
*/

const sort = (arr, comparator = (a, b) => a - b) => arguments.length === 1 ? [...arr].sort() : [...arr].sort(comparator);

/*
const nums = [5, 2, 8, 1, 4];
const sortedNums = sort(nums);
console.log(sortedNums); // [1, 2, 4, 5, 8]
*/

const sortBy = (fn, arr) => {
  if (arguments.length === 1) {
    return arr => [...arr].sort((a, b) => fn(a) - fn(b));
  } else {
    return [...arr].sort((a, b) => fn(a) - fn(b));
  }
};

/*
const strings = ["foo", "bar", "baz", "qux"];
console.log(sortBy(identity, strings)); // ["bar", "baz", "foo", "qux"]
*/

const mapIndexed = (fn, arr) => {
  if (arguments.length === 1) {
    return arr => arr.map((val, idx) => fn(val, idx));
  } else {
    return arr.map((val, idx) => fn(val, idx));
  }
};
/*
// map-indexed
const numbers = [10, 20, 30];
console.log(mapIndexed((index, value) => [index, value], numbers)); // [[0, 10], [1, 20], [2, 30]]
*/
const reverse = arr => arguments.length === 1 ? [...arr].reverse() : arr.reverse();

/*
const numbers = [1, 2, 3];
console.log(reverse(numbers)); // [3, 2, 1]
*/

const interleave = (...arrays) => {
  if (arguments.length === 1) {
    return arr => arrays.reduce((acc, arr) => acc.flatMap((val, i) => [val, arr[i]]), arr.shift());
  } else {
    return arrays.reduce((acc, arr) => acc.flatMap((val, i) => [val, arr[i]]), arrays.shift());
  }
};

/*
const a = [1, 2, 3];
const b = ["a", "b", "c"];
console.log(interleave(a, b)); // [1, "a", 2, "b", 3, "c"]
*/

const interpose = (sep, arr) => {
  if (arguments.length === 1) {
    return arr => arr.flatMap((val, i) => i === arr.length - 1 ? val : [val, sep]);
  } else {
    return arr.flatMap((val, i) => i === arr.length - 1 ? val : [val, sep]);
  }
};

/*
// interpose
const numbers = [1, 2, 3];
console.log(interpose(",", numbers)); // [1, ",", 2, ",", 3]
*/

const compare = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

/*
// Usage
console.log(compare(1, 2)); // -1
console.log(compare(2, 1)); // 1
console.log(compare(1, 1)); // 0
*/

const groupBy = (arr, fn) => {
  if (!arr || !arr.length) return {};
  return arr.reduce((acc, curr) => {
    const key = fn(curr);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
};

/*
// Usage
const groupByFirstLetter = groupBy(['apple', 'banana', 'cherry', 'date'], word => word[0]);
console.log(groupByFirstLetter); // { a: [ 'apple' ], b: [ 'banana' ], c: [ 'cherry' ], d: [ 'date' ] }
*/

const partition = (arr, size) => {
  if (!arr || !arr.length) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
/*
// Usage
console.log(partition([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(partition([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
*/

const partitionAll = (arr, size) => {
  if (!arr || !arr.length) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
/*
// Usage
console.log(partitionAll([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(partitionAll([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
*/

// partition-by
const partitionBy = (fn, coll) => {
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
  whenFirst  
}
