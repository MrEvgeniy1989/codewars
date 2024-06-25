// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript
function makeString(s) {
  return s
    .split(" ")
    .map((s) => s[0])
    .join("")
}
