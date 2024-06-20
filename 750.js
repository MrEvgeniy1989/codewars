// https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript
function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1
}
