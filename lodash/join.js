// Converts all elements in array into a string separated by separator.

function join(arr, str) {
  return arr.slice('').join(str)
}

console.log(join(['a', 'b', 'c'], '~'))
// => 'a~b~c'

console.log(join(['a', 'b', 'c'], '+'))
// => 'a+b+c'

console.log(join(['a', 'b', 'c'], ' '))
// => 'a b c'
