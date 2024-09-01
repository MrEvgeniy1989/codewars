// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
function isDivisible(firstN, ...otherN) {
  return otherN.every((n) => firstN % n === 0)
}
