// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
function solve(a, b) {
  return (a + b)
    .split("")
    .filter((c) => !a.includes(c) || !b.includes(c))
    .join("")
}

solve("xyabb", "xzca")
solve("xyab", "xzca")
