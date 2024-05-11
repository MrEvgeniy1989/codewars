// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript
function getSumOfDigits(integer) {
  let sum = 0
  const digits = integer.toString().split("")
  for (let i = 0; i < digits.length; i++) {
    sum += +digits[i]
  }
  return sum
}
