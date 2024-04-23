// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript
function alternateCase(s) {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    s[i].toUpperCase() === s[i] ? (result += s[i].toLowerCase()) : (result += s[i].toUpperCase())
  }
  return result
}
