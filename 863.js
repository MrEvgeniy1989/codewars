// https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript
function pattern(n) {
  let output = ""
  let star = ""

  for (let i = 1; i < n; i++) {
    star += "*"
    output += `${i}\n1${star}`
  }

  return output + n
}

pattern(3)
