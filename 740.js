// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
function multiples(m, n) {
  let result = []
  let temp = 0

  for (let i = 1; i <= m; i++) {
    temp += n
    result.push(temp)
  }

  return result
}
