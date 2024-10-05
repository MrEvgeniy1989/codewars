// https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript
String.prototype.isLetter = function () {
  return !!(this.length === 1 && this.match(/[a-zA-Z]/))
}
