// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript
function disariumNumber(n) {
  const result = n
    .toString()
    .split("")
    .reduce((acc, el, index) => acc + Math.pow(+el, index + 1), 0)
  return result === n ? "Disarium !!" : "Not !!"
}

disariumNumber(89)
