// This method is like _.uniq except that it's designed and optimized for sorted arrays.

function sortedUniq(arr) {
  return arr.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {acc.push(cur)}
    return acc
  }, [])
}

console.log(sortedUniq([1, 1, 2]))
// => [1, 2]

console.log(sortedUniq([1, 1, 2, 2, 3, 6, 6]))
// => [1, 2, 3, 6]
