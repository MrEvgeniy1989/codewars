// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript
function numbersWithDigitInside(x, d) {
  if (x < d) return [0, 0, 0]
  let count = 0
  let sum = 0
  let product = 1
  for (let i = 1; i <= x; i++) {
    if (i > 9) {
      let iStr = i.toString()
      if (iStr.includes(d)) {
        count++
        sum += i
        product *= i
      }
    } else {
      if (i === d) {
        count++
        sum += i
        product *= i
      }
    }
  }

  return [count, sum, count < 1 ? 0 : product]
}

numbersWithDigitInside(1, 0)
