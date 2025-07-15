function climb(n) {
  const res = [n]

  while (n > 1) {
    n = Math.floor(n / 2)
    res.push(n)
  }

  return res.reverse()
}
