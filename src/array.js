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

const disj = (coll, key) => {
  return coll.filter((item) => item !== key);
};

/*
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

module.exports ={ find }
