// https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript
function calculate(str) {
  let result

  result = str
    .split("plus")
    .join(" ")
    .split("minus")
    .join(" -")
    .split(" ")
    .reduce((a, c) => +a + +c)
  return result + ""
}
