// https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript
function average(scores) {
  return Math.round(scores.reduce((x, y) => x + y, 0) / scores.length)
}
