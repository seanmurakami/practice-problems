function tribonacci(signature,n){
  if(n === 0) return []
  if(n === 1) return [signature[0]]
  const newSig = [...signature]
  let counter = 0
  while (newSig.length < n) {
    newSig.push(newSig[counter] + newSig[counter+1] + newSig[counter+2])
    counter++
  }
  return newSig
}

console.log(tribonacci([1,1,1],10)) // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0,0,1],10)) // [0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([0,1,1],10)) // [0,1,1,2,4,7,13,24,44,81]
console.log(tribonacci([1,1,1],1)) // [1]
