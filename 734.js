// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript
function productArray(numbers) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    let temp = 1
    for (let j = 0; j < numbers.length; j++) {
      if (j === i) continue
      temp *= numbers[j]
    }
    result.push(temp)
  }
  return result
}

productArray([3, 27, 4, 2])
