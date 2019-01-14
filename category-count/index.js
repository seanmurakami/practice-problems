function categoryCount(myArray, category) {
  let count = 0
  myArray.forEach(item => {
    if (typeof item === 'object') {
      count += categoryCount(item, category)
    }
    if (item === category) {
      count++
    }
  })
  return count
}

console.log(categoryCount(['hello', ['hello', 'new', ['hello']]], 'hello')) // return 3
console.log(categoryCount([], 'new')) // return 0
console.log(categoryCount(['example', ['random', ['example', 'hello']]], 'example')) // return 2
console.log(categoryCount(['hello'], 'sample')) // return 0
