const candies = (a) => {
  if (a.length < 2) return -1
  const max = Math.max(...a)
  return a.reduce((r, e) => r + max - e, 0)
}
