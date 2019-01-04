var uniqueInOrder=function(iterable){
  if(iterable.length === 0) return []
  const result = [iterable[0]]
  if (typeof iterable === "string") {
    iterable.split('').forEach(item => {
      if (result.indexOf(item) === -1 || result[result.length - 1] !== item) return result.push(item)
    })
  }
  else {
    iterable.forEach(item => {
      if (result.indexOf(item) === -1 || result[result.length - 1] !== item) return result.push(item)
    })
  }
  return result
}
