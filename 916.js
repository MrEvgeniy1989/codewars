// https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript
function getLargerNumbers(a, b) {
  let result = []

  for (let i = 0; i < a.length; i++) {
    result.push(Math.max(a[i], b[i]))
  }

  return result
}
