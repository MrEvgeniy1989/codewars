function completeSeries(arr) {
  return new Set(arr).size === arr.length ? [...Array(Math.max(...arr) + 1).keys()] : [0]
}
