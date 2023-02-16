
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
