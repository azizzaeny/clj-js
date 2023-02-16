function apply(fn, args) {
  return fn(...args);
}

function comp(...fns) {
  return function(x) {
    return fns.reduceRight(function(acc, fn) {
      return fn(acc);
    }, x);
  };
}

function some(fn, coll) {
  for (let i = 0; i < coll.length; i++) {
    if (fn(coll[i])) {
      return true;
    }
  }
  return false;
}

function constantly(x) {
  return function() {
    return x;
  };
}

function identity(x) {
  return x;
}

function fnil(f, defaultVal) {
  return function() {
    const args = Array.from(arguments);
    const numArgs = f.length;
    while (args.length < numArgs) {
      args.push(defaultVal);
    }
    return f.apply(null, args);
  };
}

function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
    return cache.get(key);
  };
}

function everyPred(...fns) {
  return function(x) {
    for (let i = 0; i < fns.length; i++) {
      if (!fns[i](x)) {
        return false;
      }
    }
    return true;
  };
}

function complement(fn) {
  return function(...args) {
    return !fn(...args);
  };
}

function partial(fn, ...args) {
  return function(...moreArgs) {
    return fn(...args, ...moreArgs);
  };
}

function juxt(...fns) {
  return function(...args) {
    return fns.map(function(fn) {
      return fn(...args);
    });
  };
}

function someFn(...fns) {
  return function(x) {
    for (let i = 0; i < fns.length; i++) {
      if (fns[i](x)) {
        return true;
      }
    }
    return false;
  };
}

function thread(val, ...forms) {
  return forms.reduce((acc, form) => form(acc), val);
}

/*
thread(1, x => x + 2, x => x * 3); // returns 9
*/

function threadLast(val, ...forms) {
  return forms.reduceRight((acc, form) => form(acc), val);
}

/*
threadLast(1, x => x + 2, x => x * 3); // returns 9
*/

function threadAs(name, val, ...forms) {
  return forms.reduce((acc, form) => form(name ? { [name]: acc } : acc), val);
}

/*
threadAs('x', 1, x => ({ y: x + 2 }), ({ y, x }) => ({ z: y * x })); // returns { z: 3 }
*/

function condThread(val, ...clauses) {
  return clauses.reduce((acc, [pred, ...forms]) => pred(acc) ? thread(acc, ...forms) : acc, val);
}

/*
condThread(0,
  [x => x === 0, x => x + 2],
  [x => x === 2, x => x * 3]
); // returns 2
*/

function condThreadLast(val, ...clauses) {
  return clauses.reduceRight((acc, [pred, ...forms]) => pred(acc) ? threadLast(acc, ...forms) : acc, val);
}

/*
condThreadLast(0,
  [x => x === 0, x => x + 2],
  [x => x === 2, x => x * 3]
); // returns 6
*/

function someThread(val, ...forms) {
  for (let form of forms) {
    if (val == null) {
      return val;
    }
    val = form(val);
  }
  return val;
}

function someThreadLast(input, ...forms) {
  return forms.reduce((acc, form) => {
    if (acc === null || acc === undefined) {
      return null;
    }
    if (typeof form === "function") {
      return form(acc);
    }
    if (Array.isArray(acc)) {
      return acc.some(item => {
        return typeof item[form] === "function" ? item[form]() : false;
      })
        ? acc
        : null;
    }
    return form in acc ? acc[form] : null;
  }, input);
}

module.exports = {
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
