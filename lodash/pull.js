// Removes all given values from array using SameValueZero for equality comparisons.

function pull(arr, ...items) {
  return arr.filter(item => items.indexOf(item) === -1)
}

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log(pull(array, 'a', 'c'))
// => ['b', 'b']
