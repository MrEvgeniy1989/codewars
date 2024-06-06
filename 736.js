// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript
function pattern(n) {
  if (n < 1) return ""
  let output = "1"

  for (let i = 2; i <= n; i++) {
    output += "\n"
    for (let j = 0; j < i; j++) {
      output += i
    }
  }

  return output
}

pattern(5)
