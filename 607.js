// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
function listSquared(m, n) {
  let result = []

  for (let i = m; i <= n; i++) {
    let squareOfAllDivisors = 0
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        squareOfAllDivisors += j * j
      }
    }
    if (Number.isInteger(Math.sqrt(squareOfAllDivisors))) {
      result.push([i, squareOfAllDivisors])
    }
  }

  return result
}

listSquared(1, 250)
