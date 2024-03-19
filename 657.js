// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2
}

countRedBeads(3) // 4
countRedBeads(5) // 8
