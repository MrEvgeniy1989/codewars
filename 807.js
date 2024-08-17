// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
function solution(pairs) {
  return Object.keys(pairs)
    .map(function (k) {
      return k + " = " + pairs[k]
    })
    .join(",")
}
