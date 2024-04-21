// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
function menFromBoys(arr) {
  console.log(arr)
  arr = new Set(arr)
  const even = [...arr].filter((item) => item % 2 === 0).sort((a, b) => a - b)
  const odd = [...arr].filter((item) => item % 2 !== 0).sort((a, b) => b - a)
  return [...even, ...odd]
}
