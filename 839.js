// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript
function countLettersAndDigits(s) {
  return s.replace(/[^a-z\d]/gi, "").length
}
