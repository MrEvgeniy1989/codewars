// https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript
function makeValley(arr) {
  const leftWing = []
  const rightWing = []
  arr.sort((a, b) => b - a).forEach((el, i) => (i % 2 === 0 ? leftWing.push(el) : rightWing.unshift(el)))

  return [...leftWing, ...rightWing]
}
