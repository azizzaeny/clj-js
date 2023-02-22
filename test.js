
var u = require('./index');

Object.keys(require.cache).forEach(i => delete require.cache[require.resolve(i)]);
Object.assign(global, u);

// <<

conj([1, 2, 3], 4); // [1, 2, 3, 4]

cons(1, [2, 3, 4]); // [1, 2, 3, 4]

first([1, 2, 3]); // 1

nth([1, 2, 3], 1); // 2

peek([1, 2, 3]); // 3

rest([1, 2, 3]); // [2, 3]

pop([1, 2, 3]); // [1, 2]

disj(["a", "b", "c"], "b"); // ["a", "c"]

ffirst([[1, 2, 3], [4, 5, 6]]); // 1

find(x => x % 2 === 0, [1, 2, 3, 4]); // 2

var d = map((x) => x * 2);;
d([1, 2, 3]); // [2, 4, 6]
map((x) => x * 3, [1,2,3])

var isEven = filter((x) => x % 2 === 0);
isEven([1, 2, 3, 4, 5]); // [2, 4]

var sum = reduce((acc, x) => acc + x);
sum([1, 2, 3, 4, 5]); // 15

concat([1,2,3,4], [1])

var arr = [[1, 2], [3, 4], [5, 6]];
var result = mapcat(x => x.map(y => y * 2), arr);
result

var sample1 = flatten(arr) ; // [1,2,3,4,5,6]

distinct(flatten([[1, 2], [3, 4], [5, 6], [5,6,2], 1]));

remove(x => x < 4)([1,2,3,4,5,6,7,8]);

takeNth(1)([1,2,3,4,5])

take(2, [1,2,3,4,5,6])

second([1,2,3,4])

last(flatten(arr));

next(sample1)

nnext(1, sample1)

nfirst(1, sample1)

fnext;

takeLast(1, sample1);

takeWhile;

drop(1, sample1)
dropLast(sample1)
dropFirst(sample1)

nthrest(1, sample1)

var sample1 = [1,2,3,4,5,6,7,8];
sort(sample1);
sort(sample1, (a,b) => b - a)


sortBy((a,b) => a - b)([1,2,3,4,5])

const numbers = [10, 20, 30];
mapIndexed((index, value) => [index, value], numbers); // [[0, 10], [1, 20], [2, 30]]

reverse(numbers)

var a = [1, 2, 3];
var b = ["a", "b", "c"];
console.log(interleave(a, b)); // [1, "a", 2, "b", 3, "c"]

console.log(interpose(",", numbers)); // [1, ",", 2, ",", 3]

console.log(compare(1, 2)); // -1
console.log(compare(2, 1)); // 1
console.log(compare(1, 1)); // 0

var groupByFirstLetter = groupBy(word => word[0]);

groupByFirstLetter(['apple', 'banana', 'cherry', 'date']); //{ a: [ 'apple' ], b: [ 'banana' ], c: [ 'cherry' ], d: [ 'date' ] }

console.log(partition(2, [1, 2, 3, 4, 5])); // [[1, 2], [3, 4], [5]]
console.log(partition(3,[1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]

console.log(partitionAll(2, [1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(partitionAll(3, [1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]

partitionBy

splitAt(1, [1,2,3,4,5]);

splitWith;

shuffle([1,2,3,3,4,76,87])

randNth([1,2,3,4,5,6,7,8,0])

whenFirst;

 vec([1, 2, 3]); // => [1, 2, 3]
vec("abc"); // => ["a", "b", "c"]
vec(new Set(['a', 'b', 'c'])); // => ['a', 'b', 'c']
vec(new Map([['a', 1], ['b', 2]])); // => [['a', 1], ['b', 2]]
vec(new Array(3).fill().map((_, i) => i)); // => [0, 1, 2]


subvec([0, 1, 2, 3, 4], 2); // => [2, 3, 4]
subvec([0, 1, 2, 3, 4], 2, 4); // => [2, 3]


repeat(5, 'foo');

range(2, 8, 2);

keep

keepIndexed

const coll = [1, 2, 3, 4, 5, 6];
const isOdd = n => (n % 2 === 1 ? n : null);
const squared = n => n * n;

const result1 = keep(isOdd, coll); // [1, 3, 5]
const result2 = keep(squared, result1); // [1, 9, 25]

const result3 = keepIndexed((idx, n) => (idx % 2 === 0 ? n : null), coll); // [1, 3, 5]
const result4 = keepIndexed(squared, result3); // [1, 9, 25]

frequencies(["apple", "banana", "apple", "cherry"])

count([1,2,3,4,5])

union([1,2,4,5,6], [4,5])
difference([1,2,4,5,6], [4,5])

intersection([1,2,3], [2])

