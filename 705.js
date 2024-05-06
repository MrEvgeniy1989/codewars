// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
function maxProduct(numbers, size) {
  let result = 1
  for (let i = 0; i < size; i++) {
    let max = Math.max(...numbers)
    let index = numbers.indexOf(max)
    numbers.splice(index, 1)
    result *= max
  }
  return result
}

maxProduct([4, 3, 5], 2)
