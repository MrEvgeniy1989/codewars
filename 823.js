// https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript
function numberJoy(n) {
  const digitSum = n
    .toString()
    .split("")
    .reduce((acc, el) => acc + +el, 0)
  const digitSumRevers = Number(digitSum.toString().split("").reverse().join(""))

  return digitSum * digitSumRevers === n
}
