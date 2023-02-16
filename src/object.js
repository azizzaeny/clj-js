function assoc(obj, key, val) {
  return { ...obj, [key]: val };
}
/*
 var player = { name: "aziz", "foot": "R"}
 var playerUpdate = assoc(player, "foot", "L");
 playerUpdate
*/

function dissoc(obj, key) {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}
/*
 var playerNation= assoc(playerUpdate, "country", "ID")
 playerNation
 var player = dissoc(playerNation, "country");
*/


function assocIn(obj, path, val) {
  if (path.length === 1) {
    return { ...obj, [path[0]]: val };
  } else {
    const [head, ...tail] = path;
    return { ...obj, [head]: assocIn(obj[head], tail, val) };
  }
}

/*
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
playerUpdate
 */

function updateIn(obj, path, fn) {
  if (path.length === 1) {
    return { ...obj, [path[0]]: fn(obj[path[0]]) };
  } else {
    const [head, ...tail] = path;
    return { ...obj, [head]: updateIn(obj[head], tail, fn) };
  }
}

/*
var playerUpdate = updateIn(playerUpdate, ["player", "address", "city"], (city) => "City "+ city)
playerUpdate
 */


function update(obj, key, fn){
  if (obj.hasOwnProperty(key)) {
    obj[key] = fn(obj[key]);
  }
  return obj;
};

/*
var data = { a: 1, b: 2 };
update(data, 'a', x => x + 1); // { a: 2, b: 2 }
var playerUpdate = update(playerUpdate, "name", (name) => " Zaeny");
playerUpdate;
var playerUpdate = dissoc(playerUpdate, "name")
var playerUpdate = update(playerUpdate, "count_player", (n) => 1);
playerUpdate
*/

function selectKeys(obj, keys){
  const result = {};
  keys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });
  return result;
};

/*
selectKeys({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
*/


function renameKeys(obj, keyMap) {
  const renamedObj = Object.entries(obj)
    .reduce((acc, [key, value]) => keyMap[key] ? { ...acc, [keyMap[key]]: value } : { ...acc, [key]: value }, {});
  return renamedObj;
}

/*

var person = { name: "John", age: 30, city: "New York" };
var renamedPerson = renameKeys(person, { name: "full_name", city: "location" });
renamedPerson // { full_name: "John", age: 30, location: "New York" }

 */


function mergeWith (fn, ...maps) {
  return maps.reduce((acc, map) => {
  for (const [key, value] of Object.entries(map)) {
    acc[key] = acc.hasOwnProperty(key) ? fn(acc[key], value) : value;
  }
  return acc;
  }, {});
}

/*
var result = mergeWith((a, b) => a + b, { a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 });
result
*/

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

function getIn(coll, keys){
  return keys.reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    } else {
      return undefined;
    }
  }, coll);
};

/*
getIn({ a: { b: { c: 1 } } }, ['a', 'b', 'c']); // 1
*/

const get = (obj, key) => {
  return obj[key];
};

const keys = (obj) => {
  return Object.keys(obj);
};

const vals = (obj) => {
  return Object.values(obj);
};

/*
get({ a: 1, b: 2 }, "a"); // 1
keys({ a: 1, b: 2 }); // ['a', 'b']
vals({ a: 1, b: 2 }); // [1, 2]
*/
module.exports = {
  get,
  keys,
  vals,
  getIn,
  contains,
  mergeWith,
  renameKeys,
  selectKeys,
  update,
  updateIn,
  assocIn,
  assoc,
  dissoc
};
