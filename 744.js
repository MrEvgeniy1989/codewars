// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript
function swap(string) {
  let result = ""

  for (let i = 0; i < string.length; i++) {
    let temp = string[i]
    if (string[i].match(/[aeiou]/gi)) {
      temp = string[i].toUpperCase()
    }
    result += temp
  }

  return result
}
