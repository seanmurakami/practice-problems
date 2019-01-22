// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(myArray) {
  return myArray.filter(item => item)
}

console.log(compact([0, 1, false, 2, '', 3]))
// => [1, 2, 3]

console.log(compact([0, 1, false, 2, '', 3, NaN, undefined, 4, 8, 'hello']))
// => [1, 2, 3, 4, 8, 'hello']
