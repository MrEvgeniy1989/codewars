const sumAverage = (arr) => {
  const result = arr.map((x) => x.reduce((a, b) => a + b) / x.length).reduce((a, b) => a + b)
  return Math.floor(result)
}
