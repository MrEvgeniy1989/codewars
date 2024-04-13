// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript
function strong(n) {
  let arr = String(n).split("")

  let sum = 0

  function factorial(fnNum) {
    if (fnNum <= 1) {
      return 1
    } else {
      return fnNum * factorial(fnNum - 1)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += factorial(arr[i])
  }

  return n === sum ? "STRONG!!!!" : "Not Strong !!"
}
