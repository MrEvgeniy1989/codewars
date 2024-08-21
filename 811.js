// https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
function initializeNames(name) {
  const n = name.split(" ")
  if (n.length < 3) return name
  for (i = 1; i < n.length - 1; i++) {
    n[i] = n[i][0] + "."
  }
  return n.join(" ")
}
