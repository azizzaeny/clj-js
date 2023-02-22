var assoc = (...args) => {
  let [obj, key, val] = args;
  if (args.length === 3) {
    return { ...obj, [key]: val };
  } else if (args.length === 2) {
    return (val) => assoc(obj, key, val);
  }else{
    return (key, val) => assoc(obj, key, val);
  }
}

function dissoc(obj, key) {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}

const assocIn = (...args) => {
  let [obj, keys, val] = args;
  if (args.length === 3) {
    keys = Array.isArray(keys) ? keys : [keys];
    return assoc(obj, keys[0], keys.length === 1 ? val : assocIn(obj[keys[0]], keys.slice(1), val));
  } else if (args.length === 2) {
    return (val) => assocIn(obj, keys, val);
  }
  // throw new Error('assocIn function must be called with at least 2 arguments');
}

// update function
function update(...args) {
  let [object, key, updateFn] = args;
  if (args.length === 2) {
    return (updateFn) => update(object, key, updateFn);
  }
  return {
    ...object,
    [key]: updateFn(object[key])
  };
}

// update-in function
function updateIn(...args) {
  let [object, keys, updateFn] = args;
  if (args.length === 2) {
    return (updateFn) => updateIn(object, keys, updateFn);
  }
  const [key, ...rest] = keys;
  if (rest.length === 0) {
    return update(object, key, updateFn);
  }
  return update(object, key, (value) => updateIn(value, rest, updateFn));
}

const selectKeys = (...args) => {
  let [obj, keys] = args;
  if (args.length === 2) {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => keys.includes(key)));
  } else if (args.length === 1) {
    return (keys) => selectKeys(obj, keys);
  }
  //throw new Error('selectKeys function must be called with at least 1 argument');
}

function renameKeys(obj, keyMap) {
  const renamedObj = Object.entries(obj)
    .reduce((acc, [key, value]) => keyMap[key] ? { ...acc, [keyMap[key]]: value } : { ...acc, [key]: value }, {});
  return renamedObj;
}

function mergeWith(fn, ...maps) {
  if (maps.length === 0) {
    return {};
  } else if (maps.length === 1) {
    return maps[0];
  } else {
    const [head, ...tail] = maps;
    const merged = mergeWith(fn, ...tail);
    const result = {};
    for (const [key, value] of Object.entries(head)) {
      if (key in merged) {
        result[key] = fn(merged[key], value);
      } else {
        result[key] = value;
      }
    }
    for (const [key, value] of Object.entries(merged)) {
      if (!(key in head)) {
        result[key] = value;
      }
    }
    return result;
  }
}

function getIn(coll, keys){
  return keys.reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    } else {
      return undefined;
    }
  }, coll);
};

const get = (obj, key) => {
  return obj[key];
};

const keys = (obj) => {
  return Object.keys(obj);
};

const vals = (obj) => {
  return Object.values(obj);
};

function zipmap(keys, vals) {
  return keys.reduce((result, key, i) => {
    result[key] = vals[i];
    return result;
  }, {});
}

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
