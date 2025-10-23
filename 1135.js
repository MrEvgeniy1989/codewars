function equableTriangle(a, b, c) {
  const p = (a + b + c) / 2
  return 4 * p === (p - a) * (p - b) * (p - c)
}
