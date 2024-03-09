// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
function generateShape(integer) {
  let result = ""
  for (let i = 0; i < integer; i++) {
    result += "+".repeat(integer) + "\n"
  }
  return result.substring(0, result.length - 1)
}
