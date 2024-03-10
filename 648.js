// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
function toNumberArray(stringarray) {
  let output = []
  for (let i = 0; i < stringarray.length; i++) {
    output.push(Number(stringarray[i]))
  }
  return output
}
