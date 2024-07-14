// https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript
function twoArePositive(a, b, c) {
  let temp = 0
  if (a > 0) {
    temp += 1
  }
  if (b > 0) {
    temp += 1
  }
  if (c > 0) {
    temp += 1
  }
  return temp === 2
}
