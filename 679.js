// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
function tidyNumber(n) {
  const digits = String(n).split("").map(Number)

  let digit = digits[0]
  for (let i = 1; i < digits.length; i++) {
    if (digit > digits[i]) {
      return false
    } else {
      digit = digits[i]
    }
  }

  return true
}

tidyNumber(9672)
