// https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/javascript
function houseNumbersSum(inputArray) {
  let sum = 0
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      break
    }
    sum += inputArray[i]
  }

  return sum
}

houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])
