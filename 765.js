// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript
function solve(n) {
  if (n % 10 !== 0) return -1

  let result = 0

  let banknotes = Math.floor(n / 500)
  result += banknotes
  n -= banknotes * 500
  banknotes = Math.floor(n / 200)
  result += banknotes
  n -= banknotes * 200
  banknotes = Math.floor(n / 100)
  result += banknotes
  n -= banknotes * 100
  banknotes = Math.floor(n / 50)
  result += banknotes
  n -= banknotes * 50
  banknotes = Math.floor(n / 20)
  result += banknotes
  n -= banknotes * 20
  banknotes = Math.floor(n / 10)
  result += banknotes

  return result
}

solve(770)
