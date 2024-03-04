// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript
function reverseNumber(n) {
  return n >= 0
    ? Number(n.toString().split("").reverse().join(""))
    : Number("-" + n.toString().substring(1).split("").reverse().join(""))
}

reverseNumber(123)
reverseNumber(-123)
