/*
==========================================================================================
  Constants
==========================================================================================
*/

// circular numbers
const circle = {
  degrees: 360,
  pi: Math.PI
};

// keyboard keys
const keys = {
  delete: 8,
  tab: 9,
  return: 13,
  shift: 16,
  control: 17,
  option: 18,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  command: 91
};

// useful numbers
const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  ten: 10,
  hundred: 100,
  threesixty: 100,
  thousand: 1000
};

const Constants = { circle, keys, numbers };

/*
==========================================================================================
  Exports
==========================================================================================
*/

export { circle, keys, numbers };

export default Constants;
