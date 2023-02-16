(notes: under development)
### CLJ-JS
![image info](./clj-js.png)

Javascript Sets Functional Programming with Basic Clojure data structure.      
Clojure Core Libarary but in JS Land


#### Yet another Problem to Solve 
- Struggle Finding A good Functional Programming Library that implemeneted in Javascript language, but you want all the experience and luxury of doing functional programming in clojure? ,  
- You want to Solving your problem in clojure way by using clojure core data structue?  


#### Usage 
install or clone this repository 
```sh
npm install clj-js
```
use in your code  
```js  
var {map, filter, thread, juxt, assocIn, updateIn} = require('clj-js');
var _ = require('clj-js');
// _.memoize 
```
use individually  
```js  
var {conj, take, keep} = require('cljs-js/src/array');
var {assoc, update, zipmap} = require('cljs-js/src/object');
var {comp, constantly, thread} = require('cljs-js/src/function');
var {isIncludes, isArray, isIdentical} = require('cljs-js/src/check');
var {max, mod, rem, add, incr, decr} = require('cljs-js/src/math');
var {join, reMatches, capitalize} = require('cljs-js/src/string');
```
for detailed functions arguments and usage you can take a look to `cljs.info` or take a look into repository source code   

```js 
conj([1, 2, 3], 4); // [1, 2, 3, 4]
cons(1, [2, 3, 4]); // [1, 2, 3, 4]
first([1, 2, 3]); // 1
peek([1, 2, 3]); // 3
zipmap(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
get({ a: 1, b: 2 }, "a"); // 1
keys({ a: 1, b: 2 }); // ['a', 'b']
vals({ a: 1, b: 2 }); // [1, 2]
mergeWith((a, b) => a + b, { a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 });
selectKeys({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }

var player = { name: "aziz", "foot": "R"}
var playerUpdate = assoc(player, "foot", "L");
var playerNation= assoc(playerUpdate, "country", "ID")
var player = dissoc(playerNation, "country");
var player = {
  player: {
    name: "aziz",
    address: {
      city: "Jakarta",
      state: "JKT"
    }
  }
};
var playerUpdate = assocIn(player, ["player", "address", "country"], "Indonesia");

```
#### Help Improve 
create issues, and Pull Request to improve, add or enhance implementation   

#### Setup  development with node 

```sh
sudo docker run --rm -dit --name clj-js --network=host -v $(pwd):/work node:alpine /bin/sh
```
sudo docker attach clj-js && cd /work && node


**Plann Supported API**

```js
// Objects
{
  get,
  keys,
  vals,
  getIn,
  mergeWith,
  renameKeys,
  selectKeys,
  update,
  updateIn,
  assocIn,
  assoc,
  dissoc,
  zipmap
}

// Array or Coll, or Seq
{
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

// Function, Composition, Thread
{
  apply,
  comp,
  some,
  constantly,
  identity,
  fnil,
  memoize,
  everyPred,
  complement,
  partial,
  juxt,
  someFn,
  thread,
  threadLast,
  threadAs,
  condThread,
  condThreadLast,
  someThread,
  someThreadLast
}

// Math
{
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
  toIntSafe
}

// String
{
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
  char
}

// Check, validation
{
  contains,
  empty,
  notEmpty,
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

// State
```

#### Awesome Clojure in JS 
- [js.Spec](https://github.com/prayerslayer/js.spec)


#### Notes
- this is not re-implementation of clojurescript or cljs  
- under developments, my changes order of arguments, but safely under usage, as long you have the same version

#### TODO
- Make all arguments arity check, check the length input arguments

