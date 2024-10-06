// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript
function broken(x) {
  return x
    .split("")
    .map((a) => (a === "0" ? "1" : "0"))
    .join("")
}
