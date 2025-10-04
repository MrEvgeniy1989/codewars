function strangeMath(n, k) {
  const arr = [0]

  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  return arr.sort().indexOf(k)
}
