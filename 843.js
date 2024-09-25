// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0/train/javascript
function lastDigit(n, d) {
  const nums = String(n).split("").map(Number)
  const len = nums.length
  let index = 0
  return nums.filter((el) => index++ >= len - d)
}
