// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript
function differenceOfSquares(n) {
  let sumOfSquaresNumbers = 0
  let sum = 0

  for (let i = 1; i <= n; i++) {
    sum += i
    sumOfSquaresNumbers += i ** 2
  }

  return sum ** 2 - sumOfSquaresNumbers
}

differenceOfSquares(5)
differenceOfSquares(10)
differenceOfSquares(100)
