// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

function reverse(arr) {
  const result = []
  if (arr.length === 0) return ''
  const last = arr[arr.length - 1]
  result.push(last, ...reverse(arr.slice(0, arr.length - 1)))
  return result
}

var array = [1, 2, 3];

console.log(reverse(array))
// => [3, 2, 1]

console.log(reverse([1, 2, 3, 4, 'a', 'hello']))
// => ['hello', 'a', 4, 3, 2, 1]
