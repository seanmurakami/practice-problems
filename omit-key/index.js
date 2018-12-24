function omit(myObject, myArray) {
  let x = {}
  for (let lookup in myObject){
    if (myArray.indexOf(lookup) === -1) {
      x[lookup] = myObject[lookup]
    }
  }
  return x
}


  var object = { a: 1, b: '2', c: 3 }

  console.log(omit(object, ['a', 'c']))
// => { b: '2' }
