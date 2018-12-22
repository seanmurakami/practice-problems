function findVowel(word) {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 }
  word.split('').forEach(letter => vowels[letter] === undefined ? null : vowels[letter]++)
  return vowels
}

console.log(findVowel('Sean')) // {a: 1, e: 1, i: 0, o: 0, u: 0}
console.log(findVowel('Hello there')) // {a: 0, e: 3, i: 0, o: 1, u: 0}
