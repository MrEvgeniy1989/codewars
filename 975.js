const isMonotone = function (arr) {
  return arr.every(function (x, idx) {
    return idx === 0 ? true : arr[idx] >= arr[idx - 1]
  })
}
