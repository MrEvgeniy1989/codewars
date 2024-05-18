// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript
function containAllRots(str, arr) {
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false
    }
  }
  return true
}
