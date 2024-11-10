// https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript
function isVeryEvenNumber(n) {
  return !n-- || (n % 9) % 2 === 1
}
