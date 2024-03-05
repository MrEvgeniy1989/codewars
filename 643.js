// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
function minSum(arr) {
  arr.sort((a, b) => a - b)

  let sum = 0
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    sum += arr[left] * arr[right]
    left++
    right--
  }

  return sum
}
