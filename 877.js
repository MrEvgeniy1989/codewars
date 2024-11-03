// https://www.codewars.com/kata/5637b03c6be7e01d99000046/train/javascript
function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((s) => s[0])
    .join("")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5")
}
