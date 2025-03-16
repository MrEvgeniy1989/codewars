const sumSquareEvenRootOdd = (ns) => {
  return +ns.reduce((a, b) => a + (b % 2 ? b ** 0.5 : b ** 2), 0).toFixed(2)
}
