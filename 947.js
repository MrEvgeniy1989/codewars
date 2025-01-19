function solve(a) {
  return a.reduce((x, y) => (Number.isInteger(y) ? (y % 2 === 0 ? x + 1 : x - 1) : x), 0)
}
