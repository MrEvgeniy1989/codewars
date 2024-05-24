// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0)
}

sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")
