// https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript
function reverseBits(n) {
  const binaryReverse = n.toString(2).split("").reverse().join("")
  return parseInt(binaryReverse, 2)
}
