// https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript
function checkThreeAndTwo(array) {
  const obj = {
    a: 0,
    b: 0,
    c: 0,
  }
  array.forEach((el) => (obj[el] += 1))
  if (obj["a"] === 3 || obj["b"] === 3 || obj["c"] === 3) {
    if (obj["a"] === 2 || obj["b"] === 2 || obj["c"] === 2) {
      return true
    }
  }
  return false
}
