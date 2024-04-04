// https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
function nthSmallest(arr, pos) {
  arr.sort((a, b) => a - b)

  return arr[pos - 1]
}
