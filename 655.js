// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript
const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count === 0) {
      return "0=0"
    }
    if (count < 0) {
      return `${count}<0`
    }
    let sum = 0
    let result = "0"
    for (let i = 1; i <= count; i++) {
      sum += i
      result += `+${i}`
    }

    return result + " = " + sum
  }

  return SequenceSum
})()
