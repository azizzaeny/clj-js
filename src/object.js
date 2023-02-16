const assoc = (obj, key, val) => {
  if (arguments.length === 3) {
    return { ...obj, [key]: val };
  } else if (arguments.length === 2) {
    return (val) => assoc(obj, key, val);
  }
  throw new Error('assoc function must be called with at least 2 arguments');
}

/*
 function assoc(obj, key, val) {
   return { ...obj, [key]: val };
 }
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

const assocIn = (obj, keys, val) => {
  if (arguments.length === 3) {
    keys = Array.isArray(keys) ? keys : [keys];
    return assoc(obj, keys[0], keys.length === 1 ? val : assocIn(obj[keys[0]], keys.slice(1), val));
  } else if (arguments.length === 2) {
    return (val) => assocIn(obj, keys, val);
  }
  throw new Error('assocIn function must be called with at least 2 arguments');
}

/*
function assocIn(obj, path, val) {
  if (path.length === 1) {
    return { ...obj, [path[0]]: val };
  } else {
    const [head, ...tail] = path;
    return { ...obj, [head]: assocIn(obj[head], tail, val) };
  }
}
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


const updateIn = (obj, keys, f) => {
  if (arguments.length === 3) {
    keys = Array.isArray(keys) ? keys : [keys];
    return assocIn(obj, keys, f(obj[keys[keys.length - 1]]));
  } else if (arguments.length === 2) {
    return (f) => updateIn(obj, keys, f);
  }
  throw new Error('updateIn function must be called with at least 2 arguments');
}

/*
function updateIn(obj, path, fn) {
  if (path.length === 1) {
    return { ...obj, [path[0]]: fn(obj[path[0]]) };
  } else {
    const [head, ...tail] = path;
    return { ...obj, [head]: updateIn(obj[head], tail, fn) };
  }
}
var playerUpdate = updateIn(playerUpdate, ["player", "address", "city"], (city) => "City "+ city)
playerUpdate
 */


// update
const update = (obj, key, f) => {
  if (arguments.length === 3) {
    return assoc(obj, key, f(obj[key]));
  } else if (arguments.length === 2) {
    return (f) => update(obj, key, f);
  }
  throw new Error('update function must be called with at least 2 arguments');
}

/*
function update(obj, key, fn){
  if (obj.hasOwnProperty(key)) {
    obj[key] = fn(obj[key]);
  }
  return obj;
};
var data = { a: 1, b: 2 };
update(data, 'a', x => x + 1); // { a: 2, b: 2 }
var playerUpdate = update(playerUpdate, "name", (name) => " Zaeny");
playerUpdate;
var playerUpdate = dissoc(playerUpdate, "name")
var playerUpdate = update(playerUpdate, "count_player", (n) => 1);
playerUpdate
*/

const selectKeys = (obj, keys) => {
  if (arguments.length === 2) {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => keys.includes(key)));
  } else if (arguments.length === 1) {
    return (keys) => selectKeys(obj, keys);
  }
  throw new Error('selectKeys function must be called with at least 1 argument');
}

/*
function selectKeys(obj, keys){
  const result = {};
  keys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });
  return result;
};
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


const mergeWith = (f, obj1, obj2) => {
  if (arguments.length === 3) {
    const result = { ...obj1 };
    Object.keys(obj2).forEach((key) => {
      if (result.hasOwnProperty(key)) {
        result[key] = f(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    });
    return result;
  } else if (arguments.length === 2) {
    return (obj2) => mergeWith(f, obj1, obj2);
  }
  throw new Error('mergeWith function must be called with at least 2 arguments');
}

/*
function mergeWith (fn, ...maps) {
  return maps.reduce((acc, map) => {
  for (const [key, value] of Object.entries(map)) {
    acc[key] = acc.hasOwnProperty(key) ? fn(acc[key], value) : value;
  }
  return acc;
  }, {});
}
var result = mergeWith((a, b) => a + b, { a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 });
result
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

// TODO Improved version by checking the arguments length for better arity and curried

function zipmap(keys, vals) {
  return keys.reduce((result, key, i) => {
    result[key] = vals[i];
    return result;
  }, {});
}

/*
  zipmap(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
 */

module.exports = {
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
};
