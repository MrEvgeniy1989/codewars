// https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript
function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16)
}

evensAndOdds(13)
