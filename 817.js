// https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript
function isNice(arr) {
  return !!arr.length && arr.every((x) => arr.some((y) => y === x - 1 || y === x + 1))
}
