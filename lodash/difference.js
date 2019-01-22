// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

function difference(inspect, lookup) {
  return inspect.filter(item => lookup.indexOf(item) === -1)
}

console.log(difference([2, 1], [2, 3]))
// => [1]

console.log(difference([2, 1], [1, 2, 3]))
// => []

console.log(difference([2, 1], [3]))
// => [2, 1]

console.log(difference([2, 1, 7], [1]))
// => [2, 7]
