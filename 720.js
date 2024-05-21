// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
function add(num1, num2) {
  let result = []
  let num1Arr = num1.toString().split("").reverse()
  let num2Arr = num2.toString().split("").reverse()

  for (let i = 0; i < Math.max(num1Arr.length, num2Arr.length); i++) {
    let num1Number = parseInt(num1Arr[i]) || 0
    let num2Number = parseInt(num2Arr[i]) || 0
    result.push(num1Number + num2Number)
  }

  return parseInt(result.reverse().join(""))
}

add(2, 11)
add(16, 18)
