// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript
function sumTriangularNumbers(n) {
  if (n < 0) return 0
  let result = 0
  let temp = 0

  for (let i = 0; i < n; i++) {
    temp += i + 1
    result += temp
  }

  return result
}

sumTriangularNumbers(6)
