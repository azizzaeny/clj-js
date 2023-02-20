function atom(val) {
  let value = val;
  let watchers = new Set();
  let validator = undefined;

  function deref() {
    return value;
  }

  function reset(newVal) {
    if (validator !== undefined) {
      validator(newVal);
    }
    const oldVal = value;
    value = newVal;
    watchers.forEach((watcher) => watcher(newVal, oldVal));
    return newVal;
  }

  function swap(fn, ...args) {
    return reset(fn(value, ...args));
  }

  function compareAndSet(expectedVal, newVal) {
    if (deref() === expectedVal) {
      reset(newVal);
      return true;
    } else {
      return false;
    }
  }

  function addWatch(watcherFn) {
    watchers.add(watcherFn);
  }

  function removeWatch(watcherFn) {
    watchers.delete(watcherFn);
  }

  function setValidator(validatorFn) {
    validator = validatorFn;
  }

  function getValidator() {
    return validator;
  }

  return {
    deref,
    reset,
    swap,
    compareAndSet,
    addWatch,
    removeWatch,
    setValidator,
    getValidator,
  };
}

function deref(atom){
  return atom.deref();
}

/*
const myAtom = atom(0);
console.log(myAtom.deref()); // 0
const myAtom = atom(0);
myAtom.reset(1);
myAtom.swap((x) => x + 1);
console.log(myAtom.deref()); // 1

const myAtom = atom(0);
myAtom.addWatch("my-key", (key, atom, oldVal, newVal) =>
  console.log(`Atom value changed from ${oldVal} to ${new

const myAtom = atom(0);
myAtom.addWatch("my-key", (key, atom, oldVal, newVal) =>
  console.log(`Atom value changed from ${oldVal} to ${newVal}`)
);
myAtom.swap((x) => x + 1);
// Output: Atom value changed from 0 to 1

const myAtom = atom(0);
myAtom.compareAndSet(0, 1);
console.log(myAtom.deref()); // 1
myAtom.compareAndSet(0, 2);
console.log(myAtom.deref()); // 1

*/
module.exports = {atom, deref};
