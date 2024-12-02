// https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript
function mergeArrays(a, b) {
  const result = []
  const resultLength = Math.max(a.length, b.length)

  for (let i = 0; i < resultLength; i++) {
    if (a[i]) {
      result.push(a[i])
    }
    if (b[i]) {
      result.push(b[i])
    }
  }

  return result
}
