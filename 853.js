// https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript
function replaceNth(text, n, oldValue, newValue) {
  let count = 0
  return text
    .split("")
    .map(function (item) {
      if (item === oldValue) {
        count++
        if (count === n) {
          item = newValue
          count = 0
        }
      }
      return item
    })
    .join("")
}
