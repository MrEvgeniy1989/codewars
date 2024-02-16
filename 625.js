// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
function evenNumbers(array, number) {
  let result = []

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      result.unshift(array[i])
    }
    if (result.length === number) {
      break
    }
  }

  return result
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)
