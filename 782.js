// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript
function spacey(array) {
  let result = []
  let word = ""
  for (let i = 0; i < array.length; i++) {
    word += array[i]
    result.push(word)
  }
  return result
}
