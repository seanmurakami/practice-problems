// A function that accepts an array of arrays.  It returns an object with the key and value set to the first and second value of each array item.

function fromPairs(myArray) {
  return myArray.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})
}

console.log(fromPairs([['a', 1], ['b', 2]]))
// => { 'a': 1, 'b': 2 }

console.log(fromPairs([['a', 1], ['b', 2], ['hello', 8]]))
// => { 'a': 1, 'b': 2, 'hello': 8 }
