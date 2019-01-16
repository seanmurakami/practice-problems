function fibonacci(n) {
  const fib = [0, 1]
  if (n <= 1) return 1
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib[n]
}

console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3
console.log(fibonacci(12)) // 144
