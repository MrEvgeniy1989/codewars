// https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript
function seven(m) {
  let i = 0
  while (m.toString().length > 2) {
    m = Math.floor(m / 10) - (m % 10) * 2
    i++
  }
  return [m, i]
}
