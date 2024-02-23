// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
function adjacentElementsProduct(array) {
  let result = array[0] * array[1]
  for (let i = 1; i < array.length; i++) {
    if (array[i + 1]) {
      result = Math.max(result, array[i] * array[i + 1])
    }
  }
  return result
}
