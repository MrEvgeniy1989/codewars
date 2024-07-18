// https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript
function bandNameGenerator(str) {
  let result = ""
  if (str[0] === str[str.length - 1]) {
    result += str.slice(0, 1).toUpperCase() + str.slice(1) + str.slice(1)
  } else {
    result += `The ${str.slice(0, 1).toUpperCase() + str.slice(1)}`
  }
  return result
}
