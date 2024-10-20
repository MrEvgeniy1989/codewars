// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript
function pattern(n) {
  if (n < 1) return ""
  const lines = []

  for (let i = 0; i < n; i++) {
    let line = ""

    for (let j = n; j > i; j--) {
      line += j
    }

    lines.push(line)
  }

  return lines.join("\n")
}
