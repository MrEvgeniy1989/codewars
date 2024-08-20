// https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript
function sum() {
  let total = 0
  for (const i in arguments) {
    total += arguments[i]
  }
  return total
}
