// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

function intersection(arr1, arr2) {
  return arr1.filter(item => {
    return arr2.indexOf(item) !== -1
  })
}

console.log(intersection([2, 1], [2, 3]))
// => [2]

console.log(intersection([2, 1, 3, 1], [2, 3]))
// => [2, 3]

console.log(intersection([], [2, 3]))
// => []

console.log(intersection([1, 4, 5, 6], [1, 5, 6]))
// => [1, 5, 6]
