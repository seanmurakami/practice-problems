// Creates a slice of array with n elements dropped from the beginning.

function drop(myArray, int = 1) {
  if (int > myArray.length) return []
  myArray.splice(0, int)
  return myArray
}

console.log(drop([1, 2, 3]))
// => [2, 3]

console.log(drop([1, 2, 3], 2))
// => [3]

console.log(drop([1, 2, 3], 5))
// => []

console.log(drop([1, 2, 3], 0))
// => [1, 2, 3]
