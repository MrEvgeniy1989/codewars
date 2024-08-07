// https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript
function divisibleByThree(str) {
  const sum = str.split("").reduce((acc, el) => acc + +el, 0)

  return sum % 3 === 0
}
