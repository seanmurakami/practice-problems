//Creates a slice of array with n elements dropped from the end.

function dropRight(myArray, num) {
  if (num > myArray.length) return []
  if (num === 0 || !num) return myArray
  const newArray = myArray.slice(0, num)
  return newArray
}

console.log(dropRight([1, 2, 3]))
// => [1, 2]

console.log(dropRight([1, 2, 3], 2))
// => [1]

console.log(dropRight([1, 2, 3], 5))
// => []

console.log(dropRight([1, 2, 3], 0))
// => [1, 2, 3]
