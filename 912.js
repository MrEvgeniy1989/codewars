function minMinMax(arr) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) return [min, i, max]
  }
}
