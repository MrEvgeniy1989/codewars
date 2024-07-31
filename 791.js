// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript
function modifiedSum(a, n) {
  return a.reduce((s, c) => s + Math.pow(c, n) - c, 0)
}
