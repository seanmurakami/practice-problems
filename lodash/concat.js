// Creates a new array concatenating array with any additional arrays and/or values.

function concat(...items) {
  let result = []
  items.map(item => {
    if (typeof item === 'object') return result.push(...item)
    result.push(item)
  })
  return result
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]
