// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
function solve(s) {
  let result = 0
  let temp = 0
  for (let i = 0; i < s.length; i++) {
    if (/[^aeiou]/.test(s[i])) {
      temp += s.charCodeAt(i) - 96
    } else {
      result = Math.max(result, temp)
      temp = 0
    }
  }
  result = Math.max(result, temp)
  return result
}

solve("az")
solve("zodiac")
solve("chruschtschov")
