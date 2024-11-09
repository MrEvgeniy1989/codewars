// https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript
function change(string) {
  string = string.toLowerCase()
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(function (c) {
      return string.indexOf(c) !== -1 ? 1 : 0
    })
    .join("")
}
