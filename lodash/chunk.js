//Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(myArray, int) {
  const result = []
  let section = []
  for (let i = 0; i < myArray.length; i++) {
    if (section.length < int) {
      section.push(myArray[i])
    }
    if (section.length === int) {
      result.push(section)
      section = []
    }
    if (i === myArray.length - 1 && section.length < int && section.length !== 0) {
      result.push(section)
    }
  }
  return result
}


console.log(chunk(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]

console.log(chunk(['a', 'b', 'c', 'd'], 4))
// => [['a', 'b', 'c', 'd']]
