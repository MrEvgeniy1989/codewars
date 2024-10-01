// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
function solve(arr) {
  const minMax = []
  arr.sort((a, b) => a - b)
  let i = 0,
    j = arr.length - 1
  for (; i <= j; i++, j--) {
    if (i !== j) {
      minMax.push(arr[j])
      minMax.push(arr[i])
    } else minMax.push(arr[i])
  }
  return minMax
}
