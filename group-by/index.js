function groupBy(myArray, category) {
  let x = {}
  let newArray = []
  for (let i = 0; i < myArray.length; i++) {
    for (let y in myArray[i]) {
      if (y === category && newArray.indexOf(myArray[i][y] === -1)) {
        x[myArray[i][y]] = []
        newArray.push(myArray[i][y])
      }
    }
  }
  for (let z = 0; z < myArray.length; z++){
    for (let lookup in x){
      if (lookup === myArray[z][category]){
        x[lookup].push(myArray[z])
      }
    }
  }
  return x
}





var inventoryItems = [{
    id: 1,
    color: 'black',
    category: 'hats'
  },
  {
    id: 2,
    color: 'blue',
    category: 'pants'
  },
  {
    id: 3,
    color: 'red',
    category: 'hats'
  },
  {
    id: 4,
    color: 'black',
    category: 'pants'
  }
]

groupBy(inventoryItems, 'category')

/**
 * {
 *   hats: [
 *     { id: 1, color: 'black', category: 'hats' },
 *     { id: 3, color: 'red', category: 'hats' }
 *   ],
 *   pants: [
 *     { id: 2, color: 'blue', category: 'pants' },
 *     { id: 4, color: 'black', category: 'pants' }
 *   ]
 * }
 */
