// https://www.codewars.com/kata/5a662a02e626c54e87000123/train/javascript
function extraPerfect(n) {
  let result = []
  for (let i = 1; i <= n; i = i + 2) {
    result.push(i)
  }
  return result
}
