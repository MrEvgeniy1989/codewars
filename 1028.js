const sumOrProduct = (arr, n) => {
  const sorted = arr.sort((a, b) => a - b)
  const sum = sorted.slice(-n).reduce((acc, i) => acc + i)
  const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1)
  return sum > product ? "sum" : sum < product ? "product" : "same"
}
