// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript
function evenOrOdd(str) {
  const diff = [...str].map(Number).reduce((a, b) => (b % 2 ? a - b : a + b), 0)

  if (diff > 0) return "Even is greater than Odd"

  if (diff < 0) return "Odd is greater than Even"

  return "Even and Odd are the same"
}
