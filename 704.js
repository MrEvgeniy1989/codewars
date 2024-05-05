// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
function calc(x) {
  let total1 = ""
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i)
  }
  let total2 = total1
    .replace(/7/g, 1)
    .split("")
    .reduce((acc, el) => acc + +el, 0)
  total1 = total1.split("").reduce((acc, el) => acc + +el, 0)
  return total1 - total2
}

calc("aaaaaddddr")
calc("abcdef")
