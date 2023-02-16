const atom = (initialValue) => {
  let value = initialValue;

  return {
    deref: () => value,
    swap: (f, ...args) => (value = f(value, ...args)),
    reset: (newValue) => (value = newValue),
    compareAndSet: (oldValue, newValue) => {
      if (value === oldValue) {
        value = newValue;
        return true;
      }
      return false;
    },
    watchers: [],
    addWatch: (key, f) => atom.watchers.push([key, f]),
    removeWatch: (key) => (atom.watchers = atom.watchers.filter(([k, f]) => k !== key)),
    setValidator: (f) => (atom.validator = f),
    getValidator: () => atom.validator,
  };
};

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
