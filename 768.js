// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript
function longestWord(stringOfWords) {
  console.log(stringOfWords)
  let arr = stringOfWords.split(" ")
  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length >= result.length) {
      result = arr[i]
    }
  }
  return result
}
